import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { realTokenDataMock, realTokenMock } from "../../mocks/mockUser";

describe("Given a useToken custom hook", () => {
  describe("When is called the decodeToken function  with a token", () => {
    test("Then it should return a userData with an id, name, token", () => {
      const {
        result: {
          current: { decodeToken },
        },
      } = renderHook(() => useToken());

      const userData = decodeToken(realTokenMock);

      expect(userData).toStrictEqual(realTokenDataMock);
    });
  });
});
