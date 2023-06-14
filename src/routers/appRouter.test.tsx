import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/testUtils";
import { RouterProvider } from "react-router-dom";
import appRouter from "./appRouter";

describe("Given a appRouter component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the 'Gane Nest' logo", () => {
      const logoAltText = "Game nest logo";

      renderWithProviders(<RouterProvider router={appRouter} />);

      const logo = screen.getByRole("img", { name: logoAltText });

      expect(logo).toBeInTheDocument();
    });
  });
});
