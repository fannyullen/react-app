import ProjectsCard from "../components/Projects/ProjectsCard";

export default function ProjectsPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul className="grid grid-cols-2 gap-4 m-4 mt-12">
        <ProjectsCard
          title="test"
          description="test"
        />
        <ProjectsCard
          title="test"
          description="test"
        />
        <ProjectsCard
          title="test"
          description="test"
        />
        <ProjectsCard
          title="test"
          description="test"
        />
      </ul>
    </main>
  );
}