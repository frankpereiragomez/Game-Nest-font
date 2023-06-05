import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import GeneralContainerStyled from "../shared/GeneralContainerStyled";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";

const Layout = (): React.ReactElement => {
  const { pathname } = useLocation();
  return (
    <>
      <Loading />
      <Header />
      <GeneralContainerStyled className="body-container">
        <Outlet />
      </GeneralContainerStyled>
      {pathname !== "/login" && <NavBar />}
    </>
  );
};

export default Layout;
