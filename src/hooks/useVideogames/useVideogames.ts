import axios from "axios";
import {
  VideogameStateResponse,
  deleteVideogameActionCreator,
} from "../../store/videogame/videogameSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { apiUrl } from "../../mocks/handlers";
import { VideogamesDataStructure, VideogamesStructure } from "../../types";
import { useCallback } from "react";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import FeedbackMessages from "../../utils/feedbackMessages/feedbackMessages";

const useVideogames = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  const reqConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getVideogames = useCallback(
    async (
      skip: number,
      limit: number
    ): Promise<VideogameStateResponse | undefined> => {
      dispatch(showLoadingActionCreator());

      try {
        const {
          data: { videogames, totalVideogames },
        } = await axios.get<VideogameStateResponse>(
          `${apiUrl}/videogames?skip=${skip}&limit=${limit}`
        );

        dispatch(hideLoadingActionCreator());

        return { videogames, totalVideogames };
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showFeedbackActionCreator({
            isError: true,
            message: FeedbackMessages.somethingWrong,
          })
        );
      }
    },
    [dispatch]
  );

  const deleteVideogame = async (
    videogameId: string
  ): Promise<number | undefined> => {
    dispatch(showLoadingActionCreator());

    try {
      const { status } = await axios.delete(
        `${apiUrl}/videogames/${videogameId}`,
        reqConfig
      );

      dispatch(deleteVideogameActionCreator(videogameId));

      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: FeedbackMessages.deleteOk,
        })
      );

      return status;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: FeedbackMessages.deleteFailed,
        })
      );
    }
  };

  const createVideogame = async (
    videogame: VideogamesStructure
  ): Promise<VideogamesDataStructure | undefined> => {
    dispatch(showLoadingActionCreator());

    try {
      const { data } = await axios.post<{
        videogame: VideogamesDataStructure;
      }>(`${apiUrl}/videogames/create`, videogame, reqConfig);

      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          message: FeedbackMessages.createOk,
        })
      );

      return data.videogame;
    } catch (error) {
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: FeedbackMessages.createFailed,
        })
      );
    }
  };

  return { getVideogames, deleteVideogame, createVideogame };
};

export default useVideogames;
