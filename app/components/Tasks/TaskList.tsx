import TaskCard from "./TaskCard";

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type TaskListProps = {
    tasks: Task[];
};

export default function TaskList({
    tasks,
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
                />
            ))}
        </section>
    );
}