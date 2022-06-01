<template>
    <div class="flex items-center justify-center pt-10">
        <doggo-logo />
    </div>
    <div>
        <h1 v-t="'my-module.intro'" class="mt-12 text-4xl font-bold text-center text-black font-caveat"></h1>
    </div>
    <counter />
    <card class="mx-auto mt-12">
        <h2 class="text-lg text-center">
            <span v-t="'my-module.desc'"></span>
            <a class="ml-1 underline" href="https://github.com/antfu/vitesse" target="_blank">Vitesse</a>.
        </h2>
        <router-link to="/about" class="flex items-center justify-center gap-2 p-2 mt-4 border rounded"
            ><span v-t="'my-module.next-module'"></span> <icon icon="carbon:next-filled"
        /></router-link>
    </card>
    <card class="mx-auto mt-12">
        <h3 v-t="'my-module.tech.desc'" class="text-2xl font-bold text-center text-gray-300"></h3>
        <tech-list />
    </card>
</template>
<script setup lang="ts">
import ProjectLogo from "@/assets/project-logo.svg";
import DoggoLogo from "@/assets/doggo-logo.svg";
</script>
