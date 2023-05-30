import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled>
      <ul className="navigation-menu">
        <li className="navigation-menu__home">
          <NavLink
            to="/home-page"
            className="navigation-menu__home-button"
            aria-label="home"
          >
            <img
              className="home"
              src="images/home-button.svg"
              alt="home button"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
        <li className="navigation-menu__add">
          <NavLink
            to="/add-game"
            className="navigation-menu__add-button"
            aria-label="add"
          >
            <img
              className="add"
              src="images/add-button.svg"
              alt="add button"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
        <li className="navigation-menu__login">
          <NavLink
            to="/login"
            className="navigation-menu__login-button"
            aria-label="login"
          >
            <img
              className="login"
              src="images/login.svg"
              alt="login button"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
