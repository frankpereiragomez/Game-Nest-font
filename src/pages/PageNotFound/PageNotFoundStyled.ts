import styled from "styled-components";

const PageNotFoundStyled = styled.main`
  background-color: ${({ theme }) => theme.colors.soft_grey};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;
    padding: 20px;
    width: 60vw;
    background-color: ${(props) => props.theme.colors.light_color};
    border-radius: 10px;
    min-width: 200px;
    max-width: 400px;
    margin-top: 110px;

    &__status-code {
      font-size: 3rem;
      font-weight: bold;
    }

    &__message {
      font-size: 1.25rem;
    }

    &__button {
      border-radius: 16px;
      background-color: ${({ theme }) => theme.colors.secondary_color};
      color: ${({ theme }) => theme.colors.light_color};
      padding: 10px;
      width: 100%;
    }
  }
`;

export default PageNotFoundStyled;
