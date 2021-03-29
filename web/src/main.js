import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import Vuex from 'vuex';

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  apolloProvider: createProvider(),
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
