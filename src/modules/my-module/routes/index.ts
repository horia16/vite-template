import { RouteNames, RoutePaths } from "./types";
import { RouteRecordRaw } from "vue-router";
const ModuleView = () => import("../index.vue");

const routes: Array<RouteRecordRaw> = [
    {
        name: RouteNames.Home,
        path: RoutePaths.Home,
        component: ModuleView
    }
];

export default routes;
