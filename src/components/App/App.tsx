import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";
import { UserTokenStructure } from "../../types";

const App = (): React.ReactElement => {
  const { getToken } = useLocalStorage();
  const { decodeToken } = useToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken("token");

    if (token) {
      const decodeUserData = decodeToken(token);
      dispatch(
        loginUserActionCreator({
          ...decodeUserData,
          token,
        } as UserTokenStructure)
      );
    }
  }),
    [decodeToken, dispatch, getToken];

  return <Layout />;
};

export default App;
