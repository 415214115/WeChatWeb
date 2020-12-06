<template>
	<scroll-view class="content" :scroll-y="true">
		<view class="swiperBox">
			<swiper class="swiper" :autoplay="true">
				<swiper-item v-for="item in bannerList" :key="item.id">
					<image :src="item.img" mode="aspectFill" :lazy-load="true"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="ticketBox flex">
			<view class="ticketList" @tap="goToPage('../freeOfCharge/index')">
				<image src="/static/image/page/1.png" class="ticketImg" mode="aspectFill"></image>
				<view>免费券</view>
			</view>
			<view class="ticketList" @tap="goToPage('../../discover/share/index')">
				<image src="/static/image/page/jiaguanzhu.png" class="ticketImg" mode="aspectFill"></image>
				<view>积赞劵</view>
			</view>
			<view class="ticketList" @tap="goToPageGets('/pages/discover/index/index')">
				<image src="/static/image/page/gengduo.png" class="ticketImg" mode="aspectFill"></image>
				<view>更多券</view>
			</view>
		</view>
		<view class="newsBox flex">
			<view class="newsLeftTitle">
				<image src="/static/image/newsIcon.png" class="newsIcon" mode="aspectFill"></image>
			</view>
			<view class="newsListSwiper">
				<swiper class="newsswiper" :autoplay="true" :vertical="true" :display-multiple-items="2">
					<swiper-item v-for="item in swiperNewsListItem">
						<view class="newsswiperList" @tap="toNewsDetail(item.id)">{{item.title}}</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="newsListBox">
			<view class="newsListHeader">
				<!-- <view class="newsListHeaderText selectHeaderText">要闻</view> -->
				<view class="newsListHeaderText" v-for="item in newsTypeList" :key="item.id" @tap="selectNews(item.id)" :class="queryData.type==item.id?'selectHeaderText':''">
					{{ item.name }}
				</view>

			</view>
			<view class="newsListBoxContent">
				<!-- 样式一 -->
				<view class="contBox flex" @tap="toNewsDetail(item.id)" v-for="item in newsListItem" :key="item.id">
					<view class="textBox">
						<view class="headerTitle" style="height: 120upx;">{{item.title}}</view>
						<view class="timeOrLook">
							{{item.creatTime}}
							<!-- <text>1265</text> -->
						</view>
					</view>
					<image :src="item.cover" class="rightImages" mode="aspectFill"></image>
				</view>
				<!-- 样式二 -->
				<!-- <view class="contBox" @tap="toNewsDetail">
					<view class="headerTitle" style="width: 100%;-webkit-line-clamp: 2; ">
						向着网络强国阔步前行党的十八大以来网信事业发展述评
						向着网络强国阔步前行党的十八大以来网信事业发展述评
						向着网络强国阔步前行党的十八大以来网信事业发展述评
					</view>
					<view class="flex across">
						<image src="/static/logo.png" class="rightImages" mode="aspectFill"></image>
						<image src="/static/logo.png" class="rightImages" mode="aspectFill"></image>
						<image src="/static/logo.png" class="rightImages" mode="aspectFill"></image>
					</view>
					<view class="timeOrLook">
						2020-11-15
						<text>1265</text>
					</view>
				</view> -->
				<!-- 样式三 -->
				<!-- <view class="contBox" @tap="toNewsDetail">
					<view class="headerTitle" style="width: 100%;-webkit-line-clamp: 2; ">
						向着网络强国阔步前行党的十八大以来网信事业发展述评
						向着网络强国阔步前行党的十八大以来网信事业发展述评
						向着网络强国阔步前行党的十八大以来网信事业发展述评
					</view>
					<view class="flex oneAcross">
						<image src="/static/logo.png" class="rightImages" mode="aspectFill"></image>
					</view>
					<view class="timeOrLook">
						2020-11-15
						<text>1265</text>
					</view>
				</view> -->
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				baseURL: getApp().globalData.baseUrl,
				swiper: {
					data: [1, 2, 3, 4, 5, 6, 78]
				},
				bannerList: '',
				newsTypeList: '',
				newsId: 0,
				queryData: {
					name: '',
					type: '',
					pageNum: 1,
					pageSize: 20
				},
				newsListItem: [],
				swiperNewsListItem: '',
				newsListItemData: '',
				// 微信签名

			}
		},
		onLoad(e) {
			if (e.code) {
				this.$request.callBack('/wechat/callBack', {
					code: e.code
				}).then(res => {
					if (res.code == 'succes') {
						uni.setStorage({
							key: 'token',
							data: res.data
						})
					}
				})
			}
			setTimeout(() => {
				// this.$nextTick(()=>{
				if (uni.getStorageSync('token')) {
					this.getSignature()
				}
				// })
			}, 300)
		},
		methods: {
			selectNews(id) {
				this.queryData.type = id
				this.queryData.pageNum = 1
				this.newsListItem = []
				this.$nextTick(() => {
					this.getNewsList()
				})
			},
			goToPageGets(url) {
				uni.switchTab({
					url: url
				})
			},
			toNewsDetail(id) {
				uni.navigateTo({
					url: '../newsDetail/index?id=' + id
				})
			},
			goToPage(url) {
				uni.navigateTo({
					url: url
				})
			},
			getBanners() {
				this.$request.get('/home/getHomeTu').then(res => {
					if (res.code == 'succes') {
						this.bannerList = res.data
					}
				})
			},
			getNewsType() {
				uni.showLoading({
					title: '加载中...'
				})
				this.$request.get('/back/type/getInformationType').then(res => {
					if (res.code == 'succes') {
						this.newsTypeList = res.data
						this.queryData.type = this.newsTypeList[0].id
						this.$nextTick(() => {
							this.getNewsList()
						})
					}
				})
				this.$request.post('/back/type/selectInformation', {
					name: '',
					type: '',
					pageNum: 1,
					pageSize: 4
				}).then(res => {
					if (res.code == 'succes') {
						this.swiperNewsListItem = res.data.list
						uni.hideLoading()
					}
				})
			},
			getNewsList() {
				this.$request.post('/back/type/selectInformation', this.queryData).then(res => {
					if (res.code == 'succes') {
						this.newsListItemData = res.data
						this.newsListItem = this.newsListItem.concat(this.newsListItemData.list)
					}
				})
			},
			getSignature() {
				this.$request.getSignature('/wechat/getSignature', {
					url: window.location.href
				}).then(res => {
					if (res.code == 'succes') {
						let data = res.data
						// console.log(data)
						uni.setStorageSync('jsapi_ticket_token', data.jsapi_ticket_token)

						$wx.config({
							// debug: true,
							appId: data.APP_ID, // 必填，公众号的唯一标识
							timestamp: data.timestamp, // 必填，生成签名的时间戳
							nonceStr: data.noncestr, // 必填，生成签名的随机串
							signature: data.signature, // 必填，签名
							jsApiList: [
								"getLocation", //获取地理位置
								"chooseWXPay", //微信支付
								"updateTimelineShareData", // 分享到朋友圈
								"onMenuShareTimeline"
							]
						});
						setTimeout(() => {
							$wx.getLocation({
								type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
								success: function(res) {
									// console.log(res)
									let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
									let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
									// var speed = res.speed; // 速度，以米/每秒计
									// var accuracy = res.accuracy; // 位置精度
									let locationData = {
										lon: longitude,
										lat: latitude
									}
									uni.setStorageSync('locationObj', JSON.stringify(locationData))
								}
							});
						}, 300)
						this.getNewsType()
						this.getBanners()
					}
				})
			}
		},
		onReachBottom() {
			if (this.newsListItemData.total / 20 > this.queryData.pageNum) {
				this.queryData.pageNum += 1
				this.getNewsList()
			}
		}
	}
