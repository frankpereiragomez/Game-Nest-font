import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { loadVideogamesActionCreator } from "../../store/videogame/videogameSlice";
import VideogameList from "../../components/VideogamesList/VideogamesList";
import VideogamesPageStyled from "./VideogamesPageStyled";
import useApi from "../../hooks/useApi/useApi";

const VideogamesPage = (): React.ReactElement => {
  const { getVideogames } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const videogames = await getVideogames();
      dispatch(loadVideogamesActionCreator(videogames));
    })();
  }, [dispatch, getVideogames]);

  return (
    <>
      <VideogamesPageStyled>
        <VideogameList />
      </VideogamesPageStyled>
      ;
    </>
  );
};

export default VideogamesPage;
