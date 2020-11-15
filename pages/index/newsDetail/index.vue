<template>
	<scroll-view class="caseDetails" :scroll-y="true" :scroll-x="false">
		<!-- <image class="topcaseImage" :lazy-load="true" :src="pageData.cover" mode="widthFix"></image> -->
		<view class="caseTitle">
			<view class="caseTitleText">本插件采集的数据、发送的服务器地址、以及数据用途说明：本插件采集的数据、发送的服务器地址、以及数据用途说明：</view>
			<view class="timeLook">
				<text></text>
				<text class="time">2020-11-15 21:38:39</text>
				<!-- <text class="look">1322</text> -->
			</view>
		</view>
		<view class="caseCont">
			<u-parse :content="test" @preview="preview" @navigate="navigate" />
		</view>
	</scroll-view>
</template>

<script>
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		components: {
			uParse
		},
		data() {
			return {
				test: '喊尽快四大寡妇俩速度和方法付款了大后年你们，VB，都没暖手宝上岛咖啡',
				pageData: ''
			}
		},
		onLoad(e) {
			console.log(e.id)
		},
		methods: {

			preview(src, e) {
				// do something
			},
			navigate(href, e) {
				// do something
			}
		}
	}
</script>

<style scoped>
	.caseDetails {
		padding: 20upx;
	}

	.timeLook,
	.caseImage,
	.texts,
	.topcaseImage {
		width: 710upx;
	}

	.caseTitle {
		/* border-bottom: 1px solid #EEEEEE; */
		margin-bottom: 20upx;
	}

	.caseTitleText {
		width: 710upx;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 40upx;
		text-align: justify;
		margin-bottom: 30upx;
		color: #222222;
		font-size: 36upx;
		font-weight: 600;
	}

	.timeLook {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
		margin-bottom: 30upx;
	}

	.timeLook {
		font-size: 20upx;
		color: #555555;
	}

	.look {
		position: relative;
		padding-left: 34upx;
	}

	.look::before {
		content: '';
		position: absolute;
		width: 20upx;
		height: 20upx;
		/* background-image: url(@/static/image/index/eye.png); */
		background-size: 100% 100%;
		background-repeat: no-repeat;
		left: 0;
		top: 6upx;
	}

	.texts {
		line-height: 48upx;
		margin-top: 20upx;
	}

	.topcaseImage {
		margin-bottom: 20upx;
	}

	.caseCont {
		color: #555555;
		line-height: 48upx;
		text-align: justify;
	}
</style>
