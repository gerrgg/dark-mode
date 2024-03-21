import { styled, createGlobalStyle } from "styled-components";

export const lightTheme = {
  bodyColor: "#212227",
  background: "#EBF2FA",
  primary: "#FF6978 ",
  secondary: "#BDD4E7",
};

export const darkTheme = {
  bodyColor: "#D7CDCC",
  background: "#1D1E2C",
  primary: "#9C528B",
  secondary: "#CE8147",
};

export const fontSizes = [
  "4.369rem",
  "2.369rem",
  "1.777rem",
  "1.333rem",
  "1rem",
  "0.750rem",
  "10px",
];

export const fontFamiles = ['"Stylish", serif', '"Offside", sans-serif'];

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  color: ${(props) => props.theme.bodyColor};
  background: ${(props) => props.theme.background};
  align-items: center;
`;

export const Wrap = styled.div`
  box-sizing: content-box;
  max-width: 1280px;
  padding: 0 5rem;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
  box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
   overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`;
