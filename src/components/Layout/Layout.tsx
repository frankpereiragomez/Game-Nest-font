import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import GeneralContainerStyled from "../shared/GeneralContainerStyled";
import NavBar from "../NavBar/NavBar";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <GeneralContainerStyled className="body-container">
        <Outlet />
      </GeneralContainerStyled>
      <NavBar />
    </>
  );
};

export default Layout;
