<template>
    <div class="text-center">
        <h3 v-t="'my-module.editor.editor-setup'" class="mt-12 text-xl font-bold"></h3>
        <h4 v-t="'my-module.editor.preferred-editor'" class="mt-2 font-bold"></h4>
        <p v-t="'my-module.editor.plugins-desc'" class="mt-4"></p>
        <div class="flex flex-wrap max-w-lg mx-auto mt-4 overflow-hidden">
            <a
                v-for="extension in extensions"
                :key="extension.url"
                :href="`https://marketplace.visualstudio.com/items?itemName=${extension.url}`"
                target="_blank"
                class="flex items-center justify-center w-[calc(33.3333%-1rem)] p-1 m-2 overflow-hidden text-xs font-bold border"
            >
                <span class="">{{ extension.name }}</span>
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
const extensions = [
    {
        name: "Better Comments",
        url: "aaron-bond.better-comments"
    },
    {
        name: "Code Spell Checker",
        url: "streetsidesoftware.code-spell-checker"
    },
    {
        name: "ESLint",
        url: "dbaeumer.vscode-eslint"
    },
    {
        name: "Headwind",
        url: "heybourn.headwind"
    },
    {
        name: "Iconify IntelliSense",
        url: "antfu.iconify"
    },
    {
        name: "Markdownlint",
        url: "DavidAnson.vscode-markdownlint"
    },
    {
        name: "Path Intellisense",
        url: "christian-kohler.path-intellisense"
    },
    {
        name: "Prettier",
        url: "esbenp.prettier-vscode"
    },
    {
        name: "Project Manager",
        url: "alefragnani.project-manager"
    },
    {
        name: "Stylelint",
        url: "stylelint.vscode-stylelint"
    },
    {
        name: "Tabnine",
        url: "TabNine.tabnine-vscode"
    },
    {
        name: "Tailwind CSS IntelliSense",
        url: "bradlc.vscode-tailwindcss"
    },
    {
        name: "Volar",
        url: "Vue.volar"
    },
    {
        name: "XML",
        url: "redhat.vscode-xml"
    },
    {
        name: "YAML",
        url: "redhat.vscode-yaml"
    }
];
</script>
