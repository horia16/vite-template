<template>
    <div class="flex flex-col items-center justify-center w-full h-screen">
        <project-logo class="w-48 h-48" />
        <p v-t="'my-other-module.desc'"></p>
        <p v-t="'my-other-module.secondary-desc'"></p>
    </div>
</template>
<script setup lang="ts">
import ProjectLogo from "@/assets/project-logo.svg";
</script>
