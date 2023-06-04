import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import { videogamesCollectionMock } from "../../mocks/videogamesMocks";
import { wrapper } from "../../utils/testUtils";

describe("Given a useApi custom hook", () => {
  describe("When is called with the getVideogames function", () => {
    test("Then it should return a list of videogames", async () => {
      const {
        result: {
          current: { getVideogames },
        },
      } = renderHook(() => useApi(), { wrapper: wrapper });

      const videogames = await getVideogames();

      expect(videogames).toStrictEqual(videogamesCollectionMock);
    });
  });
});
