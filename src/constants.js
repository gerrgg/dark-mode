import { styled, createGlobalStyle } from "styled-components";

export const lightTheme = {
  bodyColor: "#333",
  background: "#fff",
  primary: "red",
};

export const darkTheme = {
  bodyColor: "#fff",
  background: "#333",
  primary: "blue",
};

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  color: ${(props) => props.theme.bodyColor};
  background: ${(props) => props.theme.background};
  align-items: center;
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
