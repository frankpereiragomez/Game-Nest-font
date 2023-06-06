import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/testUtils";
import UserFeedback from "./UserFeedback";
import userEvent from "@testing-library/user-event";
import { store } from "../../../store";

describe("Given a UserFeedback component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a feedback modal", () => {
      const expectedLabelText = "feedback modal";

      renderWithProviders(<UserFeedback />);

      const modal = screen.getByLabelText(expectedLabelText);

      expect(modal).toBeInTheDocument();
    });
  });

  describe("When it's rendered has an error modal", () => {
    test("Then it should show an error modal with 'Error' title", () => {
      const iconAltText = "error icon";

      renderWithProviders(<UserFeedback />, { ui: { isError: true } });

      const expectedModal = screen.getByAltText(iconAltText);

      expect(expectedModal).toBeInTheDocument();
    });
  });

  describe("When it's rendered has an error modal and the user clicks anywhere", () => {
    test("Then it should close the error modal", async () => {
      const buttonText = "close error button";

      renderWithProviders(<UserFeedback />, { ui: { isError: true } });

      const expectedModal = screen.getByRole("button", { name: buttonText });

      await userEvent.click(expectedModal);

      const storeState = store.getState();

      expect(storeState.ui.showFeedback).toBeFalsy();
    });
  });
});
