"use client";

import DashboardCard from "./components/Dashboard/DashboardCard";
import { useState } from "react";
import TaskList from "./components/Tasks/TaskList";
import { Task } from "./data/task";

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

  const task = {
    id: Date.now(),
    title: newTask,
    completed: false,
  };

  const openTasks = tasks.filter(task => !task.completed).length;

  const completedTasks = tasks.filter(task => task.completed).length;

  function handleAddTask(event: React.FormEvent) {
    {/* hindra standard-beteendet */}
    event.preventDefault();

    {/* Om användaren bara skriver mellanslag så vill vi inte skapa en tom uppgift. Trim tar bort mellanslag i början och slutet */}
    if (newTask.trim() === "") return;

    {/* Spread operator */}
    setTasks([...tasks, task]);

    setNewTask("");
  }

  function toggleTask(id:number) {
    {/* Det nya värdet hänger på det gamla värdet */}
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
      task.id === id
      ? {
        ...task,
        completed: !task.completed,
      }
      : task
      )
    );
  }

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
          onSubmit={handleAddTask}
          />
          <button className="ml-2 rounded-md bg-slate-950 px-4 py-2 text-white cursor-pointer">
            Add Task
          </button>
      </form>
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
      />
    </main>
  );
}
