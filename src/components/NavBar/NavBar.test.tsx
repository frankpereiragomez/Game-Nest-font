import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import NavBar from "./NavBar";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/path/paths";
import { expectedNewUserState } from "../../mocks/mockUser";

describe("Given a NavBar component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the three icons", () => {
      const expectedTexts = ["home button", "add button", "login button"];

      renderWithProviders(wrapWithRouter(<NavBar />));

      expectedTexts.forEach((text) => {
        const icon = screen.getByRole("img", { name: text });

        expect(icon).toBeInTheDocument();
      });
    });
  });
});

describe("Given a logoutOnClick function", () => {
  describe("When the user is logged and click the logout button", () => {
    test("Then it should logout and redirect the user to the '/home-page' path", async () => {
      const route: RouteObject[] = [
        {
          path: paths.app,
          element: <NavBar />,
        },
      ];

      const logoutButtonText = "logout button";

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />, {
        user: expectedNewUserState,
      });

      const logoutButton = screen.getByAltText(logoutButtonText);

      await userEvent.click(logoutButton);

      expect(router.state.location.pathname).toBe(paths.app);
    });
  });
});
