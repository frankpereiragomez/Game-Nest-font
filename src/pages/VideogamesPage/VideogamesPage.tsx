import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { loadVideogamesActionCreator } from "../../store/videogame/videogameSlice";
import VideogameList from "../../components/VideogamesList/VideogamesList";
import VideogamesPageStyled from "./VideogamesPageStyled";
import useVideogames from "../../hooks/useVideogames/useVideogames";

const VideogamesPage = (): React.ReactElement => {
  const { getVideogames } = useVideogames();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const videogames = await getVideogames();
      if (videogames) {
        dispatch(loadVideogamesActionCreator(videogames));
      }
    })();
  }, [dispatch, getVideogames]);

  return (
    <>
      <VideogamesPageStyled>
        <VideogameList />
      </VideogamesPageStyled>
    </>
  );
};

export default VideogamesPage;
