import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { menuItems } from "@/app/data/menuItem";

export default function Sidebar() {

    return (
        <aside className="bg-white/10 w-64 m-4 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
            <nav className="p-6">
                <ul className="space-y-4 text-gray-400">
                    {/*För varje objekt i menuItems, skapa ett nytt li-element*/}
                    {/* Key = för att hålla reda på varje element i listan */}
                    {menuItems.map((item) => (
                        <SidebarItem 
                        key={item.href}
                        label={item.label}
                        href={item.href}
                        />
                    ))}
                </ul>
            </nav>
        </aside>
    );
}