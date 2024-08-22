// Locales
export type Locale = (typeof locales)[number];
export const locales: string[] = ['en', 'ko'];
export const localeLabels: { [key in Locale]: string } = {
    en: 'English',
    ko: '한국어',
};
export const defaultLocale: Locale = 'en';

// Contacts
export interface Contacts {
    linkedin: string;
    github: string;
    email: string;
}

export const contacts: Contacts = {
    "linkedin": "https://www.linkedin.com/in/ujon",
    "github": "https://github.com/ujon",
    "email": "ujon@gmail.com",
}