import { useAppSelector } from "../../store";
import VideogamesListStyled from "./VideogamesListStyled";

const VideogameList = (): React.ReactElement => {
  const videogames = useAppSelector((state) => state.videogames.videogames);

  return (
    <VideogamesListStyled className="videogame-list">
      {videogames.map((videogame) => (
        <li className="videogame-card" key={videogame._id}>
          <h2>{videogame.name}</h2>
        </li>
      ))}
    </VideogamesListStyled>
  );
};

export default VideogameList;
