<template>
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
            <a class="ml-1 underline" href="https://github.com/antfu/vitesse" target="_blank">Vitesse</a>.
        </h2>
        <div class="flex items-center justify-center">
            <router-link to="/about" class="flex items-center justify-center gap-2 p-2">
                <span v-t="'my-module.next-module'"></span> <icon icon="carbon:next-filled" />
            </router-link>
        </div>
    </div>
    <div class="mx-auto mt-12">
        <h3 v-t="'my-module.tech.desc'" class="text-2xl font-bold text-center"></h3>
        <tech-list />
    </div>
</template>
<script setup lang="ts">
import ProjectLogo from "@/assets/project-logo.svg";
import DoggoLogo from "@/assets/doggo-logo.svg";
</script>
