import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Caf from './components/Caf.vue';
import Router from './components/Router.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Rank from "./components/Rank";
import Discover from "./components/Discover";
import History from "./components/History";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Router',
        component: Router
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/caf',
        name: 'Caf',
        component: Caf
    },
    {
        path: '/rank',
        name: 'Rank',
        component: Rank
    },
    {
        path: '/discover',
        name: 'Discover',
        component: Discover
    },
    {
        path: '/history',
        name: 'History',
        component: History
    },


]

export const router = new VueRouter({
    mode: 'history',
    routes: routes,
})
