import Vue from 'vue'
import Router from 'vue-router'
//import Inicio from './components/Inicio'
import Busquedas from './components/Busquedas'
//import Ventas from './components/Ventas'
import Total from './components/Total'

const Inicio = () => import('./components/Inicio')
//const Busquedas = () => import('./components/Busquedas')
const Ventas = () => import('./components/Ventas')

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'inicio',
        component: Inicio
    },
    {
        path: '/busquedas',
        name: 'busquedas',
        component: Busquedas
    },
    {
        path: '/ventas',
        name: 'ventas',
        component: Ventas
    },
    {
        path: '/total',
        name: 'total',
        component: Total
    },
    ]
})