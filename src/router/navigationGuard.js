const navigationGuard = (router) => {
  router.beforeEach((to, from, next) => {
    const userToken = localStorage.getItem('token'); // eslint-disable-line no-undef
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (!requiresAuth) {
      next();
      return;
    }

    if (!userToken) {
      next({
        name: 'LoginForm',
      });
      return;
    }

    next();
  });
};

export default navigationGuard;
