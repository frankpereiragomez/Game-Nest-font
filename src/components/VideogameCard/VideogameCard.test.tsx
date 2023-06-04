import { screen } from "@testing-library/react";
import { videogamesCollectionMock } from "../../mocks/videogamesMocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import VideogameCard from "./VideogameCard";

describe("Given a VideogameCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a videogame's image", () => {
      const videogameAltImage = videogamesCollectionMock[0].name;

      renderWithProviders(
        wrapWithRouter(
          <VideogameCard videogame={videogamesCollectionMock[0]} />
        )
      );

      const expectedImage = screen.getByRole("img", {
        name: videogameAltImage,
      });

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
