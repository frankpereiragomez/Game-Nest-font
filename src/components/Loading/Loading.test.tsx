import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a loading spinner", () => {
      const expectedAltTex = "loading spinner";

      renderWithProviders(<Loading />);

      const loadingSpinner = screen.getByLabelText(expectedAltTex);

      expect(loadingSpinner).toBeInTheDocument();
    });
  });
});
