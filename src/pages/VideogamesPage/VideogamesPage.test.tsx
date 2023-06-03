import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import VideogamesPage from "./VideogamesPage";
import { videogamesCollectionMock } from "../../mocks/videogamesMocks";

describe("Given a VideogamesPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of videogames", () => {
      renderWithProviders(<VideogamesPage />, {
        videogames: { videogames: videogamesCollectionMock },
      });

      videogamesCollectionMock.forEach((videogame) => {
        const heading = screen.getByRole("heading", {
          name: videogame.name,
          level: 2,
        });

        expect(heading).toBeInTheDocument();
      });
    });
  });
});
