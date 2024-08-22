import {getRequestConfig} from 'next-intl/server';
import {getUserLocale} from "@/services/locale";

export default getRequestConfig(async () => {
    const locale = await getUserLocale();

    return {
        locale,
        messages: (await import(`./constants/messages/${locale}.json`)).default
    };
});