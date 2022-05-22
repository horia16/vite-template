<template>
    <card class="mx-auto mt-12">
        <project-logo class="w-48 h-48" />
        <h1 v-t="'my-module.intro'" class="mt-12 text-2xl font-bold text-center text-gray-300"></h1>
        <counter />
        <h2 class="text-lg text-center">
            <span v-t="'my-module.desc'"></span>
            <a class="ml-1 underline" href="https://github.com/antfu/vitesse" target="_blank">Vitesse</a>.
        </h2>
    </card>
    <card class="mx-auto mt-12">
        <h3 v-t="'my-module.tech.desc'" class="text-2xl font-bold text-center text-gray-300"></h3>
        <tech-list />
    </card>
</template>
<script setup lang="ts">
import ProjectLogo from "@/assets/project-logo.svg";
</script>
