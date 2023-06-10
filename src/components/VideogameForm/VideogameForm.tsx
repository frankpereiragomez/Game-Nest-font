import { useState } from "react";
import { VideogamesStructure } from "../../types";
import Button from "../Button/Button";
import VideogameFormStyled from "./VideogameFormStyled";

interface VideogameFormProps {
  buttonText: string;
  actionOnSubmit: (newVideogame: VideogamesStructure) => void;
}

const VideogameForm = ({
  buttonText,
  actionOnSubmit,
}: VideogameFormProps): React.ReactElement => {
  const initialVideogameData: VideogamesStructure = {
    name: "",
    genre: "",
    price: 0,
    image: "",
    developers: "",
    description: "",
  };

  const [videogameFormState, setVideogameFormState] =
    useState(initialVideogameData);

  const onChangeUserInputs = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setVideogameFormState({
      ...videogameFormState,
      [event.target.id]: event.target.value,
    });
  };

  const handleCreateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    actionOnSubmit(videogameFormState);
    setVideogameFormState(initialVideogameData);
  };

  const isEnable =
    videogameFormState.name !== "" &&
    videogameFormState.genre !== "" &&
    videogameFormState.price !== 0 &&
    videogameFormState.developers !== "" &&
    videogameFormState.image !== "" &&
    videogameFormState.description !== "";

  return (
    <VideogameFormStyled
      className="videogame-form"
      autoComplete="off"
      onSubmit={handleCreateForm}
    >
      <div className="videogame-form__controls">
        <label className="videogame-form__label" htmlFor="name">
          Name:
        </label>
        <input
          className="videogame-form__input"
          id="name"
          type="text"
          placeholder="Videogame name"
          onChange={onChangeUserInputs}
          value={videogameFormState.name}
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
          onChange={onChangeUserInputs}
          value={videogameFormState.genre}
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
          onChange={onChangeUserInputs}
          value={videogameFormState.price || ""}
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
          onChange={onChangeUserInputs}
          value={videogameFormState.developers}
        />
      </div>
      <div className="videogame-form__controls">
        <label className="videogame-form__label" htmlFor="image">
          Image(url):
        </label>
        <input
          className="videogame-form__input"
          id="image"
          type="url"
          placeholder="Videogame image"
          onChange={onChangeUserInputs}
          value={videogameFormState.image}
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
          onChange={onChangeUserInputs}
          value={videogameFormState.description}
        />
      </div>
      <Button
        button={{
          className: "videogame-form__button",
          type: "submit",
          text: buttonText,
          isDisabled: !isEnable,
        }}
      ></Button>
    </VideogameFormStyled>
  );
};

export default VideogameForm;
