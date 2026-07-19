"use client";

import { createContext, useContext, useState } from "react";

type ThemeContextType = {
    theme: "light" | "dark";
    toggleTheme: () => void;
};

export const ThemeContext = 
    createContext<ThemeContextType | undefined>(undefined);
