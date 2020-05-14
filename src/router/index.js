import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import Megaminx from '@/components/megaminx'
import Pyraminx from '@/components/pyraminx'
import Clock from '@/components/clock'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/megaminx'
    },
    {
      path: '/megaminx',
      name: 'megaminx',
      component: Megaminx
    },
    {
      path: '/pyraminx',
      name: 'pyraminx',
      component: Pyraminx
    },
    {
      path: '/clock',
      name: 'clock',
      component: Clock
    }
  ]
})
