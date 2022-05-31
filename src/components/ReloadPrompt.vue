<template>
    <card v-if="offlineReady || needRefresh" class="fixed top-2 right-2" role="alert">
        <div class="mb-4">
            <span v-if="offlineReady" v-t="`reload-prompt.offline-ready`"></span>
            <span v-else v-t="`reload-prompt.new-content`"></span>
        </div>
        <div class="flex gap-4">
            <app-button v-if="needRefresh" v-t="`reload`" @click="updateServiceWorker()" />
            <app-button v-t="`close`" @click="close" />
        </div>
    </card>
</template>

<script setup lang="ts">
import { useRegisterSW } from "virtual:pwa-register/vue";

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

const close = async () => {
    offlineReady.value = false;
    needRefresh.value = false;
};
</script>
