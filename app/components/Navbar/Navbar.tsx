"use client";

import { nav } from "framer-motion/client";
import { useTheme } from "@/app/src/hooks/useTheme";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    return (
        <nav className="flex items-center justify-between px-6 py-4 text-white">
            <h1 className="hidden md:block text-2xl font-bold">
                TaskFlow
            </h1>
            <div className="md:hidden text-2xl">
                <FiMenu />
            </div>
            <div className="flex gap-4">
                <button className="cursor-pointer w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition duration-300" onClick={toggleTheme}>
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
                <button className="cursor-pointer">Profil</button>
            </div>
        </nav>
    );
}