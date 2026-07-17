import Link from "next/link";

type SidebarItemProps = {
    label: string;
    href: string;
};

export default function SidebarItem({
    label,
    href,
}: SidebarItemProps) {
    return(
        <li>
            <Link
            href={href}
            className="block rounded-md p-2 transition-colors hover:bg-slate-200"
            >
            {label}
            </Link>
        </li>
    );
}