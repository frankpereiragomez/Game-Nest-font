import { useAppDispatch, useAppSelector } from "../../store";
import { deleteVideogameActionCreator } from "../../store/videogame/videogameSlice";
import VideogameCard from "../VideogameCard/VideogameCard";
import VideogamesListStyled from "./VideogamesListStyled";

const VideogameList = (): React.ReactElement => {
  const videogames = useAppSelector((state) => state.videogames.videogames);
  const dispatch = useAppDispatch();

  const deleteOnClick = (videogameId: string) => {
    dispatch(deleteVideogameActionCreator(videogameId));
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
