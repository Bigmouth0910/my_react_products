import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "blue.800",
        backgroundColor: "white",
      },
    },
    colors: {
      blue: {
        50: "#e6e7fe",
        100: "#b5b7fc",
        200: "#8487fa",
        300: "#5356f9",
        400: "#2226f7",
        500: "#080ddd",
        600: "#060aac",
        700: "#05077b",
        800: "#03044a",
        900: "#010119",
      },
    },
  },
  fonts: {
    body: "'Lato', sans-serif",
    heading: "'Cinzel Decorative', serif",
  },
});
