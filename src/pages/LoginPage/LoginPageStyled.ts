import styled from "styled-components";

const LoginPageStyled = styled.section`
  background-image: url("images/loginBackground-2.webp");
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  .login-tittle {
    color: ${(props) => props.theme.colors.light_color};
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 30px;
    padding-top: 60px;
  }
`;

export default LoginPageStyled;
