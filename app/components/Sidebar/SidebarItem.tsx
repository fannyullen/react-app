"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItemProps = {
    label: string;
    href: string;
};

export default function SidebarItem({
    label,
    href,
}: SidebarItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return(
        <li>
            <Link
            href={href}
            className={`block rounded-md p-2 transition-colors ${
                isActive
                ? "bg-slate-800 text-white"
                : "hover:bg-slate-200"
            }`}
            >
            {label}
            </Link>
        </li>
    );
}