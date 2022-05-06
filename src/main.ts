import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./css/index.css";
import i18n from "./locales";

createApp(App).use(router).use(i18n).use(createPinia()).mount("#app");
