import axios from "axios";
import {
  VideogameState,
  deleteVideogameActionCreator,
} from "../../store/videogame/videogameSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { apiUrl } from "../../mocks/handlers";
import { VideogamesDataStructure } from "../../types";
import { useCallback } from "react";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import feedbackMessages from "../../utils/feedbackMessages/feedbackMessages";

const useVideogames = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  const getVideogames = useCallback(async (): Promise<
    VideogamesDataStructure[] | undefined
  > => {
    dispatch(showLoadingActionCreator());

    try {
      const {
        data: { videogames },
      } = await axios.get<VideogameState>(`${apiUrl}/videogames`);

      dispatch(hideLoadingActionCreator());

      return videogames;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: feedbackMessages.somethingWrong,
        })
      );
    }
  }, [dispatch]);

  const deleteVideogame = async (
    videogameId: string
  ): Promise<number | undefined> => {
    dispatch(showLoadingActionCreator());

    try {
      const { status } = await axios.delete(
        `${apiUrl}/videogames/${videogameId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(deleteVideogameActionCreator(videogameId));

      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: feedbackMessages.deleteOk,
        })
      );

      return status;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: feedbackMessages.deleteFailed,
        })
      );
    }
  };

  return { getVideogames, deleteVideogame };
};

export default useVideogames;
