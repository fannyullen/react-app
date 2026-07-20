"use client";

import { nav } from "framer-motion/client";
import { useTheme } from "@/app/src/hooks/useTheme";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    return (
        <nav className="flex items-center justify-between px-6 py-4 text-white">
            <h1 className="text-2xl font-bold">
                TaskFlow
            </h1>
            <div className="flex gap-4">
                <button className="cursor-pointer" onClick={toggleTheme}>
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
                <button className="cursor-pointer">Profil</button>
            </div>
        </nav>
    );
}