import Navigation from "@/components/Navigation";
import ThemeSwitch from "@/components/ThemeSwitch";
import Logo from "@/constants/icons/Logo";

function Header() {
    return (
        <div
            className="text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]">
            <nav className="flex flex-row items-center px-5 py-3 w-full">
                <Logo size="2rem" color="var(--logo-color)"/>
                <Navigation className="flex-1"/>
                <ThemeSwitch/>
            </nav>
        </div>
    );
}

export default Header;