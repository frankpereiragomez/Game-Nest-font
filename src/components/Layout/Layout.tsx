import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import GeneralContainerStyled from "../shared/GeneralContainerStyled";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <GeneralContainerStyled className="body-container">
        <Outlet />
      </GeneralContainerStyled>
    </>
  );
};

export default Layout;
