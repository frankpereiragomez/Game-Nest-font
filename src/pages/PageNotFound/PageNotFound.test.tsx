import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import PageNotFound from "./PageNotFound";
import feedbackMessages from "../../utils/feedbackMessages/feedbackMessages";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/path/paths";

describe("Given a PageNotFound page component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a '404 Page not found. Please go back.' text", () => {
      const headingText = feedbackMessages.pageNotFound;

      renderWithProviders(wrapWithRouter(<PageNotFound />));

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user click the 'Go Back' button", () => {
    test("Then it should redirect to the home page with path '/home-page'", async () => {
      const expectedButtonText = feedbackMessages.goBack;

      const routes: RouteObject[] = [
        { path: paths.notFound, element: <PageNotFound /> },
        { path: paths.homePage },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      expect(router.state.location.pathname).toBe(paths.homePage);
    });
  });
});
