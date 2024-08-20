import Navigation from "@/components/Navigation";
import ThemeSwitch from "@/components/ThemeSwitch";
import Logo from "@/constants/icons/Logo";
import Link from "next/link";
import LocaleSwitch, {LocaleItem} from "@/components/LocaleSwitch";
import {Locale, localeLabels, locales} from "@/config";
import {getUserLocale} from "@/services/locale";

async function Header() {
    const currentLocale = await getUserLocale();
    const localeSwitchItems: LocaleItem[] = locales.map((locale: Locale): LocaleItem => {
        return {locale: locale, label: localeLabels[locale]}
    })

    return (
        <div
            className="header-h text-base-content sticky top-0 z-30 flex h-16 justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]"
        >
            <nav className="flex flex-row items-center px-5 py-3 max-w-screen-xl mx-auto w-full">
                <Link href="#">
                    <Logo size="2rem" color="var(--logo-color)"/>
                </Link>
                <Navigation className="flex-1"/>
                <ThemeSwitch/>
                <LocaleSwitch
                    currentLocale={currentLocale}
                    availableLocales={localeSwitchItems}
                />
            </nav>
        </div>
    );
}

export default Header;