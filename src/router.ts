import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home/index.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./views/Products/index.vue'),
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('./views/ProductDetail/index.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart/index.vue'),
    },
  ],
});
