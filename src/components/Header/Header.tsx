import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <>
      <HeaderStyled>
        <img
          className="header-logo"
          src="images/Logo.svg"
          alt="Game nest logo"
        />
        <h1 className="header__title">Game Nest</h1>
      </HeaderStyled>
    </>
  );
};

export default Header;
