import {
  createRouter,
  createWebHistory,
  RouterScrollBehavior,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from 'vue-router';
const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/Home.vue'),
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../views/About.vue'),
  },
  {
    name: 'maintenance',
    path: '/maintenance',
    component: () => import('../views/Maintenance.vue'),
  },
  { name: 'faq', path: '/FAQ', component: () => import('../views/FAQ.vue') },
  {
    name: 'screen',
    path: '/screen',
    component: () => import('../views/PreScreen.vue'),
  },
  {
    path: '/maintenance-request-submitted',
    name: 'maintenance-request-submitted',
    component: () => import('../components/MaintenanceSubmissionSuccess.vue'),
  },
  {
    path: '/:catchAll(.*)/application-submitted',
    name: 'application-submitted',
    component: () => import('../components/ApplicationSubmissionSuccess.vue'),
  },
  {
    path: '/:catchAll(.*)/thanks',
    name: 'success',
    component: () => import('../components/SubmissionSuccess.vue'),
  },
  {
    path: '/:catchAll(.*)/404',
    name: 'fail',
    component: () => import('../components/SubmissionFail.vue'),
  },
  {
    name: 'screen',
    path: '/:id/screen',
    component: () => import('../views/PreScreen.vue'),
  },
  {
    name: 'application',
    path: '/:id/application',
    component: () => import('../components/ApplicationForm.vue'),
    children: [
      {
        name: 'personal info',
        path: '',
        component: () => import('../views/application/PersonalInfo.vue'),
      },
      {
        name: 'employment history',
        path: '/:id/application/EmploymentHistory',
        component: () => import('../views/application/EmploymentHistory.vue'),
      },
      {
        name: 'rental history',
        path: '/:id/application/RentalHistory',
        component: () => import('../views/application/RentalHistory.vue'),
      },
      {
        name: 'other info',
        path: '/:id/application/Other',
        component: () => import('../views/application/Other.vue'),
      },
      {
        name: 'confirmation',
        path: '/:id/application/confirmation',
        component: () => import('../views/application/Confirmation.vue'),
      },
    ],
  },
];

const history = createWebHistory();
const scrollBehavior: RouterScrollBehavior = () => {
  return { top: 0 };
};

const router = createRouter({ history, routes, scrollBehavior });

export default router;
