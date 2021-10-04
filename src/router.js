import Vue from 'vue'
import Router from 'vue-router'
import Busquedas from './components/Busquedas'
import NotFound from "./components/NotFound";


const Inicio = () => import('./components/Inicio')
const Ventas = () => import('./components/Ventas')
const Total = () => import('./components/Total')

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
    {
        path: "*",
        component: NotFound,
      },
    ]
})