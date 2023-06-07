import { VideogamesDataStructure } from "../../types";
import Button from "../Button/Button";
import VideogameCardStyled from "./VideogameCardStyled";

interface VideogameCardProps {
  videogame: VideogamesDataStructure;
  isLazy: "lazy" | "eager";
  actionOnClick: (videogameId: string) => void;
}

const VideogameCard = ({
  videogame,
  isLazy,
  actionOnClick,
}: VideogameCardProps): React.ReactElement => {
  return (
    <>
      <VideogameCardStyled className="videogame-card">
        <div className="videogame-card__image-container">
          <img
            className="videogame-card__image"
            src={videogame.image}
            alt={videogame.name}
            width={181}
            height={227}
            loading={isLazy}
          />
        </div>
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
                actionOnClick: () => actionOnClick(videogame.id),
              }}
            />
          </div>
        </article>
      </VideogameCardStyled>
    </>
  );
};

export default VideogameCard;
