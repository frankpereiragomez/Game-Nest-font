import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import CreatePage from "./CreatePage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../routers/path/paths";
import VideogamesPage from "../VideogamesPage/VideogamesPage";
import {
  videogameWithoutIdAndUser,
  videogamesCollectionMock,
} from "../../mocks/videogamesMocks";

describe("Given a CreatePage page component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Add your game' heading", () => {
      const headingText = "Add your game";

      renderWithProviders(wrapWithRouter(<CreatePage />));

      const heading = screen.getByRole("heading", {
        name: headingText,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's rendered with the createOnSubmit function and a new videogame", () => {
    test("Then it should redirect the user to the home-page and show the 'The Legend of Zelda: Tears of the Kingdom' heading", async () => {
      const routes: RouteObject[] = [
        { path: "/", element: <CreatePage /> },
        { path: paths.homePage, element: <VideogamesPage /> },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const testCases = [
        "Price €:",
        "Name:",
        "Genre:",
        "Developers:",
        "Image(url):",
        "Description:",
      ];

      const priceField = screen.getByLabelText(testCases[0]);
      const nameField = screen.getByLabelText(testCases[1]);
      const genreField = screen.getByLabelText(testCases[2]);
      const developersField = screen.getByLabelText(testCases[3]);
      const imageUrlField = screen.getByLabelText(testCases[4]);
      const descriptionField = screen.getByLabelText(testCases[5]);

      await userEvent.type(nameField, videogamesCollectionMock[0].name);
      await userEvent.type(genreField, videogamesCollectionMock[0].genre);
      await userEvent.type(
        developersField,
        videogamesCollectionMock[0].developers
      );
      await userEvent.type(imageUrlField, videogameWithoutIdAndUser.image);
      await userEvent.type(
        descriptionField,
        videogameWithoutIdAndUser.description
      );
      await userEvent.type(priceField, videogameWithoutIdAndUser.price);

      const button = screen.getByRole("button");

      await userEvent.click(button);

      const heading = screen.getByRole("heading", {
        name: videogamesCollectionMock[0].name,
        level: 2,
      });
      expect(router.state.location.pathname).toBe(paths.homePage);
      expect(heading).toBeInTheDocument();
    });
  });
});
