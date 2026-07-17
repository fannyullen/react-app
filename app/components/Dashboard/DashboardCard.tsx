type DashboardCardProps = {
    title: string;
    value: number;
};

export default function DashboardCard({
    title,
    value,
}: DashboardCardProps) {
    return (
        <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-sm font-medium text-gray-500">
                {title}
            </h2>
            <p className="mt-2 text-3xl font-bold">
                {value}
            </p>
        </div>
    )
}