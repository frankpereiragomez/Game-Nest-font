import React from "react";
import CreatePageStyled from "./CreatePageStyled";
import VideogameForm from "../../components/VideogameForm/VideogameForm";
import { VideogamesDataStructure } from "../../types";
import { useAppDispatch } from "../../store";
import { createVideogameActionCreator } from "../../store/videogame/videogameSlice";

const CreatePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const createOnSubmit = (newVideogame: VideogamesDataStructure) => {
    dispatch(createVideogameActionCreator(newVideogame));
  };

  return (
    <CreatePageStyled className="create-container">
      <h1 className="create-container__title">Add your game</h1>
      <VideogameForm actionOnSubmit={createOnSubmit} buttonText="Create" />
    </CreatePageStyled>
  );
};

export default CreatePage;
