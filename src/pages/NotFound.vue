<template>
    <div class="flex flex-col items-center justify-center w-full h-screen text-5xl font-bold">
        <icon icon="quill:usersad" class="text-7xl" />

        <div>404 {{ t("not-found") }}</div>
    </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
</script>
