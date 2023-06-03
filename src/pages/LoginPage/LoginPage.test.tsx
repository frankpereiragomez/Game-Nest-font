import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginPage from "./LoginPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/path/paths";
import LazyLoginPage from "../../routers/path/LazyLoginPage";

describe("Given a LoginPage component", () => {
  const expectedButtonText = "Login";

  describe("When it's rendered", () => {
    test("Then it should show heading with the text 'Login'", async () => {
      renderWithProviders(wrapWithRouter(<LazyLoginPage />));

      const heading = await waitFor(() =>
        screen.getByRole("heading", {
          name: expectedButtonText,
          level: 2,
        })
      );

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it call the onSubmit function with a valid credentials and the user click the login button", () => {
    test("Then it should login the user and redirect to the '/' path", async () => {
      const usernameTextField = "Username:";
      const passwordTextField = "Password:";
      const usernameInputText = "Charlie Cheen";
      const passwordInputText = "charlieCheen";

      const route: RouteObject[] = [
        {
          path: paths.app,
          element: <LoginPage />,
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />);

      const usernameLabel = screen.getByLabelText(usernameTextField);
      const passwordLabel = screen.getByLabelText(passwordTextField);
      const loginButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.type(usernameLabel, usernameInputText);
      await userEvent.type(passwordLabel, passwordInputText);

      await userEvent.click(loginButton);

      expect(router.state.location.pathname).toStrictEqual(paths.app);
    });
  });
});
