import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Reset Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Base Styles */
  html, body {
    font-family: 'Inter', sans-serif; /* Replace with your chosen font */
    font-size: 16px;
    color: #FFFFFF; /* Default text color */
    background-color: #1A1B27; /* Default background color */
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
