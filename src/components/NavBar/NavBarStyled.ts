import styled from "styled-components";

const NavBarStyled = styled.nav`
  padding: 16px 35px;
  background-color: ${(props) => props.theme.colors.medium_grey};
  position: fixed;
  bottom: 0;
  width: 100%;

  .navigation-menu {
    display: flex;
    justify-content: space-between;
  }
`;

export default NavBarStyled;
