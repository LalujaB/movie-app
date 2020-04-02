import Vue from 'vue';
import VueRouter from 'vue-router';
import AppMovies from  './components/AppMovies';

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect: '/movies',
        name: 'home'
    },
    {
        path: '/movies',
        name: 'movies',
        component: AppMovies
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;