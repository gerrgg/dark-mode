import { ThemeProvider } from "styled-components";
import { useState } from "react";
import {
  lightTheme,
  darkTheme,
  GlobalStyle,
  Root,
  Wrap,
} from "../../constants";
import Header from "../Header";
import Footer from "../Footer";
import { Button, SecondaryButton, ButtonGroup } from "../Button";
import Heading from "../Heading";
import Text from "../Text";

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
          <Wrap>
            <Heading level={1}>
              Emulate styled-typography headings, div with aria
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Heading level={2}>
              Emulate styled-typography headings, div with aria
            </Heading>
            <Text level={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Heading level={3}>
              Emulate styled-typography headings, div with aria
            </Heading>
            <Text level={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Heading level={4}>
              Emulate styled-typography headings, div with aria
            </Heading>
            <Text level={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Heading level={5}>
              Emulate styled-typography headings, div with aria
            </Heading>
            <Text level={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

            <ButtonGroup justifyContent={"center"} margin={"2rem 0 0 0 "}>
              <Button align={"left"} onClick={handleThemeSwitch}>
                Switch
              </Button>
              <SecondaryButton onClick={handleThemeSwitch}>
                Switch
              </SecondaryButton>
            </ButtonGroup>
          </Wrap>
          <Footer />
        </Root>
      </ThemeProvider>
    </>
  );
}

export default App;
