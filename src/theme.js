import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  "2xl": "1400px",
});

const colors = {
  brand: {
    blue: "#053582",
    header: "#393939",
    text: "#252525",
    black: "#000",
    green: "#34B53A",
    purple: "#4339F2",
    red: "#FF3A29",
    gray: "#92929D",
    bg: "rgba(245, 245, 242, 1)",
  },
};

const styles = {
  global: {
    html: {
      fontSize: "62.5%",
      boxSizing: "border-box",
    },
    body: {
      fontSize: "1.4rem",
      fontFamily: "'DM Sans', sans-serif",
      color: "#92929D",
    },
    a: {
      color: "#333758",
    },
    "::placeholder": {
      color: "#B5B5BE",
    },
  },
};

const customTheme = extendTheme({ styles, colors, breakpoints });

export default customTheme;
