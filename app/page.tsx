"use client";

import DashboardCard from "./components/Dashboard/DashboardCard";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design Dashboard",
      completed: true,
    },
    {
      id: 2,
      title: "Create Sidebar",
      completed: false,
    },
    {
      id: 3,
      title: "Setup PostgreSQL",
      completed: false,
    },
  ])

  const [newTask, setNewTask] = useState("");

  const openTasks = tasks.filter(task => !task.completed).length;

  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <main>
      <h1 className="mb-8 text-3xl font-bold">
        Welcome back!
      </h1>

      <p className="mb-6">Here's an overview of your projects:</p>
      <div className="grid mb-12 gap-6 md:grid-cols-3">
        <DashboardCard 
        title="Projects"
        value={6}
        />
        <DashboardCard 
        title="Open Tasks"
        value={openTasks}
        />
        <DashboardCard 
        title="Completed"
        value={completedTasks}
        />
      </div>

      <hr />

      <form className="mt-12">
        <input
          placeholder="Enter a new task..."
          className="rounded-md border p-2"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          />
          <button className="ml-2 rounded-md bg-slate-950 px-4 py-2 text-white cursor-pointer">
            Add Task
          </button>
      </form>
    </main>
  );
}
