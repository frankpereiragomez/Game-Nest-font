import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser/useUser";
import { UserCredentials, UserTokenStructure } from "../../types";
import LoginPageStyled from "./LoginPageStyled";
import paths from "../../routers/path/paths";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { decodeToken } = useToken();
  const { setToken } = useLocalStorage();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (userCredentials: UserCredentials) => {
    try {
      const token = await getUserToken(userCredentials);

      setToken("token", token);
      const decodeData = await decodeToken(token);
      dispatch(
        loginUserActionCreator({ ...decodeData, token } as UserTokenStructure)
      );
      navigate(paths.app);
    } catch (error) {
      return;
    }
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
