import { nav } from "framer-motion/client";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-slate-800 px-6 py-4 text-white shadow-md">
            <h1 className="text-2xl font-bold">
                TaskFlow
            </h1>
            <div>
                Profil
            </div>
        </nav>
    );
}