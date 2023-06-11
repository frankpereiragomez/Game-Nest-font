import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Pagination from "./Pagination";
import { vi } from "vitest";

describe("Given a Pagination component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a next button icon", () => {
      const iconAltText = "go next button";
      const backOnClick = vi.fn();
      const nextOnClick = vi.fn();

      renderWithProviders(
        <Pagination
          limit={3}
          page={1}
          totalVideogames={9}
          backOnClick={backOnClick}
          nextOnClick={nextOnClick}
        />
      );

      const nextButton = screen.getByAltText(iconAltText);

      expect(nextButton).toBeInTheDocument();
    });
  });
});
