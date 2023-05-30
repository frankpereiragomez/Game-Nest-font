import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a username and password input text field", () => {
      const expectedUsernameText = "Username:";
      const expectedPasswordText = "Password:";

      renderWithProviders(<LoginForm />);

      const usernameLabel = screen.getByLabelText(expectedUsernameText);
      const passwordLabel = screen.getByLabelText(expectedPasswordText);

      expect(usernameLabel).toBeInTheDocument();
      expect(passwordLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Login'", () => {
      const expectedButtonText = "Login";

      renderWithProviders(<LoginForm />);

      const textButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(textButton).toBeInTheDocument();
    });
  });
});
