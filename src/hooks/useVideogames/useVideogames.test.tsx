import { renderHook } from "@testing-library/react";
import { vi } from "vitest";
import useVideogames from "./useVideogames";
import { videogamesCollectionMock } from "../../mocks/videogamesMocks";
import { wrapper } from "../../utils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { store } from "../../store";
import FeedbackMessages from "../../utils/feedbackMessages/feedbackMessages";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a useVideogames custom hook", () => {
  const limit = 9;
  const skip = 0;

  describe("When is called with the getVideogames function", () => {
    test("Then it should return a list of videogames", async () => {
      const {
        result: {
          current: { getVideogames },
        },
      } = renderHook(() => useVideogames(), { wrapper: wrapper });

      const videogamesState = await getVideogames(skip, limit);

      const videogames = videogamesState?.videogames;

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

      const videogames = await getVideogames(skip, limit);

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

  describe("When  is called the createVideogame function and receives 'The Legend of Zelda: Tears of the Kingdom' videogame", () => {
    test("Then it should return the 'The Legend of Zelda: Tears of the Kingdom' videogame", async () => {
      const expectedVideogame = videogamesCollectionMock[0];

      const {
        result: {
          current: { createVideogame },
        },
      } = renderHook(() => useVideogames(), { wrapper: wrapper });

      const newVideogame = await createVideogame(expectedVideogame);

      expect(newVideogame).toStrictEqual(expectedVideogame);
    });
  });

  describe("When is called the createVideogame function and cannot create the new videogame", () => {
    test("Then it should show a feedback modal with 'Your game could not be deleted' error message", async () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { createVideogame },
        },
      } = renderHook(() => useVideogames(), { wrapper: wrapper });

      await createVideogame(videogamesCollectionMock[0]);

      const errorMessage = store.getState().ui.message;

      expect(errorMessage).toBe(FeedbackMessages.createFailed);
    });
  });
});
