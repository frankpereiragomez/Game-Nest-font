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

        const firstVideogameImage = videogames[0].image;

        const preconnectElement = document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = firstVideogameImage;

        const parentElement = document.head;
        const firstChild = parentElement.firstChild;
        parentElement.insertBefore(preconnectElement, firstChild);
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
