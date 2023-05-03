// src/router/routes.js
const login = () => import("../page/login/index.vue");
const guitarTrainer = () => import("../page/guitarTrainer/index.vue");
const Page404 = () => import("/@/components/Page404.vue");

const routes = [
  { path: "/", redirect: "/guitarTrainer" },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/guitarTrainer",
    name: "guitarTrainer",
    component: guitarTrainer,
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: Page404
  }
];
export default routes;
