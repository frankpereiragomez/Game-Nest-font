import styled from "styled-components";

const LoginPageStyled = styled.section`
  background-image: url("images/snes-background.webp");
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;

  .login-tittle {
    color: ${(props) => props.theme.colors.light_color};
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 30px;
    padding-top: 60px;
  }
`;

export default LoginPageStyled;
