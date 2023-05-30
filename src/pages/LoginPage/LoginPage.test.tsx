import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show heading with the text 'Login'", () => {
      const expectedText = "Login";

      renderWithProviders(<LoginPage />);

      const heading = screen.getByRole("heading", {
        name: expectedText,
        level: 2,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
