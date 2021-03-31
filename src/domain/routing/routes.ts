import { RouteRecordRaw } from 'vue-router';
import { homeRoute } from '@/features/home/routes';
import { usersRoute } from '@/features/users/routes';

export const routes: RouteRecordRaw[] = [
  usersRoute,
  homeRoute,
];
