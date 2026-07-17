export default function Sidebar() {
    const menuItems = [
        "Dashboard",
        "Projects",
        "Tasks",
        "Settings"
    ];

    return (
        <aside className="w-64 bg-white shadow-md">
            <nav className="p-6">
                <ul className="space-y-4 text-gray-300">
                    {menuItems.map((item) => (
                        <li 
                        key={item}
                        className="cursor-pointer rounded-md p-2 hover:bg-slate-200">{item}</li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}