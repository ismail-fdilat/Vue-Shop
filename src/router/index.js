import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Orders from "../views/Orders.vue";
import { fb } from "../firebase.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: { requiresAuth: true },
    children: [
      { path: "orders", name: "Orders", component: Orders },
      { path: "products", name: "Products", component: Products },
      { path: "overview", name: "Overview", component: Overview }
    ]
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (fb.auth().currentUser) {
      next();
      console.log("ouiiiiiiiiiiiiiiiiii");
    } else {
      next("/");
      console.log("nonnnnnnnnnnnnnnnnnnnnnn");
    }
  } else {
    next(); // make sure to always call next()!
  }
});
export default router;
