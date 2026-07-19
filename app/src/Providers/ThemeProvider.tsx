import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

type ThemeProviderProps = {
    children: React.ReactNode;
};

export function ThemeProvider({
    children,
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<"light" | "dark">("dark");


    /* Nästa state beror på det nuvarande state. */
    function toggleTheme() {
        setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark"
        );
    }
    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}