import { VideogamesStructure } from "../../types";
import Button from "../Button/Button";
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
              {`${videogame.genre}   |   ${videogame.developers}`}
            </span>
          </div>
          <span className="videogame-card__game-price">{`${videogame.price} €`}</span>
          <div className="videogame-card__buttons-container">
            <Button
              button={{
                icon: "images/edit.svg",
                className: "videogame-card__button-edit",
                alt: "edit button",
                height: "48",
                width: "48",
              }}
            />
            <Button
              button={{
                icon: "images/close-square.svg",
                className: "videogameCard__button-delete",
                alt: "remove button",
                height: "48",
                width: "48",
              }}
            />
          </div>
        </article>
      </VideogameCardStyled>
    </>
  );
};

export default VideogameCard;
