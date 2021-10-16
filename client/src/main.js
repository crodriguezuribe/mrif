import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import * as VueGoogleMaps from 'vue2-google-maps'

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE',
//     libraries: 'places',
//   }
// }); 

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Agregamos la URL base de nuestra API
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'http://localhost:3000/api'; 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
