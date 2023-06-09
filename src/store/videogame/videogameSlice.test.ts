import { getVideogamesDataMock } from "../../mocks/factories/videogames/videogamesFactory";
import { videogamesCollectionMock } from "../../mocks/videogamesMocks";
import {
  VideogameState,
  createVideogameActionCreator,
  deleteVideogameActionCreator,
  initialVideogameState,
  loadVideogamesActionCreator,
  videogameReducer,
} from "./videogameSlice";

describe("Given a videogameReducer reducer", () => {
  const currentVideogameState: VideogameState = {
    videogames: videogamesCollectionMock,
  };

  describe("When it receives a current videogame state and a loadVideogames actions with a list of videogames has payload", () => {
    test("Then it should show the new state of the list of videogames", () => {
      const newVideogames = getVideogamesDataMock(2);

      const newVideogamesState = videogameReducer(
        initialVideogameState,
        loadVideogamesActionCreator(newVideogames)
      );

      expect(newVideogamesState).toStrictEqual({ videogames: newVideogames });
    });
  });

  describe("When it receives a current videogame state and a deleteVideogame actions with an id has payload", () => {
    test("Then it should return a list of videogames without the video game with id received", () => {
      const expectedVideogameState: VideogameState = {
        videogames: videogamesCollectionMock.slice(1),
      };

      const newVideogameState = videogameReducer(
        currentVideogameState,
        deleteVideogameActionCreator(videogamesCollectionMock[0].id)
      );

      expect(newVideogameState).toStrictEqual(expectedVideogameState);
    });
  });

  describe("When it receives a current videogame state and a createVideogame actions with an new videogame has payload", () => {
    test("Then it should return a list with the new videogame added", () => {
      const currentVideogameState: VideogameState = {
        videogames: [videogamesCollectionMock[0]],
      };

      const newVideogamesState = videogameReducer(
        currentVideogameState,
        createVideogameActionCreator(videogamesCollectionMock[1])
      );

      expect(newVideogamesState).toStrictEqual({
        videogames: videogamesCollectionMock.slice(0, 2),
      });
    });
  });
});
