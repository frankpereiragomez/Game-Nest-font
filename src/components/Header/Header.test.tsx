import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Header from "./Header";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/path/paths";
import VideogamesPage from "../../pages/VideogamesPage/VideogamesPage";
import App from "../App/App";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a logo with a alternative text 'Game nest logo'", () => {
      const expectedText = "Game nest logo";

      renderWithProviders(wrapWithRouter(<Header />));

      const logo = screen.getByRole("img", { name: expectedText });

      expect(logo).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user clicks the logo", () => {
    test("Then it should redirect to the '/home-page' path", async () => {
      const logoAltText = "Game nest logo";
      const route: RouteObject[] = [
        {
          path: paths.app,
          element: <App />,
        },
        {
          path: paths.homePage,
          element: <VideogamesPage />,
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />);

      const logo = screen.getByAltText(logoAltText);

      await userEvent.click(logo);

      expect(router.state.location.pathname).toBe(paths.homePage);
    });
  });
});
