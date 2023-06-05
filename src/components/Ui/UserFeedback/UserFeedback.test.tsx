import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/testUtils";
import UserFeedback from "./UserFeedback";

describe("Given a UserFeedback component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a feedback modal", () => {
      const expectedLabelText = "feedback modal";

      renderWithProviders(<UserFeedback feedback={{ isError: false }} />);

      const modal = screen.getByLabelText(expectedLabelText);

      expect(modal).toBeInTheDocument();
    });
  });
});
