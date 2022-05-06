import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";
import components from "unplugin-vue-components/vite";
import i18n from "@intlify/vite-plugin-vue-i18n";
import esLint from "vite-plugin-eslint";
import autoImport from "unplugin-auto-import/vite";
import globPlugin from "vite-plugin-glob";
import svgLoader from "vite-svg-loader";
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        }
    },
    plugins: [
        components({
            dirs: ["./src/components", "./src/modules"],
            dts: "src/components.d.ts",
            deep: true
        }),
        globPlugin(),
        autoImport({
            imports: ["vue", "vue-router", "vue-i18n", "@vueuse/head", "@vueuse/core"],
            dts: "src/auto-imports.d.ts"
        }),
        vue(),
        svgLoader({
            defaultImport: "component"
        }),
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
                display: "standalone",
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
