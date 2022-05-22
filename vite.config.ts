import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import { VitePWA as vitePwa } from "vite-plugin-pwa";
import components from "unplugin-vue-components/vite";
import esLint from "vite-plugin-eslint";
import autoImport from "unplugin-auto-import/vite";
import globPlugin from "vite-plugin-glob";
import svgLoader from "vite-svg-loader";
import content from "@originjs/vite-plugin-content";
export default defineConfig({
    resolve: {
        alias: {
            // Alias for the source folder
            "@": resolve(__dirname, "./src")
        }
    },
    plugins: [
        // Allows us to easily import yaml, xml, xlsx, ini, toml, csv, plist and properties as ES module files. See https://github.com/originjs/origin.js/tree/main/packages/vite-plugin-content
        content(),

        // Auto load components on demand with full typescript support. See https://github.com/antfu/unplugin-vue-components
        components({
            dirs: ["./src/components", "./src/modules"],
            dts: "src/components.d.ts",
            deep: true,
            resolvers: [
                // Iconify resolver
                (componentName) => {
                    if (componentName === "Icon") return { name: "Icon", from: "@iconify/vue" };
                }
            ]
        }),

        // Allows us to auto import modules form a specific directory. See https://github.com/antfu/vite-plugin-glob
        globPlugin(),

        // Auto load libraies on demand with full typescript support. See https://github.com/antfu/unplugin-auto-import
        autoImport({
            imports: ["vue", "vue-router", "vue-i18n", "@vueuse/head", "@vueuse/core"],
            dts: "src/auto-imports.d.ts"
        }),
        vue(),

        // Allow importing svgs as strings/Vue components. See https://github.com/jpkleemans/vite-svg-loader
        svgLoader({
            defaultImport: "component"
        }),

        //Show es lint errors within the vite error screen.  See https://github.com/gxmari007/vite-plugin-eslint
        esLint(),

        // Plugin that generates the necessary files/workers for PWA Support. See https://github.com/antfu/vite-plugin-pwa
        vitePwa({
            registerType: "autoUpdate",
            includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
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
