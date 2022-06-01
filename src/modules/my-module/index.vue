<template>
    <div class="flex items-center justify-center pt-4 text-xl">
        <a v-for="link in topLinks" :key="link.label" :title="link.label" :href="link.href" target="_blank">
            <icon :icon="link.icon" />
        </a>
    </div>
    <div class="flex items-center justify-center pt-10">
        <project-logo class="w-48 h0-48" />
    </div>
    <div>
        <h1 v-t="'my-module.intro'" class="mt-12 text-4xl font-bold text-center"></h1>
    </div>
    <counter />
    <div class="mx-auto mt-12">
        <h2 class="text-lg text-center">
            <span v-t="'my-module.desc'"></span>
        </h2>
        <div class="flex items-center justify-center mt-2">
            <router-link to="/about" class="flex items-center justify-center gap-2 p-2">
                <span v-t="'my-module.next-module'"></span> <icon icon="carbon:next-filled" />
            </router-link>
        </div>
    </div>
    <div class="mx-auto mt-12">
        <tech-list />
        <editor-setup />
    </div>
</template>
<script setup lang="ts">
import ProjectLogo from "@/assets/project-logo.svg";

const topLinks = [
    {
        label: "Github",
        href: "https://github.com/horia16/vite-template",
        icon: "carbon-logo-github"
    }
];
</script>
