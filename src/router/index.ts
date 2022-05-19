import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StockView from '../views/StockView.vue'
import BrokersView from '../views/BrokersView.vue'
import CoinsView from '../views/CoinsView.vue'
import TaxationView from '../views/TaxationView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'stock',
    component: StockView
  },
  {
    path: '/brokers',
    name: 'brokers',
    component: BrokersView
  },
  {
    path: '/coins',
    name: 'coins',
    component: CoinsView
  },
  {
    path: '/taxation',
    name: 'taxation',
    component: TaxationView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
