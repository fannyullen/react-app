import { Task } from "@/app/data/task";

type TaskCardProps = {
    id: number;
    title: string;
    completed: boolean;
    onToggleTask: (id: number) => void;
};

export default function TaskCard({
    title,
    completed,
    onToggleTask,
}: TaskCardProps) {
    return (
        <div className="flex gap-4 mb-3 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
            <input 
            type="checkbox"
            checked={completed}
            onChange={() => onToggleTask}
            />
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