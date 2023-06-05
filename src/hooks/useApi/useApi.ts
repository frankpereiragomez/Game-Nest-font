import axios from "axios";
import { VideogameState } from "../../store/videogame/videogameSlice";
import { useAppSelector } from "../../store";
import { apiUrl } from "../../mocks/handlers";
import { VideogamesDataStructure } from "../../types";
import { useCallback } from "react";

const useApi = () => {
  const { token } = useAppSelector((state) => state.user);

  const getVideogames = useCallback(async (): Promise<
    VideogamesDataStructure[]
  > => {
    const request = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const {
      data: { videogames },
    } = await axios.get<VideogameState>(`${apiUrl}/videogames`, request);

    return videogames;
  }, [token]);
  return { getVideogames };
};

export default useApi;
