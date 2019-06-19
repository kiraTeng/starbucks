<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
	 import {obj} from '../static/js/setRem.js'
	import Footer from './components/footer'
  export default {
  name: 'App',
  components:{
  	Footer
  },
  beforeCreate(){
  	this.$router.push('/home')
  },
  mounted(){
  	obj.setRem();
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	body{
		font-size: 15px;
		
	}
#app {
  font-family: "Gotham", Helvetica, Arial, PingFangSC-Regular, "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
