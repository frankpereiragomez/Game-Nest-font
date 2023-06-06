import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
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
    test("Then it should show a loading spinner", () => {
      const expectedLabelText = "loading spinner";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: { isLoading: true },
      });

      const loadingSpinner = screen.getByLabelText(expectedLabelText);

      expect(loadingSpinner).toBeInTheDocument();
    });
  });

  describe("When it's rendered and receives an error loading the homepage", () => {
    test("The it should show a Feedback component", () => {
      const expectedLabeltext = "feedback modal";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: { showFeedback: true },
      });

      const feedback = screen.getByLabelText(expectedLabeltext);

      expect(feedback).toBeInTheDocument();
    });
  });
});
