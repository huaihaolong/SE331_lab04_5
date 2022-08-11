import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PassengerLayout from '../views/PassengerLayoutView.vue'
import PassengerDetail from '../views/PassengerDetailView.vue'
import AirlineInfoView from '../views/AirlineInfoView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NetWorkErrorView from '../views/NetworkErrorView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/passenger/:id',
    name: 'PassengerLayout',
    component: PassengerLayout,
    props: true,
    children: [
      {
        path: '',
        name: 'PassengerDetail',
        component: PassengerDetail,
        props: true
      },
      {
        path: 'airline',
        name: 'AirlineInfo',
        component: AirlineInfoView,
        props: true
      }
    ]
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFoundView,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetWorkErrorView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
