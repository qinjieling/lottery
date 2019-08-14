// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { 
  Toast,
  Progress,
  Swipe,
  SwipeItem,
  Dialog
} from 'vant'
import 'amfe-flexible'
import clipboard from 'clipboard';
Vue.config.productionTip = false
Vue.use(Toast).use(Progress).use(Swipe).use(SwipeItem).use(Dialog)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
