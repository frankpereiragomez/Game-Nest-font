import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import CreatePage from "./CreatePage";

describe("Given a CreatePage page component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Add your game' heading", () => {
      const headingText = "Add your game";

      renderWithProviders(<CreatePage />);

      const heading = screen.getByRole("heading", {
        name: headingText,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
