import { createRouter, createWebHashHistory } from 'vue-router'
 import InsertarPage from '../pages/InsertarPage.vue'
 import VehiculosPage from '../pages/VehiculosPage.vue'
 import BienvenidaPage from '../pages/BienvenidaPage.vue'

const routes = [
    {
        path: '/',
        name: 'Bienvenida',
        component: BienvenidaPage
    },
    {
        path: '/insertar',
        name: 'Venta',
        component: InsertarPage
    },
    {
        path: '/consultar',
        name: 'Vehiculos',
        component: VehiculosPage
    },
]

const router = createRouter({

    history: createWebHashHistory(), routes
})
 export default router
