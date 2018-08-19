import VueRouter from 'vue-router';
import routes from './routes';
import navigationGuard from './navigationGuard';

const router = new VueRouter({
  routes,
});

navigationGuard(router);

export default router;
