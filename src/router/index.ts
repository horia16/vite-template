import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import NProgress from "nprogress";

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from) => {
    if (to.path !== from.path) NProgress.start();
});
router.afterEach(() => {
    NProgress.done();
});

export default router;
