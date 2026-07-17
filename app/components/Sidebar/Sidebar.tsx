import Link from "next/link";

export default function Sidebar() {
    const menuItems = [
        {
            label: "Dashboard",
            href: "/"
        },
        {
            label: "Projects",
            href: "/projects"
        },
        {
            label: "Tasks",
            href: "/tasks"
        },
        {
            label: "Settings",
            href: "/settings"
        },
    ];

    return (
        <aside className="w-64 bg-white shadow-md">
            <nav className="p-6">
                <ul className="space-y-4 text-gray-300">
                    {/*För varje objekt i menuItems, skapa ett nytt li-element*/}
                    {/* Key = för att hålla reda på varje element i listan */}
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <Link
                            href={item.href}
                            className="cursor-pointer rounded-md p-2 hover:bg-slate-200"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}