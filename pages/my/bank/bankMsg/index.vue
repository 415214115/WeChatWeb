<template>
	<view class="bankMsg">
		<view class="bankList">
			<view class="formName">银行账号</view>
			<input type="text" v-model="bankMsg.num" value="" placeholder="银行账号" placeholder-class="inputPlaceholderClass" class="inputClass" />
		</view>
		<view class="bankList">
			<view class="formName">开户银行</view>
			<input type="text" v-model="bankMsg.name" value="" placeholder="开户银行" placeholder-class="inputPlaceholderClass" class="inputClass" />
		</view>
		<view class="bankList">
			<view class="formName">银行户主</view>
			<input type="text" v-model="bankMsg.userName" value="" placeholder="银行户主" placeholder-class="inputPlaceholderClass" class="inputClass" />
		</view>
		<view class="bankList">
			<view class="formName">银行卡电话</view>
			<input type="text" v-model="bankMsg.userPhone" value="" placeholder="银行卡电话" placeholder-class="inputPlaceholderClass" class="inputClass" />
		</view>
		<view class="confirmBtn" v-if="bankInfo" @click="addBank">确定修改</view>
		<view class="confirmBtn" v-else @click="addBank">确定绑卡</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bankMsg:{
					id: '',
					name: '',
					num: '',
					userName: '',
					userPhone: ''
				},
				bankInfo: ''
			}
		},
		onLoad(e) {
			console.log(JSON.parse(e.bank))
			if(e.bank){
				this.bankInfo = JSON.parse(e.bank)
				this.bankMsg.id = JSON.parse(e.bank).id
				this.bankMsg.name = JSON.parse(e.bank).name
				this.bankMsg.num = JSON.parse(e.bank).num
				this.bankMsg.userName = JSON.parse(e.bank).userName
				this.bankMsg.userPhone = JSON.parse(e.bank).userPhone
			}
		},
		methods:{
			addBank(){
				let postUrl = ''
				if(this.bankInfo){
					postUrl = '/user/updateBank'
				} else {
					postUrl = '/user/addBank'
				}
				this.$request.post(postUrl, this.bankMsg).then(res=>{
					if (res.code == 'succes'){
						uni.showToast({
							icon: 'none',
							title: this.bankInfo?'修改成功':'添加成功',
							duration: 2000
						})
						setTimeout(()=>{
							uni.navigateBack({
								delta:1
							})
						},1000)
					}
				})
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
