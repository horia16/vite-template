<template>
    <div class="flex mx-auto flex-col max-w-5xl items-center py-12">
        <project-logo class="w-48 h-48" />
        <hello-world class="mt-12" />
        <h2 class="text-lg"><span v-t="`modules.myModule.desc`"></span> <a class="underline" href="https://github.com/antfu/vitesse" target="_blank">Vitesse</a>.</h2>
        <h3 v-t="`modules.myModule.tech.desc`"  class="text-lg mt-4"></h3>
    </div>
</template>
<script setup lang="ts">
import ProjectLogo from "@/assets/project-logo.svg";
</script>
