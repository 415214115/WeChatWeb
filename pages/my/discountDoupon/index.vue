<template>
	<view class="discountDoupon">
		<view class="navBox">
			<view class="navList" @tap="selectNavFunc(nav.id)" :class="navListId==nav.id?'selectNav':''" v-for="nav in navList"
			 :key="nav.id">{{nav.title}}</view>
		</view>
		<view class="discountDouponList">
			<view class="listItem flex stateOne" v-if="navListId == 0" v-for="item in couponList" :key="item.id">
				<view class="discountDouponMsg">
					<view class="money"><text>{{ item.money }}</text>元</view>
					<view class="fullReduction">{{ item.couponName }}</view>
				</view>
				<view class="shopBox">
					<view class="shopName">{{ item.shopName }}</view>
					<view class="expireTime">{{ item.time }}到期</view>
				</view>
				<view class="funcBtn">立即使用</view>
			</view>
			<view class="listItem flex stateTwo" v-if="navListId == 2" v-for="item in couponList" :key="item.id">
				<view class="discountDouponMsg">
					<view class="money"><text>{{ item.money }}</text>元</view>
					<view class="fullReduction">{{ item.couponName }}</view>
				</view>
				<view class="shopBox">
					<view class="shopName">{{ item.shopName }}</view>
					<view class="expireTime">{{ item.time }}到期</view>
				</view>
				<view class="funcBtn" @tap="toAssignPage('../discuss/index')">我要评论</view>
			</view>
			<view class="listItem flex stateTwo" v-if="navListId == 1" v-for="item in couponList" :key="item.id">
				<view class="discountDouponMsg">
					<view class="money"><text>{{ item.money }}</text>元</view>
					<view class="fullReduction">{{ item.couponName }}</view>
				</view>
				<view class="shopBox">
					<view class="shopName">{{ item.shopName }}</view>
					<view class="expireTime">{{ item.time }}到期</view>
				</view>
				<view class="funcBtn">已过期</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
					id: 0,
					title: '未使用'
				}, {
					id: 2,
					title: '已使用'
				}, {
					id: 1,
					title: '已过期'
				}],
				navListId: 0,
				pageData: '',
				queryData: {
					status: 0,//0 有效 1 无效 2 已使用
					pageNum: 1,
					pageSize: 20
				},
				couponList: []
			}
		},
		onLoad() {
			
			this.getCouponList()
		},
		methods: {
			selectNavFunc(i) {
				this.navListId = i
				this.queryData.status = i
				this.couponList = []
				this.getCouponList()
			},
			toAssignPage(url) {
				uni.navigateTo({
					url: url
				})
			},
			getCouponList(){
				this.$request.post('/discounts/getUserCouponList',this.queryData).then(res=>{
					if (res.code == 'succes') {
						this.pageData = res.data
						this.couponList = this.couponList.concat(res.data.list)
					}
				})
			}
		}
	}
</script>

<style scoped>
	.discountDoupon {
		min-height: 100vh;
		padding-top: 120upx;
		background: #F5F5F5;
	}

	.navBox {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: #FFFFFF;
		height: 120upx;
		line-height: 120upx;
		z-index: 9;
	}

	.navList {
		display: inline-block;
		margin-left: 50upx;
		position: relative;
		color: #929192;
		font-size: 28upx;
	}

	.selectNav {
		color: #333333;
		font-size: 30upx;
	}

	.selectNav::before {
		width: 50upx;
		height: 10upx;
		content: '';
		position: absolute;
		background: #FE800A;
		border-radius: 64upx;
		left: 0;
		right: 0;
		bottom: 20upx;
		margin: auto;
	}

	/*优惠券样式开始*/
	.discountDouponList {
		padding: 30upx;
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
