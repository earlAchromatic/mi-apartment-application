import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "",
    component: () => import("../components/ApplicationForm.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/steps/PersonalDemo.vue"),
      },
      {
        path: "/steps/seat",
        component: () => import("../views/steps/SeatDemo.vue"),
      },
      {
        path: "/steps/payment",
        component: () => import("../views/steps/PaymentDemo.vue"),
      },
      {
        path: "/steps/confirmation",
        component: () => import("../views/steps/ConfirmationDemo.vue"),
      },
    ],
  },
];

const history = createWebHistory();

export default createRouter({ history, routes });
