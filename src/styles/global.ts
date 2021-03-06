import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #app {
    height: 100%;
    background: ${(props) => props.theme.colors.grayShade1};
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body {
    font-family: 'Poppins', sans-serif;
  }
  *, button, input {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    outline: 0;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;