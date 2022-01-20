import { createRouter, createWebHashHistory } from "vue-router";
import Pokemones from "../views/Pokemones.vue";
import Favoritos from "../views/Favoritos.vue";
import Inicio from "../views/Inicio.vue";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/pokemones",
    name: "Pokemones",
    component: Pokemones,
  },
  {
    path: "/favoritos",
    name: "Favoritos",
    component: Favoritos,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
