<template>
	<view class="discuss">
		<view class="shopTitle">店名店名店名店名店名店名店名店名店名店名店名店名</view>
		<view class="starList flex">
			<image :src="startIndex >= item?'/static/image/x1.png':'/static/image/x2.png'" v-for="item in 5" :key="item" @click="clickStart(item)" mode="aspectFill" class="starImg"></image>
			<!-- <image src="/static/image/x1.png" mode="aspectFill" class="starImg"></image>
			<image src="/static/image/x1.png" mode="aspectFill" class="starImg"></image>
			<image src="/static/image/x1.png" mode="aspectFill" class="starImg"></image>
			<image src="/static/image/x2.png" mode="aspectFill" class="starImg"></image> -->
		</view>
		<view class="starTip">觉得怎么样，打个分吧</view>
		<!-- <view class="shortcut flex">
			<view class="shortcutList selectShortcut">味道不错</view>
			<view class="shortcutList selectShortcut">味道不错</view>
			<view class="shortcutList">味道不错</view>
			<view class="shortcutList">味道不错</view>
			<view class="shortcutList">味道不错</view>
			<view class="shortcutList">味道不错</view>
			<view class="shortcutList">味道不错</view>
			<view class="shortcutList">味道不错</view>
		</view> -->
		<view class="inputTextBox">
			<textarea class="textarea" placeholder-style="color:#999999;font-size:24upx" placeholder="亲，在这家店消费还满意吗？店家的环境和服务如何？（至少要写10个字哦~）"/>
			<view class="phtoBox">
				<view class="addPhto phtoImgBox" @click="addImageList">
					<!-- <image src="/static/logo.png" mode="aspectFill" class="phtoImg"></image> -->
					<image src="/static/image/add.png" mode="aspectFill" class="addPhtoImg"></image>
					<view>添加图片</view>
				</view>
				<view class="phtoImgBox" v-for="(img, index) in imageList" :key="index">
					<view class="deleteIcon" @click="deletImages(index)">-</view>
					<image :src="img" mode="aspectFill" class="phtoImg"></image>
				</view>
				<!-- <view class="phtoImgBox">
					<image src="/static/logo.png" mode="aspectFill" class="phtoImg"></image>
				</view>
				<view class="phtoImgBox">
					<image src="/static/logo.png" mode="aspectFill" class="phtoImg"></image>
				</view>
				<view class="phtoImgBox">
					<image src="/static/logo.png" mode="aspectFill" class="phtoImg"></image>
				</view>
				<view class="phtoImgBox">
					<image src="/static/logo.png" mode="aspectFill" class="phtoImg"></image>
				</view>
				<view class="phtoImgBox">
					<image src="/static/logo.png" mode="aspectFill" class="phtoImg"></image>
				</view>
				<view class="phtoImgBox">
					<image src="/static/logo.png" mode="aspectFill" class="phtoImg"></image>
				</view> -->
			</view>
		</view>
		<view class="sbumitBtn">提交评论</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				startIndex: 0,
				imageList: []
			}
		},
		methods:{
			clickStart(i){
				this.startIndex = i
				console.log(i)
			},
			deletImages(i){
				this.imageList.splice(i, 1)
			},
			addImageList(){
				uni.chooseImage({
					count: 9,
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						this.imageList = this.imageList.concat(tempFilePaths) 
						console.log(this.imageList)
						// this.uploadFile(tempFilePaths[0])
				    }
				});
			},
			uploadFile(file){
				uni.uploadFile({
				    url: baseURL + '/upload', //仅为示例，非真实的接口地址
				    filePath: file,
				    name: 'file',
				    formData: {
				        'user': 'test'
				    },
				    success: (uploadFileRes) => {
				        console.log(uploadFileRes.data);
				    }
				});
			}
		}
	}
</script>

<style scoped>
	.discuss {
		padding: 30upx;
	}

	.shopTitle {
		color: #333333;
		font-size: 48upx;
		text-align: center;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: 500;
		margin-bottom: 50upx;
	}

	.starList {
		justify-content: space-between;
		flex-wrap: nowrap;
		width: 420upx;
		position: relative;
		left: 0;
		right: 0;
		margin: auto;
	}

	.starImg {
		width: 50upx;
		height: 50upx;
	}

	.starTip {
		margin-top: 30upx;
		text-align: center;
		color: #999999;
		font-size: 24upx;
		border-bottom: 1px solid #E5E5E5;
		padding-bottom: 50upx;
	}

	.shortcut {
		justify-content: flex-start;
		padding: 50upx 0;
		border-bottom: 1px solid #E5E5E5;
		flex-wrap: wrap;
	}

	.shortcutList {
		padding: 15upx 40upx;
		border-radius: 64upx;
		color: #666666;
		font-size: 26upx;
		border: 1px solid #CCCCCC;
		margin-right: 15upx;
		margin-bottom: 24upx;
	}

	.selectShortcut {
		color: #FFFFFF;
		background: linear-gradient(0deg, #FE7C48, #FE4C32);
		border: none;
	}
	.inputTextBox{
		padding: 30upx;
		border-bottom: 1px solid #E5E5E5;
	}
	.sbumitBtn{
		width: 690upx;
		height: 100upx;
		background: linear-gradient(0deg, #FE7C48, #FE4C32);
		border-radius: 64upx;
		margin-top: 100upx;
		text-align: center;
		line-height: 100upx;
		color: #FFFFFF;
		font-weight: 500;
		font-size: 28upx;
	}
	.textarea{
		color: #999999;
		font-size: 24upx;
		line-height: 46upx;
	}
	.phtoBox{
		width: 100%;
		height: 160upx;
		white-space: nowrap;
		justify-content: baseline;
		overflow-x: auto;
		overflow-y: hidden;
		position: relative;
		padding-left:150upx;
		padding-top: 30upx;
	}
	.phtoImg,.phtoImgBox{
		width: 130upx;
		height: 130upx;
	}
	.phtoImgBox{
		margin-left: 20upx;
		display: inline-block;
		position: relative;
	}
	.addPhtoImg{
		width: 46upx;
		height: 40upx;
		margin: 20upx 0 10upx 0;
	}
	.addPhto{
		width: 130upx;
		height: 130upx;
		background: linear-gradient(0deg, #FE7C48, #FE4C32);
		font-size: 20upx;
		color: #FFFFFF;
		text-align: center;
		position: absolute;
		top: 30upx;
		z-index: 9;
		left: 0;
	}
	.deleteIcon{
		position: absolute;
		z-index: 9;
		background: #FE4C32;
		color: #FFFFFF;
		border-radius: 100%;
		width: 30upx;
		height: 30upx;
		text-align: center;
		line-height: 30upx;
		right: -10upx;
		top: -10upx;
	}
</style>
