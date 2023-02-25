import styled from "styled-components/native";

const theme = {
  colors: {
    "gray-1": "#1B1D1E",
    "gray-2": "#333638",
    "gray-3": "#5C6265",
    "gray-4": "#B9BBBC",
    "gray-5": "#DDDEDF",
    "gray-6": "#FAFAFA",
    "gray-7": "#EFF0F0",

    white: "#FFFFFF",

    "red-dark": "#BF3B44",
    "red-mid": "#F3BABD",
    "red-light": "#F4E6E7",

    "green-dark": "#639339",
    "green-mid": "#CBE4B4",
    "green-light": "#E5F0DB",
  },
  fonts: {
    regular: "NunitoSans_400Regular",
    bold: "NunitoSans_700Bold",
  },
  fontSize: {
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "18px",
    "2xl": "24px",
    "3xl": "32px",
  },
} as const;

export { theme };
