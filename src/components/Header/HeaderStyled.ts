import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  font-family: ${(prop) => prop.theme.fonts.secondary};
  color: ${(prop) => prop.theme.colors.light_color};
  background-color: ${(prop) => prop.theme.colors.dark_grey};

  .header {
    &__title {
      font-size: 38px;
    }
  }
`;

export default HeaderStyled;
