import axios from "axios";
import { VideogameState } from "../../store/videogame/videogameSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { apiUrl } from "../../mocks/handlers";
import { VideogamesDataStructure } from "../../types";
import { useCallback } from "react";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const useApi = () => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const getVideogames = useCallback(async (): Promise<
    VideogamesDataStructure[]
  > => {
    dispatch(showLoadingActionCreator());

    const request = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const {
      data: { videogames },
    } = await axios.get<VideogameState>(`${apiUrl}/videogames`, request);

    dispatch(hideLoadingActionCreator());

    return videogames;
  }, [dispatch, token]);
  return { getVideogames };
};

export default useApi;
