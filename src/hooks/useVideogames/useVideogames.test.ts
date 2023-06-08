import { renderHook } from "@testing-library/react";
import useVideogames from "./useVideogames";
import { videogamesCollectionMock } from "../../mocks/videogamesMocks";
import { wrapper } from "../../utils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a useApi custom hook", () => {
  describe("When is called with the getVideogames function", () => {
    test("Then it should return a list of videogames", async () => {
      const {
        result: {
          current: { getVideogames },
        },
      } = renderHook(() => useVideogames(), { wrapper: wrapper });

      const videogames = await getVideogames();

      expect(videogames).toStrictEqual(videogamesCollectionMock);
    });
  });

  describe("When is called the getVideogames function and can't get videogames", () => {
    test("Then it should show a error modal with the 'Something was wrong, please try again!' message", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getVideogames },
        },
      } = renderHook(() => useVideogames(), { wrapper: wrapper });

      const videogames = await getVideogames();

      expect(videogames).toBeUndefined();
    });
  });

  describe("When is called the deleteVideogames function with a videogame's id", () => {
    test("Then it should show a possitive feedback modal saying 'Your game has been successfully deleted'", async () => {
      const expectedCode = 200;

      const {
        result: {
          current: { deleteVideogame },
        },
      } = renderHook(() => useVideogames(), { wrapper: wrapper });

      const response = await deleteVideogame(videogamesCollectionMock[0].id);

      expect(expectedCode).toBe(response);
    });

    test("Then it should show a negative feedback modal saying 'Videogame not found'", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { deleteVideogame },
        },
      } = renderHook(() => useVideogames(), { wrapper: wrapper });

      const response = await deleteVideogame(videogamesCollectionMock[0].id);

      expect(response).toBeUndefined();
    });
  });
});
