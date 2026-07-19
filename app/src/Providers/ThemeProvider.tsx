"use client";

import { useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

type ThemeProviderProps = {
    children: React.ReactNode;
};

export function ThemeProvider({
    children,
}: ThemeProviderProps) {
    /* useState = vilket tema är valt? */
    /* useEffect = vad ska hända när temat ändras? */
    const [theme, setTheme] = useState<"light" | "dark">("dark");


    /* Nästa state beror på det nuvarande state. */
    function toggleTheme() {
        setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark"
        );
    }
    /* varje gång theme ändras, uppdatera HTML */
    /* vi vill lägga till och ta bort class="dark" när theme ändras */
    useEffect(() => {

        if (theme === "dark") {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }

    }, [theme]);
    /* kör bara useEffect när theme ändras */
    

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}