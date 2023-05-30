import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../utils/testUtils";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a logo with a alternative text 'Game nest logo'", () => {
      const expectedText = "Game nest logo";

      renderWithProviders(<Header />);

      const logo = screen.getByRole("img", { name: expectedText });

      expect(logo).toBeInTheDocument();
    });
  });
});
