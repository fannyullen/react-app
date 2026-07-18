import TaskCard from "./TaskCard";
import { Task } from "@/app/data/task";

type TaskListProps = {
    tasks: Task[];
    onToggleTask: (id: number) => void;
};

export default function TaskList({
    tasks,
    onToggleTask,
}: TaskListProps) {
    return (
        <section className="mt-10">
            <h2 className="mb-4 text-2xl font-bold">
                Tasks
            </h2>

            {tasks.map((task) => (
                <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                onToggleTask={onToggleTask}
                />
            ))}
        </section>
    );
}