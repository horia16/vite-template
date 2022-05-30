# Plugins folder

The plugins from this folder are auto loaded in the `main.ts` file

Each plugin inside this folder must follow this pattern:

```ts
function myAmazingPlugin(app, options) {
    // configure the app
}

// Options are not necessary for user created plugins but you might want to pass custom options for other plugins since options are loaded as a second parameter on app.use()
const options = [];

export default {
    installer: myAmazingPlugin,
    options
};
```
