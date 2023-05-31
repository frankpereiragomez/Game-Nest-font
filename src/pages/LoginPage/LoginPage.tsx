import LoginForm from "../../components/Form/LoginForm";
import { UserCredentials } from "../../types";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): React.ReactElement => {
  const handleUserlogin = (user: UserCredentials) => user;

  return (
    <>
      <LoginPageStyled>
        <h2 className="login-tittle">Login</h2>
        <LoginForm submitForm={handleUserlogin} />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
