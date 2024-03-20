import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyle, Root } from "../../constants";
import Header from "../Header";
import Footer from "../Footer";
import Button from "../Button";

function App() {
  const [themePreference, setThemePreference] = useState(
    window.localStorage.getItem("theme-preference")
  );

  const theme = themePreference === "light" ? lightTheme : darkTheme;

  const handleThemeSwitch = () => {
    setThemePreference(themePreference === "light" ? "dark" : "light");
    window.localStorage.setItem(
      "theme-preference",
      themePreference === "light" ? "dark" : "light"
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Root>
          <GlobalStyle />
          <Header />
          <main>
            <div className="button-group">
              <Button onClick={handleThemeSwitch}>Switch</Button>
            </div>
          </main>
          <Footer />
        </Root>
      </ThemeProvider>
    </>
  );
}

export default App;
