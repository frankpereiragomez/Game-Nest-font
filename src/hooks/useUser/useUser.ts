import axios from "axios";
import { UserCredentials } from "../../types";
import { apiUrl } from "../../mocks/handlers";

const useUser = () => {
  const getUserToken = async (
    UserCredentials: UserCredentials
  ): Promise<string> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}/user/login`,
        UserCredentials
      );

      return token;
    } catch (error) {
      throw new Error("Wrong credentials");
    }
  };

  return { getUserToken };
};

export default useUser;
