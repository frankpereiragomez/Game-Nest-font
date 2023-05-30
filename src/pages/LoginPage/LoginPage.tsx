import LoginForm from "../../components/Form/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  return (
    <>
      <LoginPageStyled>
        <h2 className="login-tittle">Login</h2>
        <LoginForm />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
