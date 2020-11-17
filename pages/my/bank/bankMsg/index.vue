<template>
	<view class="bankMsg">
		<view class="bankList">
			<view class="formName">银行账号</view>
			<input type="text" value="" placeholder="银行账号" placeholder-class="inputPlaceholderClass" class="inputClass" />
		</view>
		<view class="bankList">
			<view class="formName">开户银行</view>
			<input type="text" value="" placeholder="开户银行" placeholder-class="inputPlaceholderClass" class="inputClass" />
		</view>
		<view class="bankList">
			<view class="formName">银行户主</view>
			<input type="text" value="" placeholder="银行户主" placeholder-class="inputPlaceholderClass" class="inputClass" />
		</view>
		<view class="bankList">
			<view class="formName">银行卡电话</view>
			<input type="text" value="" placeholder="银行卡电话" placeholder-class="inputPlaceholderClass" class="inputClass" />
		</view>
		<view class="confirmBtn">确定绑卡</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
	
			}
		}
	}
</script>

<style scoped>
	.bankMsg{
			width: 100%;
			min-height: 100vh;
			background: #F7F5F6;
			padding: 80upx 0;
	}
	.inputPlaceholderClass,.inputClass{
		color: #999999;
		font-size: 26upx;
		text-align: right;
	}
	.inputClass{
		width: 520upx;
	}
	.bankList{
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		align-items: center;
		background: #FFFFFF;
		padding: 40upx 20upx;
		border-bottom: 1px solid #E9E9E9;
	}
	.bankList:first-child{
		border-top:  1px solid #E9E9E9;
	}
	.formName{
		color: #333333;
		font-size: 26upx;
	}
	.confirmBtn{
		width: 680upx;
		height: 88upx;
		border-radius: 64upx;
		background: linear-gradient(0deg, #FE7C48, #FE4C32);
		color: #FFFFFF;
		font-size: 28upx;
		text-align: center;
		line-height: 88upx;
		margin-top: 50upx;
		margin-left: 35upx;
	}
</style>
