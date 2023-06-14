import { screen } from "@testing-library/react";
import { realTokenMock } from "../../mocks/mockUser";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import App from "./App";

localStorage.setItem("token", realTokenMock);

describe("Given a App component", () => {
  describe("When it's rendered with a logged user", () => {
    test("Then it should the logout button in the navbar", () => {
      const logout = "logout";

      renderWithProviders(wrapWithRouter(<App />), {
        user: { isLogged: true, name: "Admin", id: "", token: realTokenMock },
      });

      const logoutButton = screen.getByLabelText(logout);

      expect(logoutButton).toBeInTheDocument();
    });
  });
});
