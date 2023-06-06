import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/testUtils";
import UserFeedback from "./UserFeedback";
import feedbackMessages from "../../../utils/feedbakMessages/feedbakMessages";

describe("Given a UserFeedback component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a feedback modal", () => {
      const expectedLabelText = "feedback modal";

      renderWithProviders(
        <UserFeedback feedback={{ message: feedbackMessages.createOk }} />
      );

      const modal = screen.getByLabelText(expectedLabelText);

      expect(modal).toBeInTheDocument();
    });
  });
});
