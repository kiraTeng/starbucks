import Vue from 'vue'
import Vuex from 'vuex'

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