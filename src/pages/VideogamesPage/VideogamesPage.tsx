import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { loadVideogamesActionCreator } from "../../store/videogame/videogameSlice";
import VideogameList from "../../components/VideogamesList/VideogamesList";
import VideogamesPageStyled from "./VideogamesPageStyled";
import useVideogames from "../../hooks/useVideogames/useVideogames";
import Pagination from "../../components/Pagination/Pagination";

const VideogamesPage = (): React.ReactElement => {
  const { getVideogames } = useVideogames();
  const dispatch = useAppDispatch();
  const [skip, setSkip] = useState(0);
  const [totalVideogames, setTotalVideogames] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 5;

  const nextPage = () => {
    setSkip(skip + limit);
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    setSkip(skip - limit);
    setPage(page - 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    (async () => {
      const videogamesState = await getVideogames(skip, limit);
      if (videogamesState) {
        const { totalVideogames, videogames } = videogamesState;

        dispatch(loadVideogamesActionCreator(videogames));

        setTotalVideogames(totalVideogames);

        if (videogames.length > 0) {
          const firstVideogameImage = videogames[0].image;

          const preconnectElement = document.createElement("link");
          preconnectElement.rel = "preload";
          preconnectElement.as = "image";
          preconnectElement.href = firstVideogameImage;

          const parentElement = document.head;
          const firstChild = parentElement.firstChild;
          parentElement.insertBefore(preconnectElement, firstChild);
        }
      }
    })();
  }, [dispatch, getVideogames, limit, skip]);

  return (
    <>
      <VideogamesPageStyled>
        <VideogameList />
        <Pagination
          nextOnClick={nextPage}
          backOnClick={previousPage}
          totalVideogames={totalVideogames}
          page={page}
          limit={limit}
        />
      </VideogamesPageStyled>
    </>
  );
};

export default VideogamesPage;
