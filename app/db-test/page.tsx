import { prisma } from "@/lib/prisma";

export default async function DatabaseTestPage() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Mina projekt från PostgreSQL
      </h1>

      {projects.length === 0 ? (
        <p>Det finns inga projekt i databasen ännu.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border p-5"
            >
              <h2 className="text-xl font-semibold">
                {project.title}
              </h2>

              <p className="mt-2">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-gray-500">
                Skapat:{" "}
                {project.createdAt.toLocaleDateString("sv-SE")}
              </p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}