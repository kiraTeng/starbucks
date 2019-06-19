<template>
	<div class="poster1">
		<div class="topImg">
			<img src="../assets/home/poster1.jpg" alt="" />
		</div>
		<div class="middleImg">
			<img src="../assets/home/poster2.jpg" alt="" />
		</div>
		<div class="bottmImg">
			<img src="../assets/home/poster3.jpg" alt="" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
   .topImg{
	  padding: 12/50rem;
	  width: 288/50rem;
   }
   .middleImg{
	   padding: 12/50rem;
	   width: 288/50rem;
   }
   .bottmImg{
	   padding: 12/50rem;
	   width: 288/50rem;
   }
   .poster1{
	   background:#f7f7f7;
	   box-sizing: border-box;	
	   padding: 12/50rem 0;
	   img{
		    width: 288/50rem;
		   height: 182/50rem;
		   text-align: center;
	   }
   }
   
</style>
