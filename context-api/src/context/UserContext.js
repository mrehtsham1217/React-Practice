// import React, { createContext } from "react";
// const user_context = createContext()

// export default user_context;

import { createContext, useContext } from "react";

// Define the initial context state
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

// Export ThemeProvider
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use the ThemeContext
export default function useTheme() {
    return useContext(ThemeContext);
}
