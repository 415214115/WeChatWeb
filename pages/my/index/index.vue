<template>
	<view class="myBox">
		<view class="topMsg">
			<view class="headers flex">
				<image :src="userinfo.img" class="headerImage" mode="aspectFill"></image>
				<view class="nameTel">
					<view class="name">{{ userinfo.name }}</view>
					<!-- <view class="tel">tell:13333333333</view> -->
				</view>
				<view class="money"><text>{{ userMoery[0]?userMoery[0]:'0' }}</text>.{{ userMoery[1]?userMoery[1]:'00' }}</view>
			</view>
			<view class="functions flex">
				<view class="leftBox" @click="withdrawMoney">
					<image src="/static/image/my/c.png" class="functionsImage" mode="aspectFill"></image>立即提现
				</view>
				<view class="rightBox" @tap="toAssignPage('../billDetails/index')">
					<image src="/static/image/my/f.png" class="functionsImage" mode="aspectFill"></image>账单明细
				</view>
			</view>
		</view>
		<view class="functionList">
			<view class="flex listItem" @tap="toAssignPage('../discountDoupon/index')">
				<view class="listTitle">
					<image src="/static/image/my/q.png" class="functionsImage" mode="aspectFill"></image>优惠券管理
				</view>
				<image src="/static/image/rightjt.png" class="functionsImageJt" mode="aspectFill"></image>
			</view>
			<view class="flex listItem" @tap="toAssignPage('../bank/myBank/index')">
				<view class="listTitle">
					<image src="/static/image/my/k.png" class="functionsImage" mode="aspectFill"></image>银行卡管理
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
				userinfo: '',
				userMoery: []
			}
		},
		onShow() {
			this.getUserInfo()
		},
		// onLoad() {
		// 	this.getUserInfo()
		// },
		methods: {
			toAssignPage(url) {
				uni.navigateTo({
					url: url
				})
			},
			getUserInfo() {
				this.$request.get('/user/getUserInfo').then(res => {
					if (res.code == 'succes') {
						this.userinfo = res.data
						let sMoney = String(this.userinfo.moery)
						if (sMoney.indexOf('.') > -1) {
							this.userMoery = sMoney.split('.')
						} else {
							this.userMoery[0] = sMoney
							this.userMoery[1] = '00'
						}
					}
				})
			},
			withdrawMoney() {
				let money = '';
				var person = prompt("请输入提现金额", "");
				if (person != null && person != "") {
					if(Number(person)>Number(this.userinfo.moery)){
						uni.showToast({
							icon: 'none',
							title: '提现金额不能大于现有金额',
							duration: 2000
						})
					} else if(Number(person)<1){
						uni.showToast({
							icon: 'none',
							title: '提现金额必须大于1',
							duration: 2000
						})
					} else {
						this.$request.post('/user/withdrawTOUser',{
							money: person
						}).then(res=>{
							if (res.code == 'succes') {
								uni.showToast({
									icon: 'success',
									title: '提现申请已提交',
									duration: 2000
								})
								this.getUserInfo()
							} else if(res.code == 'error' && res.msg == '请先添加银行卡信息'){
									uni.showModal({
										title: '无银行卡',
										content: res.msg,
										success: (res) => {
											console.log()
											if(res.confirm){
												uni.navigateTo({
													url: '../bank/myBank/index'
												})
											}
										}
									})
							}
						})
						
					}
				}
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
