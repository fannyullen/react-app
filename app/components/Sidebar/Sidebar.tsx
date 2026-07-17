export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-100 p-4">
            <h2 className="text-xl font-semibold mb-6">
                Navigation
            </h2>
            <nav>
                <ul className="space-y-3">
                    <li>Dashboard</li>
                    <li>Projects</li>
                    <li>Tasks</li>
                    <li>Settings</li>
                </ul>
            </nav>
        </aside>
    );
}