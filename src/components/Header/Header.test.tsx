import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "../../styles/theme/theme";
import { store } from "../../store";
import GlobalStyle from "../../styles/GlobalStyle/GlobalStyle";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's render", () => {
    test("Then it should show a logo with a alternative text 'Game nest logo'", () => {
      const expectedText = "Game nest logo";

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <Header />
          </Provider>
        </ThemeProvider>
      );

      const logo = screen.getByRole("img", { name: expectedText });

      expect(logo).toBeInTheDocument();
    });
  });
});
