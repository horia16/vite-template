<template>
    <ul class="flex flex-wrap items-center justify-center w-full gap-2 mt-6">
        <li v-for="item in techList" :key="item.name">
            <a
                :href="item.url"
                target="_blank"
                class="flex items-center justify-center w-full gap-1 px-6 py-2 text-lg font-semibold text-center rounded-md"
            >
                <img v-if="item.png" class="w-[30px] h-[30px] object-contain" :src="item.png" />
                <span v-if="item.svg" class="w-[30px] h-[30px]" v-html="item.svg" />
                <icon v-if="item.icon" :icon="item.icon" class="text-3xl" /> {{ item.name }}
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
        name: "Vite",
        icon: "vscode-icons:file-type-vite",
        url: "https://github.com/vitejs/vite"
    },
    {
        name: "Pinia",
        svg: PINIA_SVG,
        url: "https://github.com/vuejs/pinia"
    },
    {
        name: "VueUse",
        svg: VUE_USE_SVG,
        url: "https://github.com/vueuse/vueuse"
    },
    {
        name: "Vue i18n",
        png: VUE_I18N_PNG,
        url: "https://github.com/kazupon/vue-i18n"
    },
    {
        name: "Iconify",
        icon: "simple-icons:iconify",
        url: "https://github.com/iconify/iconify"
    }
];
</script>
