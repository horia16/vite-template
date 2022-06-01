<template>
    <h3 v-t="'my-module.tech.desc'" class="text-xl font-bold text-center"></h3>
    <ul class="flex flex-wrap items-center justify-center w-full gap-2 mt-6">
        <li v-for="item in techList" :key="item.name">
            <a
                :href="`https://github.com/${item.url}`"
                target="_blank"
                class="flex items-center justify-center w-full gap-1 px-6 py-2 text-sm font-semibold text-center rounded-md"
            >
                <img v-if="item.png" class="w-[16px] h-[16px] object-contain" :src="item.png" />
                <span v-if="item.svg" class="w-[16px] h-[16px]" v-html="item.svg" />
                <icon v-if="item.icon" :icon="item.icon" class="text-base" /> {{ item.name }}
            </a>
        </li>
    </ul>
</template>
<script setup lang="ts">
import VUE_USE_SVG from "@/modules/my-module/assets/svgs/vue-use.svg?raw";
import PINIA_SVG from "@/modules/my-module/assets/svgs/pinia.svg?raw";
import VUE_I18N_PNG from "@/modules/my-module/assets/pngs/vue-i18n.png";

type ListItem = {
    name: string;
    icon?: string;
    svg?: string;
    png?: string;
    url?: string;
};
const techList: Array<ListItem> = [
    {
        name: "Vue",
        icon: "vscode-icons:file-type-vue",
        url: "vuejs/core"
    },
    {
        name: "Vue Router",
        icon: "vscode-icons:file-type-vue",
        url: "vuejs/router"
    },
    {
        name: "Vite",
        icon: "vscode-icons:file-type-vite",
        url: "vitejs/vite"
    },
    {
        name: "Pinia",
        svg: PINIA_SVG,
        url: "vuejs/pinia"
    },
    {
        name: "VueUse",
        icon: "logos:vueuse",
        url: "vueuse/vueuse"
    },
    {
        name: "Vue i18n",
        png: VUE_I18N_PNG,
        url: "kazupon/vue-i18n"
    },
    {
        name: "Tailwind",
        icon: "logos:tailwindcss-icon",
        url: "tailwindlabs/tailwindcss"
    },
    {
        name: "Iconify",
        icon: "simple-icons:iconify",
        url: "iconify/iconify"
    },
    {
        name: "NProgress",
        icon: "carbon:progress-bar",
        url: "rstacruz/nprogress"
    }
];
</script>
