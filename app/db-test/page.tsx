import { prisma } from "@/lib/prisma";
import { createProject } from "./actions";

type DatabaseTestPageProps = {
  searchParams: Promise<{
    created?: string;
    error?: string;
  }>;
};

export default async function DatabaseTestPage({
  searchParams,
}: DatabaseTestPageProps) {
  const params = await searchParams;

  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen p-8">
      <h1 className="mb-8 text-3xl font-bold">
        My projects
      </h1>

      {/* Formulär för att skapa projekt */}
      <section className="mb-10 max-w-xl rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Add project
        </h2>

        {params.created === "1" && (
          <p className="mb-4 text-green-600">
            The project has been saved!
          </p>
        )}

        {params.error === "title" && (
          <p className="mb-4 text-red-600">
            Ange en titel på högst 100 tecken.
          </p>
        )}

        {params.error === "description" && (
          <p className="mb-4 text-red-600">
            Beskrivningen får vara högst 2 000 tecken.
          </p>
        )}

        <form action={createProject} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="mb-1 block font-medium"
            >
              Project title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              required
              maxLength={100}
              className="w-full rounded-lg border p-3"
              placeholder="Example My Portfolio"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-1 block font-medium"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              rows={4}
              maxLength={2000}
              className="w-full rounded-lg border p-3"
              placeholder="Describe the project..."
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-3
              font-medium text-white transition hover:bg-blue-700"
          >
            Save project
          </button>
        </form>
      </section>

      {/* Projektlista från PostgreSQL */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">
          Saved projects
        </h2>

        {projects.length === 0 ? (
          <p>Det finns inga projekt ännu.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-xl border p-5"
              >
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-2 whitespace-pre-wrap">
                  {project.description || "Ingen beskrivning."}
                </p>

                <p className="mt-4 text-sm text-gray-500">
                  Skapat:{" "}
                  {project.createdAt.toLocaleDateString("sv-SE")}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}