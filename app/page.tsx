import DashboardCard from "./components/Dashboard/DashboardCard";
import TaskList from "./components/Tasks/TaskList";

export default function Home() {
  return (
    <main>
      <h1 className="mb-8 text-3xl font-bold">
        Welcome back!
      </h1>
      <p className="mb-6">Here's an overview of your projects:</p>
      <div className="grid gap-6 md:grid-cols-3">
        <DashboardCard 
        title="Projects"
        value={6}
        />
        <DashboardCard 
        title="Open Tasks"
        value={15}
        />
        <DashboardCard 
        title="Completed"
        value={48}
        />
      </div>

      <div className="mt-8">
          <TaskList />
      </div>
    </main>
  );
}
