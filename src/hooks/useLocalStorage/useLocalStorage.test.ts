import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";
import { realTokenMock } from "../../mocks/mockUser";

describe("Given a useLocalStorage custom hook", () => {
  describe("When it call the setToken function with a key and a token", () => {
    test("Then it should set the token in the local storage", () => {
      const key = "token";

      const {
        result: {
          current: { setToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, realTokenMock.token);

      expect(localStorage.getItem(key)).toBe(realTokenMock.token);
    });
  });
});
