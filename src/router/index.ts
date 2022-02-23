import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Controle from '../views/Controle.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Controle',
    component: Controle,
  },
  {
    path: '/controle-eject',
    name: 'ControleEject',
    // route level code-splitting
    // this generates a separate chunk (controle.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "controle" */ '../views/ControleEject.vue'),
  },
  {
    path: '/controle-backward-forward',
    name: 'ControleBackwardForward',
    component: () => import(/* webpackChunkName: "controle" */ '../views/ControleBackwardForward.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
