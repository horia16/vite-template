<template>
    <div class="my-4 text-center">
        <app-button @click="store.increment">Count: {{ store.count }}</app-button>
    </div>
</template>
<script setup lang="ts">
import { useMyModuleStore } from "../store";
const store = useMyModuleStore();
</script>
