<template>
	<section>
	<div v-for="(item,index) in drinkALLArr" :key='index'>
		<h3>{{item.topic}}</h3>
		<ul>
			<li v-for="(item2,index) in item.group_list" :key='index'>
			<a href="#">
			<img :src="item2.img_url" alt="">
			<strong>{{item2.title}}</strong>
			</a>
			</li>
			
		</ul>
	</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				drinkALLArr:[]
			};
		},
		mounted() {
			this.getDrinkAllData()
		},
		methods:{
			getDrinkAllData(){
				this.$axios.get('../../static/data/drinkAll.json')
				.then(res=>{
					console.log(res.data.group)
					this.drinkALLArr=res.data.group
				})
			}
		}
	}
</script>

<style lang="less">
div.drinkCon{
	section{
	>div{
		border-bottom: 1px solid #dadada;
		margin-bottom: 36/50rem;
		padding-bottom: 20/50rem;
		&:last-of-type{
			border-bottom: none;
		}
		h3{
			font-size: 14/50rem;
			line-height: 22.4/50rem;
			margin-bottom: 12/50rem;
			color: rgba(0, 0, 0, 0.56);
		}
		ul{
			list-style: none;
			display: flex;
			flex-flow: wrap;
			li{
				padding: 16/50rem 16/50rem 16/50rem 0;
				width: 128/50rem;
				a{
					margin-right: 16/50rem;
					display: block;
					text-align: center;
					text-decoration: none;
					strong{
						font-size: 16/50rem;
						letter-spacing: 0.4px;
						line-height: 25.6/50rem;
						color: #262626;
					}
				}
				img{
					display: block;
					width: 112/50rem;
					height: 112/50rem;
					margin-bottom: 6/50rem;
					border-radius: 50%;
					box-shadow:0 1px 1px 1px rgba(0, 0, 0, 0.12);
				}
			&:nth-of-type(even){
				padding: 16/50rem 0 16/50rem 16/50rem;
			}
			}
			
		}
	}
	}
}
</style>
