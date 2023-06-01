import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";
import { realTokenMock } from "../../mocks/mockUser";

describe("Given a useLocalStorage custom hook", () => {
  const key = "token";

  describe("When it call the setToken function with a key and a token", () => {
    test("Then it should set the token in the local storage", () => {
      const {
        result: {
          current: { setToken, getToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, realTokenMock.token);

      expect(getToken(key)).toBe(realTokenMock.token);
    });
  });

  describe("When it call the delete function with a key", () => {
    test("Then it should remove the token from the local storage", () => {
      const {
        result: {
          current: { deleteToken },
        },
      } = renderHook(() => useLocalStorage());

      deleteToken(key);

      expect(localStorage.length).toBe(0);
    });
  });
});