</script>

<style scoped>
	.content {
		background: #F1F1F1;
	}

	.swiperBox,
	.swiper,
	.swiper image {
		width: 100%;
		height: 490upx;
	}

	.ticketBox {
		padding: 0 24upx;
		justify-content: space-between;
		position: relative;
		z-index: 5;
		margin-top: -48upx;
	}

	.ticketList {
		width: 230upx;
		height: 225upx;
		background: #FFFFFF;
		text-align: center;
		font-size: 24upx;
		font-weight: 600;
		box-shadow: 0 0 20upx 1upx rgba(0, 0, 0, 0.2);
	}

	.ticketImg {
		position: relative;
		width: 80upx;
		height: 80upx;
		margin-top: 50upx;
		margin-bottom: 20upx;
		border-radius: 100%;
		padding: 20upx;
		background: linear-gradient(0deg, #FE7C48, #FE4C32);
	}

	.newsBox {
		background: #FFFFFF;
		margin-bottom: 20upx;
		padding: 25upx;
		margin-top: 30upx;
		justify-content: space-between;
	}

	.newsLeftTitle {
		font-size: 50upx;
		position: relative;
		padding-right: 20upx;
		margin-right: 20upx;
	}

	.newsIcon {
		width: 75upx;
		height: 72upx;
		margin-top: 28upx;
	}

	.newsLeftTitle::after {
		position: absolute;
		content: '';
		width: 1px;
		height: 66upx;
		top: 30upx;
		right: 0;
		background: #F4F4F4;
	}

	.newsswiper {
		height: 100upx;
		margin-top: 20upx;
	}

	.newsListSwiper {
		width: 560upx;
	}

	.newsswiperList {
		color: #2E2E2E;
		font-size: 28upx;
		position: relative;
		padding-left: 25upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.newsswiperList::before {
		position: absolute;
		content: '';
		width: 9upx;
		height: 9upx;
		background: #2186F4;
		border-radius: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		margin: auto;
	}

	.newsListBox {
		background: #FFFFFF;
	}

	.newsListHeader {
		width: 100%;
		padding: 30upx 0;
		border-bottom: 1px solid #F4F4F4;
		font-size: 0;
		white-space: nowrap;
		overflow-x: auto;
	}

	.newsListHeaderText {
		margin-left: 30upx;
		position: relative;
		font-size: 28upx;
		color: #878A8F;
		display: inline-block;
		padding: 0 20upx;
	}

	.newsListHeaderText:last-child {
		margin-right: 30upx;
	}

	.selectHeaderText {
		color: #222222;
	}

	.selectHeaderText::before {
		width: 42upx;
		height: 5upx;
		border-radius: 64upx;
		background: #2186F4;
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -30upx;
		margin: auto;
	}

	.newsListBoxContent {
		padding: 0 30upx;
	}

	.contBox {
		justify-content: space-between;
		border-bottom: 1px solid #F4F4F4;
		padding: 30upx 0;
	}

	.headerTitle {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
		overflow-wrap: break-word;
		white-space: wrap;
		text-align: justify;
		color: #303030;
		font-size: 30upx;
	}

	.textBox {
		width: 420upx;
		height: 60upx;

	}

	.rightImages {
		width: 230upx;
		height: 165upx;
		border-radius: 6upx;
		margin-left: 50upx;
	}

	.timeOrLook {
		color: #8F8F93;
		font-size: 25upx;
		margin-top: 20upx;
	}

	.timeOrLook text {
		margin-left: 65upx;
		padding-left: 45upx;
		margin-left: 20upx;
		position: relative;
	}

	.timeOrLook text::before {
		content: '';
		position: absolute;
		width: 30upx;
		height: 30upx;
		background-image: url(@/static/image/look.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		left: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	.across,
	.oneAcross {
		justify-content: space-between;
		margin-top: 30upx;
	}

	.across .rightImages {
		width: 32%;
		margin-left: 0;
	}

	.oneAcross .rightImages {
		margin-left: 0;
		width: 100%;
		height: 400upx;
	}
</style>
