import Vue from 'vue'
import App from './App.vue'
import { router } from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

router.push({ path: '/' })

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
