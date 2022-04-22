import { createRouter, createWebHashHistory } from "vue-router";
import middleware from "./middleware";

const routes = [
  {
    path: "/anasayfa",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
    beforeEnter: middleware.user
  },
  {
    path: "/randevularim",
    name: "Randevularim",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Randevularim.vue"),
    beforeEnter: middleware.user
  },
  {
    path: "/randevu-detay",
    name: "RandevuDetay",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RandevuDetay.vue"),
    beforeEnter: middleware.user
  },
  {
    path: "/randevu-empty",
    name: "RandevularEmpty",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RandevularEmpty.vue"),
    beforeEnter: middleware.user
  },
  {
    path: "/radyoloji",
    name: "Radyoloji",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/sections/tıbbi-kayitlar/Radyoloji.vue"
      ),
    beforeEnter: middleware.user
  },
  {
    path: "/diger",
    name: "Diger",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/sections/tıbbi-kayitlar/Diger.vue"
      ),
    beforeEnter: middleware.user
  },
  {
    path: "/receteler",
    name: "Receteler",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Receteler.vue"),
    beforeEnter: middleware.user
  },
  {
    path: "/randevu-akis",
    name: "RandevuAkis",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RandevuAkis.vue"),
    beforeEnter: middleware.user
  },
  {
    path: "/bildirimler-detay",
    name: "BildirimlerDetay",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BildirimlerDetay.vue"),
    beforeEnter: middleware.user
  },
  {
    path: "/profile-flow",
    name: "ProfilFlow",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/profil/Main.vue"),
    beforeEnter: middleware.user
  },
  {
    path: "/puan-flow",
    name: "PuanFlow",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/puan/Main.vue"),
    beforeEnter: middleware.user
  },
  {
    path: "/",
    name: "Giris",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Giris.vue"),
    beforeEnter: middleware.guest
  },

  {
    path: "/kayit",
    name: "Kayit",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Kayit.vue"),
    beforeEnter: middleware.guest
  },
  {
    path: "/playground",
    name: "Playground",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Playground.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  fallback: false
});

export default router;
