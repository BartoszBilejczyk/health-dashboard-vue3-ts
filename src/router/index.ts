import { createRouter, createWebHistory } from 'vue-router';

// this has to be any because RouteConfig is not exported from vue-router yet
const routes: Array<any> = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () =>
        import(/* webpackChunkName: 'dashboard' */ '../views/Dashboard.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (routes.some(route => route.path === to.path)) {
    next();
  } else {
    next({ path: '/dashboard' })
  }
})

export default router;
