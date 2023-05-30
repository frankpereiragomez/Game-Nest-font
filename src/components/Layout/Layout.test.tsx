import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Layout from "./Layout";

describe("Given a layout component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with 'Game Nest' text", () => {
      const expectedTest = "Game Nest";

      renderWithProviders(<Layout />);

      const heading = screen.getByRole("heading", {
        name: expectedTest,
        level: 1,
      });
      expect(heading).toBeInTheDocument();
    });
  });
});
