import { RouteNames, RoutePaths } from "./types";
import { RouteRecordRaw } from "vue-router";
import NotFound from "../pages/NotFound.vue";
const moduleRoutes = Object.entries(import.meta.globEager("../modules/*/routes/index.ts")).map(([, value]) => {
    return value.default;
});

let routes: Array<RouteRecordRaw> = [
    {
        name: RouteNames.NotFound,
        path: RoutePaths.NotFound,
        component: NotFound
    }
];

moduleRoutes.forEach((routeArray: Array<RouteRecordRaw>) => {
    routes = [...routes, ...routeArray];
});

export default routes;
