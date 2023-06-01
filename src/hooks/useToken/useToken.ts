import jwt_decode from "jwt-decode";
import { UserTokenStructure } from "../../types";

const useToken = () => {
  const decodeToken = (token: string): UserTokenStructure => {
    const tokenData: { sub: string; name: string } = jwt_decode(token);
    const userData: UserTokenStructure = {
      id: tokenData.sub,
      name: tokenData.name,
      token,
    };

    return userData;
  };

  return { decodeToken };
};

export default useToken;
