import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //全局引入vuex插件

export const store = new Vuex.Store({

	//状态，想要存储的数据
	state: {
		index: 0,
		menuShow: false,
		btn: true,
		showIt:false,
		list:[
				{title:'芜湖银泰城店',
				desc:'芜湖市 弋江区 芜湖银泰城地上一层1-019号铺位 利民西路189号',
				inx:0
				},
				{title:'深圳易思博软件大厦店',
				desc:'深圳市 南山区 易思博软件大厦首层01单元 海天二路',
				inx:1},
				{title:'深圳海岸城店',
				desc:'深圳市 南山区 海岸城购物中心２层291号店铺 海德一道',
				inx:2},
				{title:'深圳学府路店',
				desc:'深圳市 南山区 中润大厦一层C商铺 南油大道西、学府路南',
				inx:3},
				{title:'深圳海岸城2店',
				desc:'深圳市 南山区 海岸城购物中心4楼432号铺 文心5路33号',
				inx:4},
				],
	},
	mutations: {
		login(state) {
			state.index = 0
			console.log(state.index)
		},
		register(state) {
			state.index = 1
			console.log(state.index)
		},
		show(state) {
			state.menuShow = true;
			state.btn = false
		},
		hide(state) {
			state.menuShow = false;
			state.btn = true
		},
		map(state){
			state.showIt=!state.showIt;
			state.list =state.list;
			
			
			console.log(state.list)
		},
//		showList(state){
//			
//			
//		}
	}
})
