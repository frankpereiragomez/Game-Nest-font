import jwt_decode from "jwt-decode";
import { UserTokenStructure } from "../../types";
import { useCallback } from "react";

const useToken = () => {
  const decodeToken = useCallback(
    (token: string): Partial<UserTokenStructure> => {
      const tokenData: { sub: string; name: string } = jwt_decode(token);
      const userData: Partial<UserTokenStructure> = {
        id: tokenData.sub,
        name: tokenData.name,
      };

      return userData;
    },
    []
  );

  return { decodeToken };
};

export default useToken;
