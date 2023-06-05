import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";
import uiMock from "../../mocks/uiMock";

describe("Given a layout component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with 'Game Nest' text", () => {
      const expectedTest = "Game Nest";

      renderWithProviders(wrapWithRouter(<Layout />));

      const heading = screen.getByRole("heading", {
        name: expectedTest,
        level: 1,
      });
      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's rendered but it is taking a long time to go to the desired page", () => {
    test("Then it shoul show a loading spinner", () => {
      const expectedLabelText = "loading spinner";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: uiMock,
      });

      const loadingSpinner = screen.getByLabelText(expectedLabelText);

      expect(loadingSpinner).toBeInTheDocument();
    });
  });
});
