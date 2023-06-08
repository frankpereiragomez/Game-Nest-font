import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import VideogameForm from "./VideogameForm";

const testCases = [
  "Price €:",
  "Name:",
  "Genre:",
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

  testCases.slice(1).forEach((label) => {
    describe(`When it's rendered and the user write 'test example' in the field ${label}`, () => {
      test("Then it should show the 'test example' text in the text field", async () => {
        const inputsTest = "text example";

        renderWithProviders(<VideogameForm buttonText="Create" />);

        const labelField = screen.getByLabelText(label);

        await userEvent.type(labelField, inputsTest);

        expect(labelField).toHaveValue(inputsTest);
      });
    });
  });
  describe("When it's rendered and the user write 2 in the field 'Price'", () => {
    test("Then it should show the number 2 in the 'Price' field", async () => {
      const priceInput = 2;

      renderWithProviders(<VideogameForm buttonText="Create" />);

      const priceField = screen.getByLabelText(testCases[0]);

      await userEvent.type(priceField, priceInput.toString());

      expect(priceField).toHaveValue(priceInput);
    });
  });
});
