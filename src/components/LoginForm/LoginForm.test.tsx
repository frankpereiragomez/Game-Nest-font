import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, vi } from "vitest";
import { renderWithProviders } from "../../utils/testUtils";
import LoginForm from "./LoginForm";

beforeAll(() => vi.clearAllMocks());

describe("Given a LoginForm component", () => {
  const submitFormMock = vi.fn();
  const expectedButtonText = "Login";
  const usernameTextField = "Username:";
  const passwordTextField = "Password:";
  const usernameInputText = "Charlie Cheen";
  const passwordInputText = "charlieCheen";

  describe("When it's rendered", () => {
    test("Then it should show a username and password input text field", () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const usernameLabel = screen.getByLabelText(usernameTextField);
      const passwordLabel = screen.getByLabelText(passwordTextField);

      expect(usernameLabel).toBeInTheDocument();
      expect(passwordLabel).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Login'", () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const textButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(textButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered with the username or password inputs empty", () => {
    test("Then it should show a disable button with the text 'Login'", () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const buttonDisable = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(buttonDisable).toBeDisabled();
    });
  });

  describe("When it's rendered with the username and password inputs filled", () => {
    test("Then it should show the login button enable", async () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const usernameLabel = screen.getByLabelText(usernameTextField);
      const passwordLabel = screen.getByLabelText(passwordTextField);

      await userEvent.type(usernameLabel, usernameInputText);
      await userEvent.type(passwordLabel, passwordInputText);

      const buttonEnable = screen.getByRole("button");

      expect(buttonEnable).toBeEnabled();
    });
  });

  describe("When it's rendered with the username input field with the text 'Charlie Cheen' and the 'charlieCheen' password", () => {
    test("Then it should show a 'Charlie Cheen' text in the username input field", async () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const usernameLabel = screen.getByLabelText(usernameTextField);

      await userEvent.type(usernameLabel, usernameInputText);

      expect(usernameLabel).toHaveValue(usernameInputText);
    });

    test("Then it should show a 'charlieCheen' text in the password input field", async () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const passwordLabel = screen.getByLabelText(passwordTextField);

      await userEvent.type(passwordLabel, passwordInputText);

      expect(passwordLabel).toHaveValue(passwordInputText);
    });
  });

  describe("When it's rendered with the username input field with the text 'Charlie Cheen', the 'charlieCheen' password and the user press the login button", () => {
    test("Then it should call the submitForm function", async () => {
      renderWithProviders(<LoginForm submitForm={submitFormMock} />);

      const usernameLabel = screen.getByLabelText(usernameTextField);
      const passwordLabel = screen.getByLabelText(passwordTextField);

      await userEvent.type(usernameLabel, usernameInputText);
      await userEvent.type(passwordLabel, passwordInputText);

      const loginButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(loginButton);

      expect(submitFormMock).toHaveBeenCalled();
    });
  });
});
