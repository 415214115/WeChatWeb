<template>
	<view class="myBox">
		<view class="topMsg">
			<view class="headers flex">
				<image src="/static/logo.png" class="headerImage" mode="aspectFill"></image>
				<view class="nameTel">
					<view class="name">哈哈哈</view>
					<view class="tel">tell:13333333333</view>
				</view>
				<view class="money"><text>123</text>.00</view>
			</view>
			<view class="functions flex">
				<view class="leftBox">
					<image src="/static/logo.png" class="functionsImage" mode="aspectFill"></image>立即提现
				</view>
				<view class="rightBox" @tap="toAssignPage('../billDetails/index')">
					<image src="/static/logo.png" class="functionsImage" mode="aspectFill"></image>账单明细
				</view>
			</view>
		</view>
		<view class="functionList">
			<view class="flex listItem" @tap="toAssignPage('../discountDoupon/index')">
				<view class="listTitle">
					<image src="/static/logo.png" class="functionsImage" mode="aspectFill"></image>优惠券管理
				</view>
				<image src="/static/image/rightjt.png" class="functionsImageJt" mode="aspectFill"></image>
			</view>
			<view class="flex listItem" @tap="toAssignPage('../bank/myBank/index')">
				<view class="listTitle">
					<image src="/static/logo.png" class="functionsImage" mode="aspectFill"></image>银行卡管理
				</view>
				<image src="/static/image/rightjt.png" class="functionsImageJt" mode="aspectFill"></image>
			</view>
		</view>
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
	.myBox {
		padding: 40upx;
	}

	.topMsg {
		width: 100%;
		height: 360upx;
		background: linear-gradient(180deg, #FE4B32, #FE7C48);
		box-shadow: 0px 2upx 20upx 0px rgba(251, 126, 50, 0.5);
		border-radius: 20upx 20upx 0 0;
		margin-top: 130upx;
		padding: 70upx 50upx;
	}

	.headers,
	.functions {
		justify-content: space-between;
		align-items: center;
		color: #FFFFFF;
		font-size: 30upx;
		font-weight: bold;
	}

	.headers {
		margin-bottom: 60upx;
	}

	.headerImage {
		width: 120upx;
		height: 120upx;
		margin-right: 20upx;
		border-radius: 100%;
	}

	.functions view {
		width: 50%;
		font-size: 28upx;
	}

	.functionsImage {
		width: 36upx;
		height: 36upx;
		margin-right: 20upx;
		vertical-align: middle;
	}

	.rightBox {
		text-align: right;
		border-left: 1px solid #FF9F37;
	}

	.listItem {
		justify-content: space-between;
		align-items: center;
		padding: 40upx 30upx;
	}

	.functionsImageJt {
		width: 20upx;
		height: 20upx;
		vertical-align: middle;
	}

	.listTitle view {
		font-size: 30upx;
		color: #261900;
	}

	.functionList {
		margin-top: 50upx;
	}

	.money text {
		font-size: 60upx;
	}
</style>
