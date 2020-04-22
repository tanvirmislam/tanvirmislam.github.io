// ---------------------------------------------------------------------------------
// Imports
// ---------------------------------------------------------------------------------
// Vue
import Vue from 'vue'

// Fonts and Icons
import { FontAwesomeIcon } from './plugins/icons'

// Vuetify
import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify'

// Axios (HTTP Client)
import axios from 'axios'

// Router
import router from './router/index'
import { sync } from 'vuex-router-sync'

// Store (Vuex)
import store from './store'

// Particles
import VueParticles from 'vue-particles'

// App root
import App from './components/app'

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

// Initiate Vue
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuetify)
Vue.use(VueParticles)

sync(store, router)

const app = new Vue({
  store,
  router,
  vuetify,
  ...App
})

app.$mount('#app')
