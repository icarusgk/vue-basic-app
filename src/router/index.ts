import { createRouter, createWebHistory } from "vue-router";

 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Timer.vue"),
    }, 
    {
      path: "/statistics",
      name: "statistics",
      component: () => import("../views/Statistics.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue")
    }
  ],
});

export default router;
