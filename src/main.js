// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// import {Message} from 'element-ui'
// Vue.prototype.$message = Message

// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

// Vue.use(Vuetify)

import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

Vue.prototype.hasPermission = function (val) {
  // alert(store.getters.element)
  const element = store.getters.element;
  for (let s = 0; s < element.length; s++) {
    let thisEntry = element[s].toString();
    if (thisEntry == val) {
      return true;
    }
  }
  return false;
}




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
