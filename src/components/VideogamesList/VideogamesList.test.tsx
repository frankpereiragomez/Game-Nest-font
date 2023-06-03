import { screen } from "@testing-library/react";
import { getVideogamesDataMock } from "../../mocks/factories/videogames/videogamesFactory";
import { renderWithProviders } from "../../utils/testUtils";
import VideogameList from "./VideogamesList";

describe("Given a VideogamesList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the heading of every videogame", () => {
      const videogamesListMock = getVideogamesDataMock(3);

      renderWithProviders(<VideogameList />, {
        videogames: { videogames: videogamesListMock },
      });

      videogamesListMock.forEach((videogame) => {
        const heading = screen.getByRole("heading", {
          name: videogame.name,
          level: 2,
        });

        expect(heading).toBeInTheDocument();
      });
    });
  });
});
