import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import AddTodos from "../views/AddTodos";
import Edit from "../views/Edit";

const routes = [
  {
    path: "/",
    name: Home,
    component: Home,
  },
  {
    path: "/add",
    name: AddTodos,
    component: AddTodos,
  },
  {
    path: "/:id",
    name: "Edit",
    component: Edit,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
