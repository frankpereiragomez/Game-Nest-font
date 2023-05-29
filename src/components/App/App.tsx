import Header from "../Header/Header";
import GeneralContainerStyled from "../shared/GeneralContainerStyled";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <GeneralContainerStyled>
        <p>Nintendo</p>
      </GeneralContainerStyled>
    </>
  );
};

export default App;
