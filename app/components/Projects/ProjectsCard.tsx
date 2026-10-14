type ProjectsCardProps = {
    title: string;
    description: string
};

export default function ProjectsCard({
    title,
    description,
}: ProjectsCardProps) {
    return (
        <div className="bg-white/10 p-6 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl hover:bg-white/5 transition duration-300 cursor-pointer">
            <h2 className="text-sm font-medium text-slate-300 dark:text-gray-500">
                {title}
            </h2>
            <p className="mt-2 text-3xl font-bold">
                {description}
            </p>
        </div>
    )
}
