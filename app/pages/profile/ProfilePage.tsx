
export default function ProfilePage() {
  return (
    <main className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Min profil
        </h1>
        <p className="mt-2 text-slate-500">
          Hantera din personliga information.
        </p>
      </div>

      <section className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-2xl font-bold text-violet-700 dark:bg-violet-950 dark:text-violet-300">
            DU
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Ditt namn
            </h2>
            <p className="text-sm text-slate-500">
              Medlem sedan idag
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Namn
            </label>
            <input
              type="text"
              defaultValue="Ditt namn"
              className="w-full rounded-lg border border-slate-300 bg-transparent p-3 dark:border-slate-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              E-postadress
            </label>
            <input
              type="email"
              defaultValue="du@example.com"
              className="w-full rounded-lg border border-slate-300 bg-transparent p-3 dark:border-slate-700"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Om mig
            </label>
            <textarea
              rows={4}
              placeholder="Berätta lite om dig själv..."
              className="w-full rounded-lg border border-slate-300 bg-transparent p-3 dark:border-slate-700"
            />
          </div>

          <button
            type="button"
            className="rounded-lg bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700"
          >
            Spara ändringar
          </button>
        </div>
      </section>
    </main>
  );
}
