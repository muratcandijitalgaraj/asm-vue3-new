import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/anasayfa",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
  },
  {
    path: "/randevularim",
    name: "Randevularim",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Randevularim.vue"),
  },
  {
    path: "/randevu-detay",
    name: "RandevuDetay",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RandevuDetay.vue"),
  },
  {
    path: "/randevu-empty",
    name: "RandevularEmpty",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RandevularEmpty.vue"),
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
  },
  {
    path: "/receteler",
    name: "Receteler",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Receteler.vue"),
  },
  {
    path: "/randevu-akis",
    name: "RandevuAkis",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RandevuAkis.vue"),
  },
  {
    path: "/bildirimler-detay",
    name: "BildirimlerDetay",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BildirimlerDetay.vue"),
  },
  {
    path: "/profile-flow",
    name: "ProfilFlow",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/profil/Main.vue"),
  },
  {
    path: "/puan-flow",
    name: "PuanFlow",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/puan/Main.vue"),
  },
  {
    path: "/",
    name: "Giris",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Giris.vue"),
  },
  {
    path: "/kayit",
    name: "Kayit",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Kayit.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
