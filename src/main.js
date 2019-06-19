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
import {store} from '@/store/store.js'

import axios from 'axios'
Vue.prototype.$axios=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
<<<<<<< HEAD
   store 
=======
	store
>>>>>>> 42881b44b362adec9560b65fbb9156346767ef8b
})
