import React from "react";
import CreatePageStyled from "./CreatePageStyled";
import VideogameForm from "../../components/VideogameForm/VideogameForm";
import { VideogamesStructure } from "../../types";
import { useAppDispatch } from "../../store";
import { createVideogameActionCreator } from "../../store/videogame/videogameSlice";
import useVideogames from "../../hooks/useVideogames/useVideogames";
import { useNavigate } from "react-router-dom";
import paths from "../../routers/path/paths";

const CreatePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { createVideogame } = useVideogames();
  const navigate = useNavigate();

  const createOnSubmit = async (newVideogame: VideogamesStructure) => {
    const videogame = await createVideogame(newVideogame);

    if (videogame) {
      dispatch(createVideogameActionCreator(videogame));

      navigate(paths.homePage);
    }
  };

  return (
    <CreatePageStyled className="create-container">
      <h1 className="create-container__title">Add your game</h1>
      <VideogameForm actionOnSubmit={createOnSubmit} buttonText="Create" />
    </CreatePageStyled>
  );
};

export default CreatePage;
