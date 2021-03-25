import Vue from "vue"
import VueRouter from "vue-router"
import PersonalInfo from "../views/PersonalInfo"

Vue.use(VueRouter)

const routes = [
  {
    path: "/personal-info",
    name: "PersonalInfo",
    component: PersonalInfo,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  { path: "*", redirect: "/personal-info" },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
