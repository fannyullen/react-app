type ProjectCardProps = {
    title: string;
    description: string;
};

export default function ProjectCard({
    title,
    description,
}: ProjectCardProps) {
    return (
        <div className="bg-white/10 p-6 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl hover:bg-white/5 transition duration-300 cursor-pointer h-48">
            <h2 className="text-3xl font-bold text-white">
                {title}
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-300 dark:text-gray-500">
                {description}
            </p>
        </div>
    )
}
