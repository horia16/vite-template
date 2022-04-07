import { RouteRecordRaw } from "vue-router";
import HomePage from "@/pages/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        name: "HomePage",
        path: "/",
        component: HomePage
    }
];

export default routes;
