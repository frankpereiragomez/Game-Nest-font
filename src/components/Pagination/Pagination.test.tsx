import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Pagination from "./Pagination";

describe("Given a Pagination component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a next button icon", () => {
      const iconAltText = "go next button";

      renderWithProviders(<Pagination />);

      const nextButton = screen.getByAltText(iconAltText);

      expect(nextButton).toBeInTheDocument();
    });
  });
});
