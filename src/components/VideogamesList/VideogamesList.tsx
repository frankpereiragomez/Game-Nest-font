import { useAppSelector } from "../../store";
import VideogameCard from "../VideogameCard/VideogameCard";
import VideogamesListStyled from "./VideogamesListStyled";

const VideogameList = (): React.ReactElement => {
  const videogames = useAppSelector((state) => state.videogames.videogames);

  return (
    <VideogamesListStyled className="videogame-list">
      {videogames.map((videogame) => (
        <li className="videogame-card" key={videogame._id}>
          <VideogameCard videogame={videogame} />
        </li>
      ))}
    </VideogamesListStyled>
  );
};

export default VideogameList;
