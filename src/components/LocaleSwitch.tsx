'use client';

import {Locale} from '@/config';
import {setUserLocale} from '@/services/locale';


export interface LocaleItem {
    locale: Locale;
    label: string;
}

type Props = {
    currentLocale: Locale;
    availableLocales: LocaleItem[];
};

export default function LocaleSwitch({currentLocale, availableLocales}: Props) {
    async function onChange(value: string) {
        const locale: Locale = value;
        await setUserLocale(locale);
    }

    return (
        <details className="dropdown dropdown-end">
            <summary className="btn btn-ghost hover:text-primary">
                <svg
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    className="swap-off h-6 w-6 text-current stroke-current"
                    aria-labelledby="languageIconTitle"
                    stroke="#000000"
                    color="#000000"
                    strokeWidth={2}
                    fill="none"
                >
                    <title id="languageIconTitle">Language</title>
                    <circle cx="12" cy="12" r="10"/>
                    <path strokeLinecap="round"
                          d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"
                    />
                    <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"/>
                </svg>
            </summary>
            <ul className="dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
                {availableLocales.map((it) => (
                    <li
                        key={it.locale}
                        value={it.locale}
                        onClick={() => onChange(it.locale)}
                        className={`btn flex ${it.locale == currentLocale ? "btn-primary" : "btn-ghost"}`}
                    >
                        {it.label}
                    </li>
                ))}
            </ul>
        </details>
    );
}