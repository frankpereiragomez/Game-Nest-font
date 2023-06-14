import axios from "axios";
import { deleteVideogameActionCreator } from "../../store/videogame/videogameSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { apiUrl } from "../../mocks/handlers";
import {
  VideogameStateResponse,
  VideogamesDataStructure,
  VideogamesStructure,
} from "../../types";
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
            message: feedbackMessages.somethingWrong,
          })
        );
      }
    },
    [dispatch]
  );

  const deleteVideogame = async (
    videogameId: string
  ): Promise<number | undefined> => {
    try {
      dispatch(showLoadingActionCreator());

      const { status } = await axios.delete(
        `${apiUrl}/videogames/${videogameId}`,
        reqConfig
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
          message: feedbackMessages.createOk,
        })
      );

      return data.videogame;
    } catch (error) {
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          message: feedbackMessages.createFailed,
        })
      );
    }
  };

  const getVideogameById = useCallback(
    async (
      videogameId: string
    ): Promise<VideogamesDataStructure | undefined> => {
      dispatch(showLoadingActionCreator());

      try {
        const {
          data: { videogameById },
        } = await axios.get<{
          videogameById: VideogamesDataStructure;
        }>(`${apiUrl}/videogames/${videogameId}`);

        dispatch(hideLoadingActionCreator());

        return videogameById;
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        dispatch(
          showFeedbackActionCreator({
            isError: true,
            message: feedbackMessages.detailsFailed,
          })
        );
      }
    },
    [dispatch]
  );

  return { getVideogames, deleteVideogame, createVideogame, getVideogameById };
};

export default useVideogames;
