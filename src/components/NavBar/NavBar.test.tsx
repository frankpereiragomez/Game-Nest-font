import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import NavBar from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the three icons", () => {
      const expectedTexts = ["home button", "add button", "login button"];

      renderWithProviders(<NavBar />);

      expectedTexts.forEach((text) => {
        const icon = screen.getByRole("img", { name: text });

        expect(icon).toBeInTheDocument();
      });
    });
  });
});
