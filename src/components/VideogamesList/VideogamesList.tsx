import useVideogames from "../../hooks/useVideogames/useVideogames";
import { useAppSelector } from "../../store";
import VideogameCard from "../VideogameCard/VideogameCard";
import VideogamesListStyled from "./VideogamesListStyled";

const VideogameList = (): React.ReactElement => {
  const videogames = useAppSelector((state) => state.videogames.videogames);
  const { deleteVideogame } = useVideogames();

  const deleteOnClick = async (videogameId: string) => {
    await deleteVideogame(videogameId);
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
