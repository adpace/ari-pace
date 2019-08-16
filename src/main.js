import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Scrollspy from 'vue2-scrollspy';
import '@fortawesome/fontawesome-pro/css/all.css'
import VueWaypoint from 'vue-waypoint'
import Lightbox from 'vue-my-photos'

Vue.component('lightbox', Lightbox);

Vue.use(VueWaypoint)
Vue.use(Scrollspy)
Vue.use(BootstrapVue)
Vue.use(Lightbox)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
