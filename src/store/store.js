import Vue from 'vue'
import Vuex from 'vuex'

<<<<<<< HEAD
Vue.use(Vuex) //全局引入vuex插件

export const store = new Vuex.Store({
	//状态，想要存储的数据
	state: {
		index: 0
	},
	mutations: {
		login(state) {
			state.index=0
			console.log(state.index)
		},
		register(state) {
			state.index=1
			console.log(state.index)
		}
	}
})
=======
Vue.use(Vuex)
export const store = new Vuex.Store({
			state:{
				menuShow:false,
				btn:true
			},
			mutations:{
				show(state){
					state.menuShow=true;
					state.btn=false				
				},
				hide(state){
					state.menuShow=false;
					state.btn=true
				}
			}
		})
>>>>>>> 42881b44b362adec9560b65fbb9156346767ef8b
