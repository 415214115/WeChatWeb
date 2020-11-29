<template>
	<scroll-view class="groupBooking" :scroll-y="true">
		<view class="swiperBox">
			<swiper class="swiper" :autoplay="false" previous-margin="35px" next-margin="35px" :circular="true" :current="swiper.current"
			 @change="swiperChange">
				<swiper-item class="swiperItem" v-for="(item, index) in pageData.imgList">
					<image :src="item" class="swiperImage" :class="swiper.changeIndex == index?'changeIndex':''" mode="aspectFill"
					 :lazy-load="true"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="shopMsg">
			<view class="shopTitles">{{ pageData.name }}</view>
			<view class="score">
				<image src="/static/image/x1.png" class="scoreImage" mode="aspectFill"></image>
				<image src="/static/image/x1.png" class="scoreImage" mode="aspectFill"></image>
				<image src="/static/image/x1.png" class="scoreImage" mode="aspectFill"></image>
				<image src="/static/image/x2.png" class="scoreImage" mode="aspectFill"></image>
				<image src="/static/image/x2.png" class="scoreImage" mode="aspectFill"></image>
				<text class="scoreText">4.9分</text>
			</view>
			<view class="addressBox flex">
				<view class="addressLeft flex">
					<image src="/static/image/center/address.png" class="addressImage" mode="aspectFill"></image>
					<view class="shopAddressBox">
						<view class="shopAddress">{{ pageData.address }}</view>
						<view class="shopAddressDistance">（距离3.2KM）</view>
					</view>
				</view>
				<image src="/static/image/center/tel.png" class="telImage" mode="aspectFill" @click="telPhone(pageData.phone)"></image>
			</view>
		</view>
		<view class="couponList" v-if="couponData && couponData.length > 0">
			<view class="boxTitles">店铺团购券</view>
			<view class="" v-for="item in couponData">
				<view class="couponBox flex">
					<view class="couponMoney">
						<view class="moneyNum">
							￥<text class="moneyNumText">{{ item.money }}</text>
						</view>
						<view class="meetMoney">{{ item.context }}</view>
					</view>
					<view class="couponDetail">
						<view class="detailNum">
							<text class="detailNumText">{{ item.payMoney }} 元</text>
						</view>
						<!-- <view class="expireTime">有效期至2020.10.10</view> -->
						<!-- <view class="expireTime">购买后{{ item.payMoney }}小时内可用</view> -->
					</view>
					<view class="funcBtn" @tap="shopAddTuan(item)">3人团</view>
				</view>
				<view class="dumplingBox" v-if="item.tuanShow && item.tuanShow.length > 0">
					<view class="dumpling">
						<text>拼团中</text>已有{{item.tuanShow.length}}人参与拼团
					</view>
					<view class="dumplingTip">
						距离结束还剩下
						<!-- <text> -->
							<countdown :time="Number(`${item.tuanShow[0].endTime - new Date().getTime()}`)" @finish="onFinish" autoStart style="display: inline-block;color: #E7632B;margin-left: 20upx;">
								<template v-slot="{day, hour, minute, second, remain, time}">
									<view class="case">
										<!-- <view class="title">基本：</view> -->
										<view>{{day}} 天 {{hour<10?'0'+hour:hour}} : {{minute<10?'0'+minute:minute}} : {{second<10?'0'+second:second}}</view>				
									</view>
								</template>
							</countdown>
						<!-- </text> -->
					</view>
					<view class="userHeaderBox">
						<image src="/static/image/center/tx.png" v-for="item in 5" mode="aspectFill" class="userHeaderBoxImage"></image>
					</view>
				</view>
				<!-- <view class="dumplingBox">
					<view class="dumpling">
						<text>拼团中</text>已有1人参与拼团
					</view>
					<view class="dumplingTip">
						距离结束还剩下<text>21:59:13</text>
					</view>
					<view class="userHeaderBox">
						<image src="/static/image/center/tx.png" v-for="item in 5" mode="aspectFill" class="userHeaderBoxImage"></image>
					</view>
				</view> -->
			</view>
		</view>
		<view class="commentList">
			<view class="boxTitles">店铺评价</view>
			<view class="shopCommentList flex" v-for="item in 3">
				<image src="/static/logo.png" class="headerImage" mode="aspectFill"></image>
				<view class="shopCommentContent">
					<view class="topText flex">
						<view class="userBox">
							<view class="userName">客户名字</view>
							<view class="userStart">
								<image src="/static/image/x1.png" v-for="i in 5" class="userCommentImage" mode="aspectFill"></image>
							</view>
						</view>
						<view class="userTime">2020-11-17</view>
					</view>
					<view class="shopCommentConText astrictText">
						质量很好,品质绝对是杠杠的,不愧是来自景德镇的陶瓷,名不虚传!已经是爱不释手了
						质量很好,品质绝对是杠杠的,不愧是来自景德镇的陶瓷,名不虚传!已经是爱不释手了
					</view>
					<view class="lookAll">阅读全部</view>
					<view class="shopCommentImages">
						<image src="/static/logo.png" v-for="i in 5" class="shopCommentImagesList" mode="aspectFill"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="propBox" @touchmove.prevent @click="closeProp" v-if="palProp">
			<view class="propContent">
				<view class="propContentTitle flex">
					<view class="DPic">单份：4.00元</view>
					<view class="handlerBox flex">
						<image src="/static/image/center/jian.png" mode="aspectFill" class="handlerIMG"></image>
						<view class="DPicNum">1</view>
						<image src="/static/image/center/jia.png" mode="aspectFill" class="handlerIMG"></image>
					</view>
				</view>
				<view class="payBtn">
					立即支付<text>15.83元</text>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import countdown from '../../../components/countdown-timer/countdown-timer.vue'
	export default {
		components:{
			countdown
		},
		data() {
			return {
				pageData: '',
				couponData: '',
				swiper: {
					current: 0,
					changeIndex: 0
				},
				palProp: '',
				time: 5000,
				shopAddTuanData:{
					shopId: '',
					couponsId: '',
					num: 1,
					type: 0
				}
			}
		},
		onLoad(e) {
			console.log(e.id)
			// uni.getLocation({
			//     type: 'wgs84',
			//     success: function (res) {
			//         console.log('当前位置的经度：' + res.longitude);
			//         console.log('当前位置的纬度：' + res.latitude);
			//     }
			// });
			this.shopAddTuanData.shopId = e.id
			this.getPageData(e.id)
			this.getCoupon(e.id)
		},
		methods: {
			onFinish(){
				// 倒计时完成.
				console.log('倒计时完成')
			},
			swiperChange(e) {
				this.swiper.changeIndex = e.target.current
				console.log(e.target.current)
			},
			getPageData(id){
				this.$request.post('/shop/showShopInfo',{
					id: id
				}).then(res => {
					if (res.code == 'succes') {
						this.pageData = res.data
					}
				})
			},
			telPhone(phone){
				uni.makePhoneCall({
				    phoneNumber: phone //仅为示例
				});
			},
			getCoupon(id){
				this.$request.post('/shop/selectTuanByShop',{
					id: id
				}).then(res=>{
					if (res.code == 'succes') {
						console.log(res.data)
						this.couponData = res.data
					}
				})
			},
			shopAddTuan(item){
				this.shopAddTuanData.couponsId = item.id
				if(item.tuanShow.length > 0){
					// this.shopAddTuanData.type = item.tuanShow[0].id
					this.shopAddTuanData.type = 4
				}
				this.$request.get('/wechat/getToken').then(res=>{
					if (res.code == 'succes') {
						this.$request.post('/shop/addTuan',this.shopAddTuanData, res.data).then(res=>{
							if (res.code == 'succes'){
								this.getCoupon(this.shopAddTuanData.shopId)
							}
						})
					}
				})
				
			}
		}
	}
