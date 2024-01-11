/*
 * @Author: hxx
 * @Date: 2024-01-10 17:36:43
 * @LastEditors: hxx
 * @LastEditTime: 2024-01-11 11:11:26
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
