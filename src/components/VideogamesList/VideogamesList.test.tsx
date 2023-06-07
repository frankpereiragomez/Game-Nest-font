import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getVideogamesDataMock } from "../../mocks/factories/videogames/videogamesFactory";
import { renderWithProviders } from "../../utils/testUtils";
import VideogameList from "./VideogamesList";
import { realTokenMock } from "../../mocks/mockUser";

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

  describe("When it's rendered with a list of videogames and the user clicks the delete button of his own videogame", () => {
    test("Then it should show a list without the deleted videogame", async () => {
      const videogameListMock = getVideogamesDataMock(3);
      const buttonAltText = "remove button";

      renderWithProviders(<VideogameList />, {
        user: {
          isLogged: true,
          id: videogameListMock[0].user,
          token: realTokenMock,
          name: videogameListMock[0].name,
        },
        videogames: { videogames: videogameListMock },
      });

      const heading = screen.getByRole("heading", {
        name: videogameListMock[0].name,
      });

      const button = screen.getAllByAltText(buttonAltText);

      await userEvent.click(button[0]);

      expect(heading).not.toBeInTheDocument();
    });
  });
});
