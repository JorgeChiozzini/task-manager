import { createRouter, createWebHistory } from 'vue-router';
import TaskHome from '../views/TaskHome.vue';

const routes = [
  {
    path: '/',
    name: 'TaskHome',
    component: TaskHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
