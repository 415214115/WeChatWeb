<template>
	<view class="myBank">
		<view class="cardBox" v-if="bankInfo">
			<view class="cardName">{{ bankInfo.name }}</view>
			<view class="cardNum">{{bankNum}}</view>
		</view>
		<!-- <view class="cardBox">
			<view class="cardName">工商银行</view>
			<view class="cardNum">●●●● ●●●● ●●●● 8256</view>
		</view> -->
		<view class="upDeteBank" v-if="bankInfo" @tap="toAssignPage('../bankMsg/index', '1')">修改银行卡信息</view>
		<view class="upDeteBank" v-if="!bankInfo" @tap="toAssignPage('../bankMsg/index', '')">添加银行卡</view>
		<view class="upDeteBank" v-if="bankInfo" @tap="deleteBank">取消绑定</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bankInfo: '',
				bankNum: ''
			}
		},
		onShow() {
			this.getBankList()
		},
		onLoad() {
		},
		methods: {
			toAssignPage(url, type) {
				let baseUrl = ''
				if(type){
					baseUrl = url + '?bank=' + JSON.stringify(this.bankInfo)
				} else {
					baseUrl = url
				}
				console.log(baseUrl)
				uni.navigateTo({
					url: baseUrl
				})
			},
			getBankList(){
				this.$request.get('/user/getBank').then(res=>{
					if (res.code == 'succes'){
						this.bankInfo = res.data
						if(this.bankInfo){
							let bankNumList = this.bankInfo.num.split('')
							let bankNh = bankNumList.splice(15, bankNumList.length-1).join('')
							let bankNq = bankNumList.splice(0,4).join('')
							this.bankNum = `${bankNq} ●●●● ●●●● ●●●● ${bankNh}`
						}
						
					}
				})
			},
			deleteBank(){
				console.log(this.bankInfo)
				uni.showModal({
					title: '提示',
					content: '确定要删除银行卡吗？',
					success:()=> {
						this.$request.post('/user/delBank',{
							id: this.bankInfo.id
						}).then(res=>{
							if (res.code == 'succes'){
								uni.showToast({
									icon: 'success',
									title: '取消成功',
									duration: 2000
								})
								this.getBankList()
							}
						})
					}
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
		font-size: 36upx;
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
		margin-bottom: 20upx;
	}
</style>
