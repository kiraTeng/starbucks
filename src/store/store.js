import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex) //全局引入vuex插件

export const store = new Vuex.Store({
	//状态，想要存储的数据
	state: {
		index: 0,
		menuShow:false,
		btn:true
	},
	mutations: {
		login(state) {
			state.index=0
			console.log(state.index)
		},
		register(state) {
			state.index=1
			console.log(state.index)
		},
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
