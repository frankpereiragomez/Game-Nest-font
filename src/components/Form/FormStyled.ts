import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffffb3;
  border-radius: 12px;
  padding: 25px 25px;
  min-width: 270px;
  min-height: 318px;
  gap: 15px;

  .login-form {
    &__controls {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &__input {
      font-size: 18px;
      min-width: 230px;
      height: 48px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.light_color};
    }

    &__label {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: ${({ theme }) => theme.colors.dark_black};
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

export default FormStyled;
