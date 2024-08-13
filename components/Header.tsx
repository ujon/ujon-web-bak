import Navigation from "@/components/Navigation";
import ThemeSwitch from "@/components/ThemeSwitch";
import Logo from "@/constants/icons/Logo";
import Link from "next/link";

function Header() {
    return (
        <div
            className="header-h text-base-content sticky top-0 z-30 flex h-16 justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">
            <nav className="flex flex-row items-center px-5 py-3 max-w-screen-xl mx-auto w-full">
                <Link href="/">
                    <Logo size="2rem" color="var(--logo-color)"/>
                </Link>
                <Navigation className="flex-1"/>
                <ThemeSwitch/>
            </nav>
        </div>
    );
}

export default Header;