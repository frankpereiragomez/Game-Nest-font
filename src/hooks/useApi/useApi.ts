import axios from "axios";
import { VideogameState } from "../../store/videogame/videogameSlice";
import { useAppSelector } from "../../store";
import { apiUrl } from "../../mocks/handlers";
import { VideogamesDataStructure } from "../../types";

const useApi = () => {
  const { token } = useAppSelector((state) => state.user);

  const getVideogames = async (): Promise<VideogamesDataStructure[]> => {
    const request = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const {
      data: { videogames },
    } = await axios.get<VideogameState>(`${apiUrl}/videogames`, request);

    return videogames;
  };
  return { getVideogames };
};

export default useApi;
