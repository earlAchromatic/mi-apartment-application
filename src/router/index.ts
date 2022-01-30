import {
  createRouter,
  createWebHistory,
  RouterScrollBehavior,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
  },
  { path: "/about", component: () => import("../views/About.vue") },
  { path: "/FAQ", component: () => import("../views/FAQ.vue") },
  {
    path: "/screen",
    component: () => import("../views/PreScreen.vue"),
  },
  {
    path: "/:catchAll(.*)/thanks",
    name: "success",
    component: () => import("../components/SubmissionSuccess.vue"),
  },
  {
    path: "/404",
    name: "fail",
    component: () => import("../components/SubmissionFail.vue"),
  },
  {
    path: "/:id/screen",
    component: () => import("../views/PreScreen.vue"),
  },
  // {
  //   path: "/:id/application",
  //   component: () => import("../components/ApplicationForm.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("../views/application/PersonalInfo.vue"),
  //     },
  //     {
  //       path: "/:id/application/EmploymentHistory",
  //       component: () => import("../views/application/EmploymentHistory.vue"),
  //     },
  //     {
  //       path: "/:id/application/RentalHistory",
  //       component: () => import("../views/application/RentalHistory.vue"),
  //     },
  //     {
  //       path: "/:id/application/confirmation",
  //       component: () => import("../views/application/Confirmation.vue"),
  //     },
  //   ],
  // },
];

const history = createWebHistory();
const scrollBehavior: RouterScrollBehavior = () => {
  return { top: 0 };
};

const router = createRouter({ history, routes, scrollBehavior });

export default router;
