import Home from './components/Home.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
  
export const router = new VueRouter({
    mode : 'history',
    routes : routes,
  })