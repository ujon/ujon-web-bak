"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

interface Tab {
    name: string;
    path: string;
}

const tabs: Tab[] = [
    {name: "Home", path: "/"},
    {name: "Blog", path: "/blog"},
    {name: "About", path: "/about"},
]

function Navigation({className}: { className?: string }) {
    const pathname = usePathname();

    return (
        <div role="tablist" className={`tabs justify-start ${className}`}>
            {tabs.map(({name, path}) => {
                const isActive = path === "/" ? pathname === path : pathname.startsWith(path);
                const tabClassName = `tab ${isActive ? "tab-active" : ""} hover:text-primary`;

                return (
                    <Link
                        key={`nav-${name}`}
                        role="tab"
                        className={tabClassName}
                        href={path}
                    >
                        {name}
                    </Link>
                );
            })}
        </div>
    );
}

export default Navigation;