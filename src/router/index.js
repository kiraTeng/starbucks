import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/star/Home/home'
import House from '@/star/House/house'
import More from '@/star/More/more'
import Mine from '@/star/Mine/mine'
import Vegetable from '@/star/Vegetable/vegetable'

/*二级路由设置*/
import Login from '../components/login'
import Register from '../components/register'
import Club from '../components/club'
import Drinks from '@/star/Vegetable/drinks.vue'
import Foods from '@/star/Vegetable/foods.vue'
import Coffee from '@/star/Vegetable/coffee.vue'
import Product from '@/star/Vegetable/product.vue'
import Drinkall from '@/star/Vegetable/drinkAll.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
    {path:'/home',name:'Home',component:Home},
    {path:'/house',name:'House',component:House},
    {path:'/more',name:'More',component:More},
    {path:'/mine',name:'Mine',component:Mine,children:[
      {path:'login',component:Login},
      {path:'register',component:Register},
      {path:'club',component:Club},
    ]},
    {path:'/vegetable',name:'Vegetable',component:Vegetable},
		{path:'/vegetable/drinks',name:'Drinks',component:Drinks,children:[
			 {path:'drinkAll',component:Drinkall},
		]},
		{path:'/vegetable/foods',name:'Foods',component:Foods},
		{path:'/vegetable/coffee',name:'Coffee',component:Coffee},
		{path:'/vegetable/product',name:'Product',component:Product}

  ]
})
