import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";
import i18n from "@intlify/vite-plugin-vue-i18n";
import esLint from "vite-plugin-eslint";
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
            "vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js"
        }
    },
    plugins: [
        vue(),
        esLint(),
        i18n({
            runtimeOnly: true,
            compositionOnly: true,
            include: [resolve(__dirname, "locales/**")]
        }),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
            manifest: {
                name: "Vite Stack",
                short_name: "Vite Stack",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "/pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png"
                    },
                    {
                        src: "/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable"
                    }
                ]
            }
        })
    ]
});
