import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'page1',
    component: () => import('@/views/page1'),
  }]
})
export default router
