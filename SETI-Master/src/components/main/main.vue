<!--  主框架 -->
<template>
	<div class="main">
		<!-- 订单板块 -->
		<div class="item active" @click="changeChart(0)"  style="transform: translate(40.7%, 0) scale(1)">
			<order></order>
		</div>
		<!-- 刷单板块 -->
		<div class="item"  @click="changeChart(1)" style="transform: translate(-27.4%,0.5%) scale(0.33)">
			<disbursement></disbursement>
		</div>
		<!-- 支出板块 -->
		<div class="item"  @click="changeChart(2)"  style="transform: translate(-27.4%,34.5%) scale(0.33)">
			<farming></farming>
		</div>
		<!-- 售后板块 -->
		<div class="item" @click="changeChart(3)"  style="transform: translate(-27.4%,-33.5%) scale(0.33)">
			<refund></refund>
		</div>
	</div>
</template>
<style type="text/css">
	.main{
		 position:relative;
		height: 90%;
		width: 90%;
		overflow: hidden;
		margin: 0 auto;
		box-sizing: content-box;
		padding-top: 30px;
	}
	.main .item{
		 padding: 0px;
	    margin: 0px;
	    width: 68%;
	    height: 100%;
	    position :absolute;
	    transform: scale(0.33);
	    text-align: center;
	    transition:all 0.8s;
	    background: rgba(255, 255, 255, 0.3);
	}
	.main  .active{
		 height:100%;
	    width: 69%;
	    margin-left: 10px;
	    line-height: 300px;
	}
</style>
<script >
	import  order from '../order/order' 
	import disbursement from "../disbursement/disbursement"
	import farming from "../farming/farming"
	import refund from "../refund/refund"
	export default{
		data(){
			return{
				items:[]
			}
		},
		
		mounted(){
			this._inits()
		},
		methods:{
			_inits(){
				this.items = document.querySelectorAll(".main .item");
				console.log(this.items);
				for(let i = 0;i<this.items.length;i++){
					this.items[i].dataset.ords = i;
				}
			},
			changeChart(index){
				let activeItem = document.querySelector(".main  .active");
				let activeIndex = activeItem.dataset.ords;
				let itemIndex = this.items[index];
				if (activeIndex == index) {
					return;
				}else{
					activeItem.classList.remove('active');
					itemIndex.classList.add('active');
					
				}	
				this.changetran(activeItem,itemIndex);			
			},
			//切换动画
			changetran(one,two){
				let e1 = one.style.transform;
				let e2 = two.style.transform;
				one.style.transform = e2;
				two.style.transform = e1;
			}
		},
		components:{
			order,
			disbursement,
			farming,
			refund
		}
	}
</script>