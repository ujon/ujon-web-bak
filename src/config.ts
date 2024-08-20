export type Locale = (typeof locales)[number];

export const locales: string[] = ['en', 'ko'];
export const localeLabels: { [key in Locale]: string } = {
    en: 'English',
    ko: '한국어',
};
export const defaultLocale: Locale = 'en';
