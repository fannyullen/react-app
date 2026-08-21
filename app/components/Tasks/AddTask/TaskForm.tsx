"use client";

import { useState } from "react";

export default function TaskForm() {

    const [newTask, setNewTask] = useState("");

    return (
        <form className="mt-12">
            <input
            placeholder="Enter a new task..."
            className="rounded-md border p-2"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            /* onSubmit={handleAddTask} */
            />
            <button className="ml-2 rounded-md px-4 py-2 text-white bg-white/10 dark:bg-white/20 shadow-2xl border border-slate-300 cursor-pointer">
                Add Task
            </button>
        </form>
    )
}