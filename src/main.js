import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import router from './router/routerIndex';

Vue.use(VueRouter); // needs to be instianted after VueRouter t

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
