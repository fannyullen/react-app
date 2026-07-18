type TaskCardProps = {
    id: number;
    title: string;
    completed: boolean;
};

export default function TaskCard({
    title,
    completed,
}: TaskCardProps) {
    return (
        <div className="mb-3 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
            <h3 className={`font-medium ${
                completed
                ? "line-through text-gray-400"
                : "text-white"
            }`}
            >
                {title}
            </h3>
        </div>
    )
}