<template>
	<scroll-view class="content" :scroll-y="true">
		<view class="swiperBox">
			<swiper class="swiper" :autoplay="true">
				<swiper-item v-for="item in 4">
					<image src="/static/logo.png" mode="aspectFill" :lazy-load="true"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="ticketBox flex">
			<view class="ticketList" @tap="goToPage('../getCoupon/index')">
				<image src="/static/logo.png" class="ticketImg" mode="aspectFill"></image>
				<view>免费券</view>
			</view>
			<view class="ticketList" @tap="goToPage()">
				<image src="/static/logo.png" class="ticketImg" mode="aspectFill"></image>
				<view>积赞劵</view>
			</view>
			<view class="ticketList" @tap="goToPage()">
				<image src="/static/logo.png" class="ticketImg" mode="aspectFill"></image>
				<view>更多券</view>
			</view>
		</view>
		<view class="newsBox flex">
			<view class="newsLeftTitle">
				<image src="/static/image/newsIcon.png" class="newsIcon" mode="aspectFill"></image>
			</view>
			<view class="newsListSwiper">
				<swiper class="newsswiper" :autoplay="true" :vertical="true" :display-multiple-items="2">
					<swiper-item v-for="item in 4">
						<view class="newsswiperList" @tap="toNewsDetail">河北省人民政府办公厅关于省政府部...河北省人民政府办公厅关于省政府部...</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="newsListBox">
			<view class="newsListHeader">
				<view class="newsListHeaderText selectHeaderText">要闻</view>
				<view class="newsListHeaderText" v-for="item in 11">要闻</view>
			</view>
			<view class="newsListBoxContent">
				<!-- 样式一 -->
				<view class="contBox flex" @tap="toNewsDetail">
					<view class="textBox">
						<view class="headerTitle">
							向着网络强国阔步前行党的十八大以来网信事业发展述评
							向着网络强国阔步前行党的十八大以来网信事业发展述评
							向着网络强国阔步前行党的十八大以来网信事业发展述评
						</view>
						<view class="timeOrLook">
							2020-11-15
							<text>1265</text>
						</view>
					</view>
					<image src="/static/logo.png" class="rightImages" mode="aspectFill"></image>
				</view>
				<!-- 样式二 -->
				<view class="contBox" @tap="toNewsDetail">
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
				</view>
				<!-- 样式三 -->
				<view class="contBox" @tap="toNewsDetail">
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
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				swiper: {
					data: [1,2,3,4,5,6,78]
				}
			}
		},
		onLoad() {

		},
		methods: {
			toNewsDetail(){
				uni.navigateTo({
					url: '../newsDetail/index?id=12'
				})
			},
			goToPage(url){
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style scoped>
	.content {
		background: #F1F1F1;
	}
	.swiperBox,.swiper,.swiper image{
		width: 100%;
		height: 490upx;
	}
	.ticketBox{
		padding: 0 24upx;
		justify-content: space-between;
		position: relative;
		z-index: 5;
		margin-top: -48upx;
	}
	.ticketList{
		width: 230upx;
		height: 225upx;
		background: #FFFFFF;
		text-align: center;
		font-size: 24upx;
		font-weight: 600;
		box-shadow: 0 0 20upx 1upx rgba(0,0,0,0.2);
	}
	.ticketImg{
		position: relative;
		width: 80upx;
		height: 80upx;
		margin-top: 50upx;
		margin-bottom: 20upx;
		border-radius: 100%;
	}
	.newsBox{
		background: #FFFFFF;
		margin-bottom: 20upx;
		padding: 25upx;
		margin-top: 30upx;
		justify-content: space-between;
	}
	.newsLeftTitle{
		font-size: 50upx;
		position: relative;
		padding-right: 20upx;
		margin-right: 20upx;
	}
	.newsIcon{
		width: 75upx;
		height: 72upx;
		margin-top: 28upx;
	}
	.newsLeftTitle::after{
		position: absolute;
		content: '';
		width: 1px;
		height: 66upx;
		top: 30upx;
		right: 0;
		background: #F4F4F4;
	}
	.newsswiper{
		height: 100upx;
		margin-top: 20upx;
	}
	.newsListSwiper{
		width: 560upx;
	}
	.newsswiperList{
		color: #2E2E2E;
		font-size: 28upx;
		position: relative;
		padding-left: 25upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.newsswiperList::before{
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
	.newsListBox{
		background: #FFFFFF;
	}
	.newsListHeader{
		width: 100%;
		padding: 30upx 0;
		border-bottom: 1px solid #F4F4F4;
		font-size: 0;
		white-space: nowrap;
		overflow-x: auto;
	}
	.newsListHeaderText{
		margin-left: 30upx;
		position: relative;
		font-size: 28upx;
		color: #878A8F;
		display: inline-block;
	}
	.newsListHeaderText:last-child{
		margin-right: 30upx;
	}
	.selectHeaderText{
		color: #222222;
	}
	.selectHeaderText::before{
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
	.newsListBoxContent{
		padding: 0 30upx;
	}
	.contBox{
		justify-content: space-between;
		border-bottom: 1px solid #F4F4F4;
		padding: 30upx 0;
	}
	.headerTitle{
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
	.textBox{
		width: 420upx;
		height: 60upx;
		
	}
	.rightImages{
		width: 230upx;
		height: 165upx;
		border-radius: 6upx;
		margin-left: 50upx;
	}
	.timeOrLook{
		color: #8F8F93;
		font-size: 25upx;
		margin-top: 20upx;
	}
	.timeOrLook text{
		margin-left: 65upx;
		padding-left: 45upx;
		margin-left: 20upx;
		position: relative;
	}
	.timeOrLook text::before{
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
	.across,.oneAcross{
		justify-content: space-between;
		margin-top: 30upx;
	}
	.across .rightImages{
		width: 32%;
		margin-left: 0;
	}
	.oneAcross .rightImages{
		margin-left: 0;
		width: 100%;
		height: 400upx;
	}
</style>
