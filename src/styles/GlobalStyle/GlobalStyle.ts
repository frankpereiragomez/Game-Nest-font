import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    font-family: "Blinker",system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    text-decoration: none;
    color:inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button,
  input {
    font-family: inherit;
    padding: 5px 10px;
    border:none;
    outline:none;
  }

  a {
    text-decoration: none;
    color:inherit;
  }

  button {
    cursor: pointer;
    font:inherit;
    border-style: none;
  }

  img {
    max-width:100%;
  }

`;

export default GlobalStyle;
