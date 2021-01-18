// -----------------------------------------------------------
// Imports
// -----------------------------------------------------------
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueLazyLoad from 'vue-lazyload';

import VueParticles from 'vue-particles';
import VueObserveVisibility from 'vue-observe-visibility';

import axios from 'axios';
import { sync } from 'vuex-router-sync';

import Carousel3d from 'vue-carousel-3d';
import store from './store';
import router from './router/index';
import vuetify from './plugins/vuetify';
import FontAwesomeIcon from './plugins/icons';

import App from './components/app.vue';
// -----------------------------------------------------------

// Initiate Vue
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuetify);
Vue.use(VueParticles);
Vue.use(VueObserveVisibility);
Vue.use(VueLazyLoad);
Vue.use(Carousel3d);

sync(store, router);

const app = new Vue({
  store,
  router,
  vuetify,
  ...App,
});

app.$mount('#app');
