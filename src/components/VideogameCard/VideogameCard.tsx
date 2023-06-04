import { VideogamesStructure } from "../../types";
import VideogameCardStyled from "./VideogameCardStyled";

interface VideogameCardProps {
  videogame: VideogamesStructure;
}

const VideogameCard = ({
  videogame,
}: VideogameCardProps): React.ReactElement => {
  return (
    <>
      <VideogameCardStyled className="videogame-card">
        <img
          className="videogame-card__image"
          src={videogame.image}
          alt={videogame.name}
          width={150}
          height={227}
        />
        <article className="videogame-card__info-container">
          <h2 className="videogame-card__name">{videogame.name}</h2>
          <div className="videogame-card__details-container">
            <span className="videogame-card__game-genre">
              {videogame.genre}
            </span>
            <span className="videogame-card__separator">|</span>
            <span className="videogame-card__game-developers">
              {videogame.developers}
            </span>
          </div>
          <div className="videogame-card__game-price-container">
            <p className="videogame-card__game-price">{`${videogame.price} €`}</p>
          </div>
        </article>
      </VideogameCardStyled>
    </>
  );
};

export default VideogameCard;
