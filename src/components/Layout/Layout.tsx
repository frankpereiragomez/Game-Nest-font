import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import GeneralContainerStyled from "../shared/GeneralContainerStyled";
import NavBar from "../NavBar/NavBar";
import { useAppSelector } from "../../store";
import Loading from "../Ui/Loading/Loading";
import UserFeedback from "../Ui/UserFeedback/UserFeedback";
import paths from "../../routers/path/paths";

const Layout = (): React.ReactElement => {
  const { pathname } = useLocation();
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const showFeedback = useAppSelector((state) => state.ui.showFeedback);

  return (
    <>
      {showFeedback && <UserFeedback />}
      {isLoading && <Loading />}
      <Header />
      <GeneralContainerStyled className="body-container">
        <Outlet />
      </GeneralContainerStyled>
      {pathname !== paths.login && <NavBar />}
    </>
  );
};

export default Layout;
