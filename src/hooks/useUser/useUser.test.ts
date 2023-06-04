import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { realTokenMock, userCredentialsMock } from "../../mocks/mockUser";

describe("Given a useUser custom hook", () => {
  describe("When it called the getUserToken function with a valid user credentials", () => {
    test("Then it should return a token", async () => {
      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(userCredentialsMock);

      expect(token).toStrictEqual(realTokenMock);
    });
  });
});
