import styled from "styled-components";

const CreatePageStyled = styled.main`
  padding-bottom: 110px;
  .create-container {
    &__title {
      text-align: center;
      background-color: ${({ theme }) => theme.colors.medium_grey};
      color: ${({ theme }) => theme.colors.light_color};
      padding: 13px 0;
      min-width: 320px;
      font-size: 25px;
    }
  }
`;

export default CreatePageStyled;
