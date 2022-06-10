# Vite Modular Template

This is yet another opinionated Vite template that aims to help developers with creating Vue applications.

## The how and why

This template was originally created for personal projects and is heavily inspired by the another popular template called [Vitesse](https://github.com/antfu/vitesse).

This template is designed using a modular approach for splitting large applications into smaller self-contained parts resulting in a lot less clutter and easier readability on the long run.

## Installation

You can install this template using degit or [create a repo from it on github](https://github.com/horia16/vite-template/generate).

```bash
npx degit horia16/vite-template vite-app-name
cd vite-app-name
npm i
```

## Features

- Vue 3, Vite 2, Typescript
- Modular system with automatic route loading
- Auto import components via [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components)
- Auto importing for APIs via [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import)
- Auto importing plugins
- Pinia
- Tailwind CSS
- PWA via [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa)
- I18n
- Vitest
- Nprogress

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the favicon in `public`
- [ ] Clean up the READMEs and remove routes/modules/composables

