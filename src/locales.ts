import { createI18n } from "vue-i18n";

const messages = Object.fromEntries(
    Object.entries(import.meta.globEager("../locales/*.y(a)?ml")).map(([key, value]) => {
        const yaml = key.endsWith(".yaml");
        const reducedKey = key.slice(11, yaml ? -5 : -4);
        return [reducedKey, value.default];
    })
);

const i18n = createI18n({
    locale: "en",
    messages
});

export default i18n;
