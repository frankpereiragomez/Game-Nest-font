import useVideogames from "../../hooks/useVideogames/useVideogames";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadVideogamesActionCreator } from "../../store/videogame/videogameSlice";
import VideogameCard from "../VideogameCard/VideogameCard";
import VideogamesListStyled from "./VideogamesListStyled";

const VideogameList = (): React.ReactElement => {
  const videogames = useAppSelector((state) => state.videogames.videogames);
  const { deleteVideogame, getVideogames } = useVideogames();
  const dispatch = useAppDispatch();

  const deleteOnClick = async (videogameId: string) => {
    await deleteVideogame(videogameId);

    const videogameState = await getVideogames(0, 5);

    videogameState &&
      dispatch(loadVideogamesActionCreator(videogameState.videogames));
  };

  return (
    <VideogamesListStyled className="videogame-list">
      {videogames.map((videogame, index) => (
        <li className="videogame-card" key={videogame.id}>
          <VideogameCard
            isLazy={index === 0 || index === 1 ? "eager" : "lazy"}
            videogame={videogame}
            actionOnClick={deleteOnClick}
          />
        </li>
      ))}
    </VideogamesListStyled>
  );
};

export default VideogameList;
