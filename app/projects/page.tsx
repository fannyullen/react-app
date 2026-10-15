import ProjectCard from "../components/Projects/ProjectCard";

export default function ProjectsPage() {

  const projects = [
    {
      id: 1,
      title: "TaskFlow",
      description: "A task management application.",
    },
    {
      id: 2,
      title: "Portfolio",
      description: "My personal portfolio website.",
    },
    {
      id: 3,
      title: "Webshop",
      description: "Lorem ipsum dolor",
    },
  ];

  return (
    <main>
      <h1 className="text-3xl font-bold">Projects</h1>
      <p>Manage all your projects in one place.</p>
        <div className="grid grid-cols-2 gap-4 m-4 mt-12">
          {projects.map((projects) => (
            <ProjectCard
            key={projects.id}
            title={projects.title}
            description={projects.description}
          />
          ))}
          <div>
          <div className="bg-white/10 p-6 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl hover:bg-white/5 transition duration-300 cursor-pointer h-48 flex flex-col items-center justify-center gap-3">
            <i className="bi bi-plus-circle text-3xl"></i>

            <h2 className="text-3xl font-bold">New Project</h2>
          </div>
        </div>
      </div>
    </main>
  );
}