// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import css from './assets/app.css'
import bootstrap from './assets/bootstrap.min.css'
import rtl from './assets/rtl.css'
import Http from 'vue-resource'

Vue.config.productionTip = false

Vue.use(Http)

const config = {
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
    'emulateJSON':true
};

Vue.http.options.emulateJSON = config['emulateJSON'];

Vue.http.options.headers = {
	'Content-Type': config['Content-Type']
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
