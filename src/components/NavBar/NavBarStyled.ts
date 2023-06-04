import styled from "styled-components";

const NavBarStyled = styled.nav`
  padding: 16px 35px;
  background-color: ${(props) => props.theme.colors.medium_grey};
  position: sticky;
  top: 100vh;
  width: 100%;

  .navigation-menu {
    display: flex;
    justify-content: space-between;
    background-color: transparent;

    &__logout-button {
      background-color: transparent;
      padding: 0;
    }
  }
`;

export default NavBarStyled;
