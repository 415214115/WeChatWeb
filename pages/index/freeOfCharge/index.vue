<template>
	<view class="freeOfCharge">
		<view class="goToPage">我的优惠券</view>
		<view class="discountDouponList">
			<view class="listItem flex stateOne">
				<view class="discountDouponMsg">
					<view class="money"><text>88</text>元</view>
					<view class="fullReduction">满500元可用</view>
				</view>
				<view class="shopBox">
					<view class="shopName">店铺名字店铺名字店铺名字店铺名字店铺名字店铺名字</view>
					<view class="expireTime">2020-11-15 23:24:28到期</view>
				</view>
				<view class="funcBtn">立即使用</view>
			</view>
			<view class="listItem flex stateTwo">
				<view class="discountDouponMsg">
					<view class="money"><text>88</text>元</view>
					<view class="fullReduction">满500元可用</view>
				</view>
				<view class="shopBox">
					<view class="shopName">店铺名字店铺名字店铺名字店铺名字店铺名字店铺名字</view>
					<view class="expireTime">2020-11-15 23:24:28到期</view>
				</view>
				<view class="funcBtn">已使用</view>
			</view>
			<view class="listItem flex stateTwo">
				<view class="discountDouponMsg">
					<view class="money"><text>5</text>元</view>
					<view class="fullReduction">满60元可用</view>
				</view>
				<view class="shopBox">
					<view class="shopName">店铺名字店铺名字店铺名字店铺名字店铺名字店铺名字</view>
					<view class="expireTime">2020-11-15 23:24:28到期</view>
				</view>
				<view class="funcBtn">已过期</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.freeOfCharge{
		padding: 25upx;
		background: #F5F5F5;
		min-height: 100vh;
	}
	.goToPage{
		color: #333333;
		font-size: 28upx;
		text-align: right;
		font-weight: 500;
		margin-bottom: 30upx;
	}
	/*优惠券样式开始*/
	.discountDouponList {
		/* padding: 30upx; */
	}
	
	.listItem {
		padding: 20upx 15upx;
		background: #FFFFFF;
		border-radius: 6upx;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20upx;
	}
	
	.fullReduction {
		color: #666666;
		font-size: 20upx;
	}
	
	.discountDouponMsg {
		text-align: center;
		position: relative;
		padding-right: 15upx;
		width: 160upx;
	}
	
	.discountDouponMsg::after {
		width: 1px;
		height: 100%;
		content: '';
		position: absolute;
		border-right: 1px dotted #999999;
		top: 0;
		right: 0;
		bottom: 0;
	}
	
	.money {
		color: #000000;
		font-size: 24upx;
		font-size: 400;
		margin-bottom: 20upx;
	}
	
	.money text {
		font-size: 48upx;
	}
	
	.shopBox {
		width: 290upx;
	}
	
	.shopName {
		color: #000000;
		font-size: 30upx;
		font-size: 500;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
		overflow-wrap: break-word;
		white-space: wrap;
	}
	
	.expireTime {
		color: #666666;
		font-size: 24upx;
	}
	
	.funcBtn {
		width: 136upx;
		height: 48upx;
		text-align: center;
		line-height: 48upx;
		font-size: 24upx;
		border-radius: 64upx;
	}
	
	.stateOne .funcBtn {
		background: linear-gradient(180deg, #FE4A32 0%, #FE7E48 100%);
		box-shadow: 0px 2upx 20upx 0px rgba(251, 126, 50, 0.5);
		color: #FFFFFF;
	}
	
	.stateTwo {
		background: #E8E8E8;
	}
	
	.stateTwo .funcBtn {
		background: #969696;
		color: #FFFFFF;
	}
	
	.stateTwo .money,
	.stateTwo .shopName,
	.stateTwo .fullReduction,
	.stateTwo .expireTime {
		color: #A7A7A7;
	}
</style>
