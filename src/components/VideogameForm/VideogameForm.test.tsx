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
  const inputsTest = "text example";

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
        renderWithProviders(<VideogameForm buttonText="Create" />);

        const labelField = screen.getByLabelText(label);

        await userEvent.type(labelField, inputsTest);

        expect(labelField).toHaveValue(inputsTest);
      });
    });
  });
  describe("When it's rendered and the user write 2 in the field 'Price:'", () => {
    test("Then it should show the number 2 in the 'Price:' field", async () => {
      const priceInput = 2;

      renderWithProviders(<VideogameForm buttonText="Create" />);

      const priceField = screen.getByLabelText(testCases[0]);

      await userEvent.type(priceField, priceInput.toString());

      expect(priceField).toHaveValue(priceInput);
    });
  });

  describe("When it's rendered and the inputs fields are not filled", () => {
    test("Then it should show an disabled Create button", () => {
      renderWithProviders(<VideogameForm buttonText="Create" />);

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });

  describe("When it's rendered with all the inputs fields filled", () => {
    test("Then it should show an enable button with the text 'Create'", async () => {
      const priceInput = 32;
      const buttonText = "Create";

      renderWithProviders(<VideogameForm buttonText={buttonText} />);

      const priceField = screen.getByLabelText(testCases[0]);

      const nameField = screen.getByLabelText(testCases[1]);
      const genreField = screen.getByLabelText(testCases[2]);
      const developersField = screen.getByLabelText(testCases[3]);
      const imageUrlField = screen.getByLabelText(testCases[4]);
      const descriptionField = screen.getByLabelText(testCases[5]);

      await userEvent.type(nameField, inputsTest);
      await userEvent.type(genreField, inputsTest);
      await userEvent.type(developersField, inputsTest);
      await userEvent.type(imageUrlField, inputsTest);
      await userEvent.type(descriptionField, inputsTest);
      await userEvent.type(priceField, priceInput.toString());

      const button = screen.getByRole("button");

      expect(button).toBeEnabled();
    });
  });
});
