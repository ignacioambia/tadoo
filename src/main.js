import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
import PrettyCheck from 'pretty-checkbox-vue/check';
Vue.component('p-check', PrettyCheck);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
