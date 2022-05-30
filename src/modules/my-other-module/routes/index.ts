import { RouteNames, RoutePaths } from "./types";
import { RouteRecordRaw } from "vue-router";

const ModuleView = () => import("../index.vue");

const routes: Array<RouteRecordRaw> = [
    {
        name: RouteNames.About,
        path: RoutePaths.About,
        component: ModuleView
    }
];

export default routes;
