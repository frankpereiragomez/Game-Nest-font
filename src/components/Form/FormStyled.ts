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
      background-color: ${(props) => props.theme.colors.light_color};
    }

    &__label {
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: ${(props) => props.theme.colors.dark_black};
    }

    &__button {
      background-color: ${(props) => props.theme.colors.secondary_color};
      border-radius: 20px;
      color: ${(props) => props.theme.colors.light_color};
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 22px;
      margin-top: 36px;
    }
  }
`;

export default FormStyled;
