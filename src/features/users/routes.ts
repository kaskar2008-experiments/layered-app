import { RouteRecordRaw } from 'vue-router';

export const usersRoute: RouteRecordRaw = {
  name: 'Users',
  path: '/users',
  component: () => import('./Users.vue')
};
