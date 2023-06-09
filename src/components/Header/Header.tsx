import HeaderStyled from "./HeaderStyled";
import paths from "../../routers/path/paths";
import { NavLink } from "react-router-dom";

const Header = (): React.ReactElement => {
  return (
    <>
      <HeaderStyled>
        <NavLink to={paths.homePage}>
          <img
            className="header__logo"
            src="images/Logo.svg"
            alt="Game nest logo"
            width="70"
            height="48"
          />
        </NavLink>
        <h1 className="header__title">Game Nest</h1>
      </HeaderStyled>
    </>
  );
};

export default Header;