</script>

<style scoped>
	.swiperBox,
	.swiper {
		width: 100%;
		height: 360upx;
	}

	.swiperItem {
		padding: 20upx;
	}

	.swiperImage {
		width: 560upx;
		height: 260upx;
		position: relative;
		top: 30upx;
		border-radius: 20upx;
		transition: top .2s, height .2s;
	}

	.changeIndex {
		height: 320upx;
		top: 0;
	}

	.shopMsg,
	.couponList {
		padding: 30upx;
		background: #FFFFFF;
		border-bottom: 20upx solid #F0F0F0;
	}

	.shopTitles {
		color: #2C3246;
		font-size: 36upx;
		font-size: 500;
	}

	.score {
		margin-top: 20upx;
		border-bottom: 1px solid #E0E0E0;
		padding-bottom: 30upx;
	}

	.scoreImage {
		width: 26upx;
		height: 26upx;
		margin-right: 10upx;
	}

	.scoreText {
		color: #000000;
		font-size: 28upx;
		margin-left: 26upx;
	}

	.addressBox {
		padding: 30upx 15upx;
		justify-content: space-between;
		flex-wrap: nowrap;
		align-items: center;
	}

	.addressImage {
		width: 30upx;
		height: 40upx;
		margin-right: 40upx;
	}

	.addressLeft {
		justify-content: space-between;
		flex-wrap: nowrap;
		align-items: center;
	}

	.shopAddressBox {
		width: 500upx;
		padding-right: 50upx;
		border-right: 1px solid #EEEEEE;
	}

	.shopAddress {
		color: #000000;
		font-size: 28upx;
	}

	.telImage {
		width: 50upx;
		height: 50upx;
		border-radius: 100%;
	}

	.shopAddressDistance {
		color: #8E8E8E;
		font-size: 20upx;
	}

	.boxTitles {
		color: #3A3A3A;
		font-size: 36upx;
		font-weight: 600;
	}

	.couponBox {
		width: 100%;
		height: 180upx;
		border-radius: 20upx;
		justify-content: space-between;
		align-items: center;
		/* box-shadow: 0 0 10upx 1px rgba(0, 0, 0, 0.2); */
		padding: 0 20upx;
		margin-top: 30upx;
		position: relative;
		overflow: hidden;
		background-image: url(@/static/image/youhuiquan.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	/* .couponBox::before,
	.couponBox::after {
		content: '';
		position: absolute;
		width: 20upx;
		height: 20upx;
		background: #FFFFFF;
		box-shadow: 0 0 10upx 1px rgba(0, 0, 0, 0.2);
		border-radius: 100%;
		z-index: 1;
		left: 180upx;
	}

	.couponBox::before {
		top: -10upx;
	}

	.couponBox::after {
		bottom: -10upx;
	} */

	.couponMoney {
		width: 170upx;
		text-align: center;
		border-right: 1px dotted #EEEEF0;
	}

	.moneyNum {
		color: #FF6200;
		font-size: 28upx;
		font-weight: normal;
	}

	.moneyNumText {
		font-size: 68upx;
	}

	.meetMoney {
		font-size: 20upx;
		color: #989AA3;
	}

	.detailNum {
		font-size: 24upx;
		color: #2C3246;
		font-weight: 600;
	}

	.detailNumText {
		font-size: 36upx;
	}

	.expireTime {
		color: #697087;
		font-size: 28upx;
	}

	.funcBtn {
		width: 160upx;
		height: 60upx;
		background: linear-gradient(180deg, #FE4A32 0%, #FE7E48 100%);
		box-shadow: 0px 2upx 20upx 0px rgba(251, 126, 50, 0.5);
		border-radius: 64upx;
		line-height: 60upx;
		text-align: center;
		color: #FFFFFF;
		margin-right: 10upx;
	}

	.shopCommentList {
		padding: 30upx;
		border-bottom: 1px solid #F4F4F4;
		justify-content: space-between;
		/* align-items: center; */
	}

	.commentList .boxTitles {
		padding: 30upx 30upx 0 30upx;
	}

	.headerImage {
		width: 60upx;
		height: 60upx;
		border-radius: 100%;
		margin-right: 20upx;
	}

	.shopCommentContent {
		width: 600upx;
	}

	.topText {
		justify-content: space-between;
	}

	.userName {
		color: #252525;
		font-size: 32upx;
		font-weight: 500;
	}

	.userCommentImage {
		width: 18upx;
		height: 18upx;
		margin-right: 10upx;
		margin-top: 10upx;
	}

	.userTime {
		font-size: 24upx;
		color: #5C5C5C;
	}

	.lookAll {
		color: #2E6EFF;
		font-size: 24upx;
		margin-top: 15upx;
		margin-bottom: 30upx;
	}

	.shopCommentConText {
		color: #252525;
		font-size: 30upx;
		margin-top: 30upx;
	}

	.astrictText {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
		overflow-wrap: break-word;
		white-space: wrap;
		text-align: justify;
	}

	.shopCommentImages {
		width: 100%;
		overflow-x: auto;
		white-space: nowrap;
	}

	.shopCommentImagesList {
		width: 180upx;
		height: 130upx;
		margin-left: 20upx;
	}

	.shopCommentImagesList:first-child {
		margin-left: 0;
	}

	.dumplingBox {
		padding: 30upx 0;
		border-bottom: 1px solid #F2F3F5;
	}

	.dumpling {
		color: #000000;
		font-size: 36upx;
	}

	.dumpling text {
		color: #EC6142;
		margin-right: 20upx;
	}

	.dumplingTip {
		color: #A5A5A5;
		font-size: 28upx;
		margin-top: 30upx;
	}

	.dumplingTip text {
		color: #E7632B;
		margin-left: 20upx;
	}

	.userHeaderBox {
		margin-top: 30upx;
	}

	.userHeaderBoxImage {
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		margin-right: 40upx;
		position: relative;
	}

	.userHeaderBoxImage:first-child::after {
		content: '团长';
		position: absolute;
		width: 50upx;
		height: 26upx;
		/* padding: 10upx 20upx; */
		text-align: center;
		line-height: 26upx;
		border-radius: 64upx;
		background: #EC632C;
		color: #FFFFFF;
		top: 22px;
		left: 8px;
		font-size: 16upx;
	}

	.propBox {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 99;
	}

	.propContent {
		width: 100%;
		height: 300upx;
		background: #FFFFFF;
		right: 0;
		left: 0;
		bottom: 0;
		position: absolute;
		z-index: 100;
		padding: 50upx 60upx;
	}

	.DPic {
		color: #343434;
		font-size: 50upx;
		font-weight: normal;
	}

	.handlerIMG,
	.DPicNum {
		width: 50upx;
		height: 50upx;
	}

	.propContentTitle,
	.handlerBox {
		justify-content: space-between;
		align-items: center;
	}

	.propContentTitle {
		margin-bottom: 50upx;
	}

	.DPicNum {
		text-align: center;
		line-height: 50upx;
	}

	.payBtn {
		text-align: center;
		border-radius: 64upx;
		color: #FFFFFF;
		height: 90upx;
		line-height: 90upx;

		background: linear-gradient(124deg, #FF8A00 0%, #FFB415 100%);
	}

	.payBtn text {
		font-size: 50upx;
		font-weight: normal;
	}
</style>
