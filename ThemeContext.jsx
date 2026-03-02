import { createContext, useContext, useState, useMemo } from "react";
import { getTheme } from "../theme/theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const themeObject = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider
      value={{
        theme: mode,
        themeObject,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

/* ✅ THIS WAS MISSING */
export const useTheme = () => {
  return useContext(ThemeContext);
};