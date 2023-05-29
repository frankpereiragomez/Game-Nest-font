import { render, screen } from "@testing-library/react";
import GlobalStyle from "../../styles/GlobalStyle/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "../../store";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import theme from "../../styles/theme/theme";
import appRouter from "../../routers/appRouter";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'Hello world!", () => {
      const expectedText = /Nintendo/i;

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <RouterProvider router={appRouter} />
          </Provider>
        </ThemeProvider>
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
