import { NavLink, useNavigate } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { logoutActionCreator } from "../../store/user/userSlice";
import paths from "../../routers/path/paths";
import Button from "../Button/Button";

const NavBar = (): React.ReactElement => {
  const { deleteToken } = useLocalStorage();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isLogged = useAppSelector((state) => state.user.isLogged);

  const logoutOnClick = () => {
    deleteToken("token");
    dispatch(logoutActionCreator());
    navigate(paths.app);
  };

  return (
    <NavBarStyled>
      <ul className="navigation-menu">
        <li>
          <NavLink
            to={paths.homePage}
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
        <li>
          <NavLink
            to={paths.createPage}
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
        <li>
          {isLogged ? (
            <Button
              button={{
                className: "navigation-menu__logout-button",
                arialLabel: "logout",
                actionOnClick: () => logoutOnClick(),
                icon: "images/logout-button.svg",
                alt: "logout button",
                width: "48",
                height: "48",
              }}
            />
          ) : (
            <NavLink
              to={paths.login}
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
          )}
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
