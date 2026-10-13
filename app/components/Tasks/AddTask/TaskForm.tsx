"use client";

import { useState } from "react";

type TaskFormProps = {
    onAddTask: (title: string) => void;
};

export default function TaskForm({ onAddTask }: TaskFormProps) {

    const [newTask, setNewTask] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        if (newTask.trim() === "") return;
        
        onAddTask(newTask); 
        
        setNewTask("");
    }

    return (
        <form className="mt-12" onSubmit={handleSubmit}>
            <input
            placeholder="Enter a new task..."
            className="rounded-md border p-2"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            />
            <button className="ml-2 rounded-md px-4 py-2 text-white bg-white/10 dark:bg-white/20 shadow-2xl border border-slate-300 cursor-pointer">
                Add Task
            </button>
        </form>
    )
}