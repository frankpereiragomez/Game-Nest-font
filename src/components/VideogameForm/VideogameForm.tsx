import Button from "../Button/Button";
import VideogameFormStyled from "./VideogameFormStyled";

interface VideogameFormProps {
  buttonText: string;
}

const VideogameForm = ({
  buttonText,
}: VideogameFormProps): React.ReactElement => {
  return (
    <VideogameFormStyled className="videogame-form" autoComplete="off">
      <div className="videogame-form__controls">
        <label className="videogame-form__label" htmlFor="name">
          Name:
        </label>
        <input
          className="videogame-form__input"
          id="name"
          type="text"
          placeholder="Videogame name"
        />
      </div>
      <div className="videogame-form__controls">
        <label className="videogame-form__label" htmlFor="genre">
          Genre:
        </label>
        <input
          className="videogame-form__input"
          id="genre"
          type="text"
          placeholder="Videogame genre"
        />
      </div>
      <div className="videogame-form__controls">
        <label className="videogame-form__label" htmlFor="price">
          Price €:
        </label>
        <input
          className="videogame-form__input"
          id="price"
          type="number"
          placeholder="Videogame price"
        />
      </div>
      <div className="videogame-form__controls">
        <label className="videogame-form__label" htmlFor="developers">
          Developers:
        </label>
        <input
          className="videogame-form__input"
          id="developers"
          type="text"
          placeholder="Videogame developers"
        />
      </div>
      <div className="videogame-form__controls">
        <label className="videogame-form__label" htmlFor="image">
          Image(url):
        </label>
        <input
          className="videogame-form__input"
          id="image"
          type="text"
          placeholder="Videogame image"
        />
      </div>
      <div className="videogame-form__controls">
        <label className="videogame-form__label" htmlFor="description">
          Description:
        </label>
        <textarea
          className="videogame-form__textarea"
          id="description"
          placeholder="Videogame description"
        />
      </div>
      <Button
        button={{
          className: "videogame-form__button",
          type: "submit",
          text: buttonText,
        }}
      ></Button>
    </VideogameFormStyled>
  );
};

export default VideogameForm;
