import React from "react";
import CreatePageStyled from "./CreatePageStyled";
import VideogameForm from "../../components/VideogameForm/VideogameForm";

const CreatePage = (): React.ReactElement => {
  return (
    <CreatePageStyled className="create-container">
      <h1 className="create-container__title">Add your game</h1>
      <VideogameForm buttonText="Create" />
    </CreatePageStyled>
  );
};

export default CreatePage;
