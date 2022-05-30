import { createI18n, LocaleMessages, VueMessageType } from "vue-i18n";

/**
 * Extracts the names and locales from a specified path.
 */
function extractNameAndLocale(path: string, isModule = false) {
    const array = path.split("/");
    if (array.length !== (isModule ? 6 : 4)) throw new Error(`Locale has a non-standard path: ${path}`);
    const name = isModule ? array[3] : "";
    const locale = array[isModule ? 5 : 3].slice(0, -5);
    return {
        name,
        locale
    };
}
/**
 * Parse the imports form Vite's globEager
 */
function parseLocales(
    locales: Array<[key: string, value: { default: LocaleMessages<VueMessageType> }]>,
    isModule = false
) {
    return locales.map(([key, value]) => {
        const { name, locale } = extractNameAndLocale(key, isModule);
        return { module: name, localeName: locale, data: value.default };
    });
}

const rootLocales = parseLocales(Object.entries(import.meta.globEager("../../locales/*.yaml")));

const moduleLocales = parseLocales(Object.entries(import.meta.globEager("../../modules/*/locales/*.yaml")), true);

const messages: LocaleMessages<VueMessageType> = {};

// Loop through both, the module locales and root locales and save them to the messages object
moduleLocales.forEach((locale) => {
    if (messages[locale.localeName] === undefined) messages[locale.localeName] = {};
    (messages[locale.localeName] as LocaleMessages<VueMessageType>)[locale.module] = locale.data;
});
rootLocales.forEach((locale) => {
    if (messages[locale.localeName] === undefined) messages[locale.localeName] = {};
    messages[locale.localeName] = {
        ...(messages[locale.localeName] as LocaleMessages<VueMessageType>),
        ...locale.data
    };
});

const i18n = createI18n({
    locale: "en",
    messages
});

export default {
    installer: i18n
};
