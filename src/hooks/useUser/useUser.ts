import axios from "axios";
import { UserCredentials } from "../../types";
import { apiUrl } from "../../mocks/handlers";
import { useCallback } from "react";
import { useAppDispatch } from "../../store";
import { showLoadingActionCreator } from "../../store/ui/uiSlice";

const useUser = () => {
  const dispatch = useAppDispatch();

  const getUserToken = useCallback(
    async (UserCredentials: UserCredentials): Promise<string> => {
      dispatch(showLoadingActionCreator());

      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}/user/login`,
        UserCredentials
      );

      return token;
    },
    [dispatch]
  );

  return { getUserToken };
};

export default useUser;
