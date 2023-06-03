import { getVideogamesDataMock } from "../../mocks/factories/videogames/videogamesFactory";
import {
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
});
