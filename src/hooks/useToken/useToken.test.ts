import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { realTokenMock } from "../../mocks/mockUser";

describe("Given a useToken custom hook", () => {
  describe("When is called the decodeToken function  with a token", () => {
    test("Then it should return a userData with an id, name, token", () => {
      const {
        result: {
          current: { decodeToken },
        },
      } = renderHook(() => useToken());

      const userData = decodeToken(realTokenMock.token);

      expect(userData).toStrictEqual(realTokenMock);
    });
  });
});
