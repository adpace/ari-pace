import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode  : 'history',
    base  : process.env.BASE_URL,
    routes: [
        {
            path     : '/',
            name     : 'home',
            component: Home
        },
        {
            path     : '/about',
            name     : 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
        },
        {
            path     : '/resume',
            name     : 'resume',
            // route level code-splitting
            // this generates a separate chunk (resume.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "resume" */ './components/Resume.vue')
        },
        {
            path     : '/portfolio',
            name     : 'portfolio',
            // route level code-splitting
            // this generates a separate chunk (portfolio.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "portfolio" */ './components/Portfolio.vue')
        }
    ]
})
