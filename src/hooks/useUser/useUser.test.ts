import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { realTokenMock, userCredentialsMock } from "../../mocks/mockUser";
import { wrapper } from "../../utils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a useUser custom hook", () => {
  describe("When it called the getUserToken function with a valid user credentials", () => {
    test("Then it should return a token", async () => {
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const token = await getUserToken(userCredentialsMock);

      expect(token).toStrictEqual(realTokenMock);
    });
  });

  describe("When it called the getUserToken function with wrong credentials", () => {
    test("Then it should return the response's method with an error with 401 status code", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapper });

      const userToken = getUserToken(userCredentialsMock);

      expect(userToken).rejects.toThrowError();
    });
  });
});
