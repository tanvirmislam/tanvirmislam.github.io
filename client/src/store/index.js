import Vue from 'vue';
import Vuex from 'vuex';
import CreatePersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  plugins: [
    CreatePersistedState({}),
  ],
});

export default store;
