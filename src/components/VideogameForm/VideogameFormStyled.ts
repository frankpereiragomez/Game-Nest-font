import styled from "styled-components";

const VideogameFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.soft_grey};
  border-radius: 12px;
  padding: 25px 25px;
  min-width: 270px;
  min-height: 318px;
  gap: 15px;
  margin: 25px;
  box-shadow: rgba(0, 0, 0, 0.2) 5px 4px 10px 2px,
    rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;

  .videogame-form {
    &__controls {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
    }

    &__label {
      font-size: 1.375rem;
    }

    &__input {
      font-size: 18px;
      height: 48px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.light_color};
    }

    &__textarea {
      font-size: 18px;
      height: 220px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.light_color};
    }

    &__button {
      background-color: ${({ theme }) => theme.colors.secondary_color};
      border-radius: 20px;
      color: ${({ theme }) => theme.colors.light_color};
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 22px;
      margin-top: 36px;
      border: solid ${({ theme }) => theme.colors.secondary_color};
    }

    &__button:disabled {
      background-color: ${({ theme }) => theme.colors.light_color};
      color: ${({ theme }) => theme.colors.secondary_color};
      border: solid;
    }
  }
`;

export default VideogameFormStyled;
