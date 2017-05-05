<<<<<<< HEAD
Vue.config.productionTip = false
require('./styles/app.scss')
import Vue from 'vue'
import index from './scripts/components/index.vue'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {index},
  template:'<index />'
=======
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
>>>>>>> caff8b33cd5573b5cbe5fee46468b0224c9dbe46
})
