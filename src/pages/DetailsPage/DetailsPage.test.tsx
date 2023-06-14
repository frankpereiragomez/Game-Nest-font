import { renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  renderWithProviders,
  wrapWithRouter,
  wrapper,
} from "../../utils/testUtils";
import DetailsPage from "./DetailsPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { store } from "../../store";
import { LazyDetailsPage } from "../../routers/path/LazyPages/LazyPagez";
import { vi } from "vitest";
import useVideogames from "../../hooks/useVideogames/useVideogames";
import { videogamesCollectionMock } from "../../mocks/videogamesMocks";
import { realTokenMock } from "../../mocks/mockUser";
import feedbackMessages from "../../utils/feedbackMessages/feedbackMessages";

window.scrollTo = vi.fn().mockImplementation(() => ({}));

describe("Given a DetailsPage page component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Details' heading", () => {
      const headingText = "Details";

      renderWithProviders(wrapWithRouter(<DetailsPage />));

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's rendered with an videogame id", () => {
    test("Then it should show the name of the videogame as a heading", async () => {
      const route: RouteObject[] = [
        {
          path: "/:videogameId",
          element: <LazyDetailsPage />,
        },
      ];

      const videogameId = store.getState().videogames.videogameById?.id;

      const router = createMemoryRouter(route, {
        initialEntries: ["/", `/${videogameId}`],
      });

      renderWithProviders(<RouterProvider router={router} />, {
        user: {
          isLogged: true,
          id: videogamesCollectionMock[0].user as string,
          name: "",
          token: realTokenMock,
        },
      });

      const videogameName = store.getState().videogames.videogameById?.name;

      const heading = await waitFor(() =>
        screen.getByRole("heading", {
          name: videogameName,
          level: 2,
        })
      );

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user click the delete button of details's videogame", () => {
    test("Then it should remove the videogame and redirect the user to the /home-page path", async () => {
      const route: RouteObject[] = [
        {
          path: "/:videogameId",
          element: <LazyDetailsPage />,
        },
      ];

      const videogameId = store.getState().videogames.videogameById?.id;

      const router = createMemoryRouter(route, {
        initialEntries: ["/", `/${videogameId}`],
      });

      renderWithProviders(<RouterProvider router={router} />, {
        user: {
          isLogged: true,
          id: videogamesCollectionMock[0].user as string,
          name: "",
          token: realTokenMock,
        },
      });

      const {
        result: {
          current: { deleteVideogame },
        },
      } = renderHook(() => useVideogames(), { wrapper: wrapper });

      const buttonAltText = "deleted button";

      const deletedButton = await waitFor(() =>
        screen.getByLabelText(buttonAltText)
      );

      await deleteVideogame(videogameId as string);

      await userEvent.click(deletedButton);

      const feedbackMessage = store.getState().ui.message;

      await expect(feedbackMessage).toBe(feedbackMessages.deleteOk);
    });
  });
});
