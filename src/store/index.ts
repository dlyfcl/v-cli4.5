import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';
Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});
export default new Vuex.Store({
  state: {
    BASE_URL: ''
  },
  mutations: {
    SAVE_BASE_URL(state: any, pageState: string) {
      state.BASE_URL = pageState;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin],
})
