import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials } from "../../types";
import LoginPageStyled from "./LoginPageStyled";
import paths from "../../routers/path/paths";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const Navigate = useNavigate();

  const onSubmit = async (userCredentials: UserCredentials) => {
    await getUserToken(userCredentials);

    Navigate(paths.app, { replace: true });
  };

  return (
    <>
      <LoginPageStyled>
        <h2 className="login-tittle">Login</h2>
        <LoginForm submitForm={onSubmit} />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
