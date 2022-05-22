<template>
    <div class="my-4 text-center">
        <button
            class="px-6 py-2 transition border rounded hover:bg-slate-600 bg-slate-700 active:bg-slate-500"
            @click="store.increment"
        >
            Count: {{ store.count }}
        </button>
    </div>
</template>
<script setup lang="ts">
import { useMyModuleStore } from "../store";
const store = useMyModuleStore();
</script>
