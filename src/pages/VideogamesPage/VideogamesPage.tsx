import { useEffect } from "react";
import { videogamesCollectionMock } from "../../mocks/videogamesMocks";
import { useAppDispatch } from "../../store";
import { loadVideogamesActionCreator } from "../../store/videogame/videogameSlice";
import VideogameList from "../../components/VideogamesList/VideogamesList";
import VideogamesPageStyled from "./VideogamesPageStyled";

const VideogamesPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadVideogamesActionCreator(videogamesCollectionMock));
  }, [dispatch]);

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
