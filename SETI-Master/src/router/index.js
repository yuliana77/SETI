import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Main from '@/components/main/main'
import Order from '@/components/order/order'
import Farming from '@/components/farming/farming'
import Disbursement from '@/components/disbursement/disbursement'
import Refund from '@/components/refund/refund'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
     {
      path: '/main',
      name: 'main',
      component: Main,
      // children:[
      //   {
      //     path: '/order',
      //     name: 'order',
      //     component: Order
      //   },
      //   {
      //     path: '/farming',
      //     name: 'farming',
      //     component: Farming
      //   },
      //   {
      //     path: '/disbursement',
      //     name: 'disbursement',
      //     component: Disbursement
      //   },
      //   {
      //     path: '/refund',
      //     name: 'refund',
      //     component: Refund
      //   }
      // ]
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/farming',
      name: 'farming',
      component: Farming
    },
    {
        path: '/disbursement',
        name: 'disbursement',
        component: Disbursement
      },
      {
        path: '/refund',
        name: 'refund',
        component: Refund
      }
  ],
  //linkActiveClass:'active'
})

