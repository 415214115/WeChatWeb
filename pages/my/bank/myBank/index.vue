<template>
	<view class="myBank">
		<view class="cardBox">
			<view class="cardName">工商银行</view>
			<view class="cardNum">●●●● ●●●● ●●●● 8256</view>
		</view>
		<view class="cardBox">
			<view class="cardName">工商银行</view>
			<view class="cardNum">●●●● ●●●● ●●●● 8256</view>
		</view>
		<view class="upDeteBank" @tap="toAssignPage('../bankMsg/index')">修改银行卡信息</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toAssignPage(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style scoped>
	.myBank {
		width: 100%;
		min-height: 100vh;
		background: #F7F5F6;
		padding: 40upx 30upx;
	}

	.cardBox {
		width: 100%;
		height: 300upx;
		margin-bottom: 30upx;
		border-radius: 15upx;
		padding: 70upx 60upx;
		color: #FFFFFF;
		font-weight: 400;
		background-image: url(@/static/image/my/yhk.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.cardName {
		font-size: 38upx;
	}

	.cardNum {
		font-size: 48upx;
		margin-top: 56upx;
	}

	.upDeteBank {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		border-radius: 15upx;
		box-shadow: 0px 10upx 30upx 0px rgba(0, 0, 0, 0.05);
		background: #FFFFFF;
		text-align: center;
		color: #ED4E50;
		font-size: 30upx;
	}
</style>
