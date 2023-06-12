import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import VideogamesPage from "./VideogamesPage";
import { videogamesCollectionMock } from "../../mocks/videogamesMocks";
import { server } from "../../mocks/server";
import { paginationHandlers } from "../../mocks/handlers";

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

  describe("When it's rendered and the user clicks the next button", () => {
    test("Then it should show the next button enable", async () => {
      server.resetHandlers(...paginationHandlers);

      renderWithProviders(<VideogamesPage />);

      const nextButton = screen.getByLabelText("next button");

      await userEvent.click(nextButton);

      waitFor(() => {
        expect(nextButton).toBeEnabled();
      });
    });
  });

  describe("When it's rendered and the user clicks the next button", () => {
    test("Then it should show the next button enable", async () => {
      server.resetHandlers(...paginationHandlers);
      const previousButtonAltText = "back button";

      renderWithProviders(<VideogamesPage />);

      const nextButton = screen.getByLabelText("next button");
      const previousButton = screen.getByLabelText(previousButtonAltText);

      await userEvent.click(nextButton);
      await userEvent.click(previousButton);

      waitFor(() => {
        expect(nextButton).toBeEnabled();
      });
    });
  });
});
