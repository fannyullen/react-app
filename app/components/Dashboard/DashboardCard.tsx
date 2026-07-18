type DashboardCardProps = {
    title: string;
    value: number;
};

export default function DashboardCard({
    title,
    value,
}: DashboardCardProps) {
    return (
        <div className="bg-white/10 p-6 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
            <h2 className="text-sm font-medium text-gray-500">
                {title}
            </h2>
            <p className="mt-2 text-3xl font-bold">
                {value}
            </p>
        </div>
    )
}