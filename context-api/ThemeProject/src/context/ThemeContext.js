import { createContext, useContext } from "react";
//First step to create a context and use functions
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },
});

//2nd  Step is to make a rapper of Provider

export const ThemeProvider = ThemeContext.Provider;

//3rd step to make a function that returns useContext hook
//We can access the function which is declared in ThemeContext by using useTheme custom Hook
export default function useTheme() {
    return useContext(ThemeContext);
}