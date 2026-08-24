"use client";

import DashboardCard from "./components/Dashboard/DashboardCard";
import { useState } from "react";
import TaskList from "./components/Tasks/TaskList";
import TaskForm from "./components/Tasks/AddTask/TaskForm";

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

  const openTasks = tasks.filter(task => !task.completed).length;

  const completedTasks = tasks.filter(task => task.completed).length;

  function handleAddTask(title: string) {
      const newTask = {
          id: Date.now(),
          title: title,
          completed: false,
      };

      setTasks([...tasks, newTask]);
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

      <TaskForm onAddTask={handleAddTask} />

      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
      />
    </main>
  );
}
