import Vue from 'vue';
import ElementUi from 'element-ui';
import axios from 'axios';
// import qs from 'qs';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios = axios;
Vue.use(ElementUi);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
