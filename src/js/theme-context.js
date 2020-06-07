/** @format */
import React from "react";
export const themes = {
  light: {
    background: "#dfdfdf",
    color: "#101010",
  },
  dark: {
    background: "#101010",
    color: "#dfdfdf",
  },
};

export const ThemeContext = React.createContext(themes.dark);
