import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import VideogameForm from "./VideogameForm";

const testCases = [
  "Name:",
  "Genre:",
  "Price €:",
  "Developers:",
  "Image(url):",
  "Description:",
];

describe("Given a VideogameForm component", () => {
  testCases.forEach((expectedText) => {
    describe("When it is rendered", () => {
      test(`Then it should show a text field with the label '${expectedText}'`, () => {
        renderWithProviders(<VideogameForm buttonText={expectedText} />);

        const field = screen.getByLabelText(expectedText);

        expect(field).toBeInTheDocument();
      });
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Create'", () => {
      const expectedText = "Create";

      renderWithProviders(<VideogameForm buttonText={expectedText} />);

      const field = screen.getByRole("button", { name: expectedText });

      expect(field).toBeInTheDocument();
    });
  });
});
