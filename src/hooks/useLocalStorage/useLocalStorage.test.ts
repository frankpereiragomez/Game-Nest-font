import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";
import { realTokenMock } from "../../mocks/mockUser";

describe("Given a useLocalStorage custom hook", () => {
  describe("When it call the setToken function with a key and a token", () => {
    test("Then it should set the token in the local storage", () => {
      const key = "token";

      const {
        result: {
          current: { setToken, getToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, realTokenMock.token);

      expect(getToken(key)).toBe(realTokenMock.token);
    });
  });
});
