import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-pro/css/all.css'
import VueWaypoint from 'vue-waypoint'
import Lightbox from 'vue-my-photos'
import VueScrollactive from 'vue-scrollactive'

Vue.component('lightbox', Lightbox);

Vue.use(VueWaypoint)
Vue.use(BootstrapVue)
Vue.use(Lightbox)
Vue.use(VueScrollactive)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
