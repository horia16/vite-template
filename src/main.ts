import { createPinia } from "pinia";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./modules/router";
import "./css/index.css";

const messages = Object.fromEntries(
    Object.entries(import.meta.globEager("../locales/*.y(a)?ml")).map(([key, value]) => {
        const yaml = key.endsWith(".yaml");
        const reducedKey = key.slice(11, yaml ? -5 : -4);
        return [reducedKey, value.default];
    })
);
const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages
});

createApp(App).use(router).use(i18n).use(createPinia()).mount("#app");
