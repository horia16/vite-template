import { createI18n } from "vue-i18n";

function extractNameAndLocale(path: string, isModule = false) {
    const array = path.split("/");
    if (!isModule) {
        if (array.length !== 3) throw new Error(`Locale has a non-standard path: ${path}`);
        const locale = array[2].slice(0, -5);
        return {
            name: "ROOT",
            locale
        };
    }
    if (array.length !== 5) throw new Error(`Module has a non-standard path: ${path}`);
    const name = array[2];
    const locale = array[4].slice(0, -5);

    return {
        name,
        locale
    };
}

function parseLocales(locales: Array<[key: string, value: { default: Record<string, any> }]>, isModule = false) {
    return locales.map(([key, value]) => {
        const { name, locale } = extractNameAndLocale(key, isModule);
        return { module: name, localeName: locale, data: value.default };
    });
}
const rootLocales = parseLocales(Object.entries(import.meta.globEager("./locales/*.yaml")));
const moduleLocales = parseLocales(Object.entries(import.meta.globEager("./modules/*/locales/*.yaml")), true);

const messages: Record<string, any> = {};

moduleLocales.forEach((locale) => {
    if (messages[locale.localeName] === undefined) messages[locale.localeName] = {};
    messages[locale.localeName][locale.module] = locale.data;
});

rootLocales.forEach((locale) => {
    if (messages[locale.localeName] === undefined) messages[locale.localeName] = {};
    messages[locale.localeName] = { ...messages[locale.localeName], ...locale.data };
});

const i18n = createI18n({
    locale: "en",
    messages
});

export default i18n;
