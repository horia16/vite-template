import { RouteNames, RoutePaths } from "./types";
import { RouteRecordRaw } from "vue-router";
import ModuleView from "../index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        name: RouteNames.Home,
        path: RoutePaths.Home,
        component: ModuleView
    }
];

export default routes;
