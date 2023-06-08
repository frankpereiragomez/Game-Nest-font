import React from "react";
import CreatePageStyled from "./CreatePageStyled";

const CreatePage = (): React.ReactElement => {
  return (
    <CreatePageStyled className="create-container">
      <h1 className="create-container__title">Add your game</h1>
    </CreatePageStyled>
  );
};

export default CreatePage;
