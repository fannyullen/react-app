"use client";

import { nav } from "framer-motion/client";
import { useTheme } from "@/app/src/hooks/useTheme";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

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
                <button className="cursor-pointer" onClick={toggleTheme}>
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
                <Link
                href="/profile"
                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-white/10"
                >
                <span>Profil</span>
                </Link>
            </div>
        </nav>
    );
}