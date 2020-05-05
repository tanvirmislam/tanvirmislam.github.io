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

// Div viewport visibility checker
import VueObserveVisibility from 'vue-observe-visibility'

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
Vue.use(VueObserveVisibility)

sync(store, router)

// Mixins
Vue.mixin({
  methods: {
    sleep (duration) {
      this.isSleeping = true
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isSleeping = false
          resolve()
        }, duration)
      })
    }
  }
})

const app = new Vue({
  store,
  router,
  vuetify,
  ...App
})

app.$mount('#app')
