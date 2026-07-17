export default function Sidebar() {
    return (
        <aside className="w-64 bg-white shadow-md">
            <nav className="p-6">
                <ul className="space-y-4 text-gray-300">
                    <li className="cursor-pointer rounded-md p-2 hover-bg-slate-200">Dashboard</li>
                    <li className="cursor-pointer rounded-md p-2 hover-bg-slate-200">Projects</li>
                    <li className="cursor-pointer rounded-md p-2 hover-bg-slate-200">Tasks</li>
                    <li className="cursor-pointer rounded-md p-2 hover-bg-slate-200">Settings</li>
                </ul>
            </nav>
        </aside>
    );
}