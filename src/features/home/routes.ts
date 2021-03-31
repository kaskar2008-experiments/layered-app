import { RouteRecordRaw } from 'vue-router';

export const homeRoute: RouteRecordRaw = {
  name: 'Home',
  path: '/',
  component: () => import('./Home.vue')
};
