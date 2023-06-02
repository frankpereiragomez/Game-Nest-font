import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <>
      <HeaderStyled>
        <img
          className="header__logo"
          src="images/Logo.svg"
          alt="Game nest logo"
          width={70}
          height={48}
        />
        <h1 className="header__title">Game Nest</h1>
      </HeaderStyled>
    </>
  );
};

export default Header;
