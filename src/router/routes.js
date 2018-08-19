import LoginForm from '../pages/LoginForm/LoginForm.vue';
import Beers from '../pages/BeersOverview/BeersOverview.vue';

const routes = [
  {
    path: '/',
    component: LoginForm,
    name: 'LoginForm',
  },
  {
    path: '/beers',
    component: Beers,
    name: 'Beers',
    meta: {
      requiresAuth: true,
    },
  },
];

export default routes;
