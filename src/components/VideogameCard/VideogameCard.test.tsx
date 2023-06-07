import { screen } from "@testing-library/react";
import { videogamesCollectionMock } from "../../mocks/videogamesMocks";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import VideogameCard from "./VideogameCard";
import { vi } from "vitest";
import { realTokenMock } from "../../mocks/mockUser";
import { getVideogamesDataMock } from "../../mocks/factories/videogames/videogamesFactory";

describe("Given a VideogameCard component", () => {
  const actionOnClickMock = vi.fn();
  describe("When it's rendered", () => {
    test("Then it should show a videogame's image", () => {
      const videogameAltImage = videogamesCollectionMock[0].name;

      renderWithProviders(
        wrapWithRouter(
          <VideogameCard
            isLazy="eager"
            videogame={videogamesCollectionMock[0]}
            actionOnClick={actionOnClickMock}
          />
        )
      );

      const expectedImage = screen.getByRole("img", {
        name: videogameAltImage,
      });

      expect(expectedImage).toBeInTheDocument();
    });
  });

  describe("When it's rendered with the actionOnClick function and the user click the delete button on his own card", () => {
    test("Then it should call the actionOnClick function", async () => {
      const videogamesFactoryMock = getVideogamesDataMock(1);
      const buttonAltText = "remove button";

      renderWithProviders(
        <VideogameCard
          actionOnClick={actionOnClickMock}
          isLazy="lazy"
          videogame={videogamesFactoryMock[0]}
        />,
        {
          user: {
            isLogged: true,
            id: videogamesFactoryMock[0].user,
            name: videogamesFactoryMock[0].name,
            token: realTokenMock,
          },
        }
      );

      const button = screen.getByAltText(buttonAltText);

      await userEvent.click(button);

      expect(actionOnClickMock).toHaveBeenCalled();
    });
  });
});
