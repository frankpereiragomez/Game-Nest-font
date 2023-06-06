import axios from "axios";
import { UserCredentials } from "../../types";
import { apiUrl } from "../../mocks/handlers";
import { useCallback } from "react";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import feedbackMessages from "../../utils/feedbackMessages/feedbackMessages";

const useUser = () => {
  const dispatch = useAppDispatch();

  const getUserToken = useCallback(
    async (UserCredentials: UserCredentials): Promise<string | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { token },
        } = await axios.post<{ token: string }>(
          `${apiUrl}/user/login`,
          UserCredentials
        );

        return token;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showFeedbackActionCreator({
            isError: true,
            message: feedbackMessages.credentialsWrong,
          })
        );
      }
    },
    [dispatch]
  );

  return { getUserToken };
};

export default useUser;
