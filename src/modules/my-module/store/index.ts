import { defineStore } from "pinia";

export const useMyModuleStore = defineStore("my-module", {
    state: () => ({ count: 0 }),
    actions: {
        increment() {
            this.count++;
        }
    }
});
