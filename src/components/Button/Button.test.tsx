import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's rendered with a text 'Login'", () => {
    test("Then it should show a button with the text 'Login'", () => {
      const buttonText = "Login";

      renderWithProviders(<Button button={{ text: buttonText }} />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
