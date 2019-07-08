// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import {store} from './store/store.js'

import Video from 'video.js'
/*import 'video.js/dist/video-js.css'*/

Vue.prototype.$video = Video
Vue.config.productionTip = false

import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
	key:'a1ef59f64cf14b075cbf47801df5a183'
})

import axios from 'axios'
Vue.prototype.$axios=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
	store
})
