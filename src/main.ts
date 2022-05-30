import { createPinia } from "pinia";
import { createApp, Plugin } from "vue";
import App from "./App.vue";
import router from "./router";
import "./css/index.css";

const plugins: Array<{ installer: Plugin; options: undefined | Array<any> }> = Object.values(
    import.meta.globEager("./plugins/*/index.ts")
).map((plugin) => plugin.default);

const app = createApp(App);
app.use(router).use(createPinia());

plugins.forEach((plugin) => {
    app.use(plugin.installer, plugin.options);
});

app.mount("#app");
