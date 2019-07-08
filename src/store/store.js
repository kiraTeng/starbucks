import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
			state:{
				menuShow:false,
				btn:true
				// moreShow:true
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
// 				moreShowt(state){
// 					console.log("关闭")
// 					state.moreShow = true;
// 					console.log(11111111111)
// 				},
// 				moreShowf(state){
// 					console.log("打开")
// 					state.moreShow=false;
// 					console.log(11111111111)
// 				}
				
				
				
			}
		})