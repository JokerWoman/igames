import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Listar from '../views/Listar.vue'
import Inserir from '../views/Inserir.vue'
import Game from '../views/Game.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/listar',
        name: 'Listar',
        component: Listar
    },
    {
        path: '/inseir',
        name: 'Inserir',
        component: Inserir
    },
    {
        path: '/game/:id',
        name: 'Game',
        component: Game
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router