import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  /* Reset Styles */
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Base Styles */
  html, body {
    font-family: ${theme.fonts.fontFamily}; 
    background: ${(props)=>props.theme.colors.bodyBackground};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
  }

  /* Utility Classes */
  .hidden {
    display: none;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
