import axios from "axios";
import { VideogameState } from "../../store/videogame/videogameSlice";
import { useAppDispatch } from "../../store";
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
  dispatch(hideLoadingActionCreator());
  return { getVideogames };
};

export default useVideogames;
