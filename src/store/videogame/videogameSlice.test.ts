import { getVideogamesDataMock } from "../../mocks/factories/videogames/videogamesFactory";
import { videogamesCollectionMock } from "../../mocks/videogamesMocks";
import {
  VideogameState,
  deleteVideogameActionCreator,
  initialVideogameState,
  loadVideogamesActionCreator,
  videogameReducer,
} from "./videogameSlice";

describe("Given a videogameReducer reducer", () => {
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

  describe("When it receives a current videogame state and a deleteVideogame actions with am id has payload", () => {
    test("Then it should return a list of videogames without the video game with id received", () => {
      const currentVideogameState: VideogameState = {
        videogames: videogamesCollectionMock,
      };

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
});
