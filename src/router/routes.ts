import { RouteNames, RoutePaths } from "./types";
import { RouteRecordRaw } from "vue-router";
import NotFound from "../pages/NotFound.vue";

const moduleRoutes: Array<Array<RouteRecordRaw>> = Object.values(
    import.meta.globEager("../modules/*/routes/index.ts")
).map((module) => {
    return module.default;
});

let routes: Array<RouteRecordRaw> = [
    {
        name: RouteNames.NotFound,
        path: RoutePaths.NotFound,
        component: NotFound
    }
];

moduleRoutes.forEach((routeArray) => {
    routes = [...routes, ...routeArray];
});

export default routes;
