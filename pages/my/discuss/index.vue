<template>
	<view class="discuss">
		<view class="shopTitle">{{ postData.shopName }}</view>
		<view class="starList flex">
			<image :src="postData.star >= item?'/static/image/x1.png':'/static/image/x2.png'" v-for="item in 5" :key="item" @click="clickStart(item)" mode="aspectFill" class="starImg"></image>
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
			<textarea class="textarea" v-model="postData.content" placeholder-style="color:#999999;font-size:24upx" placeholder="亲，在这家店消费还满意吗？店家的环境和服务如何？"/>
			<view class="phtoBox">
				<view class="addPhto phtoImgBox" @click="addImageList">
					<!-- <image src="/static/logo.png" mode="aspectFill" class="phtoImg"></image> -->
					<image src="/static/image/add.png" mode="aspectFill" class="addPhtoImg"></image>
					<view>添加图片</view>
				</view>
				<view class="phtoImgBox" v-for="(img, index) in postData.imgList" :key="index">
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
		<view class="sbumitBtn" @click="sbumit">提交评论</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseURL: getApp().globalData.baseUrl,
				postData: {
					userCouponsId: '', //优惠券id
					star: 0,
					content: '',
					shopId: '',
					imgList: [],
					shopName: ''
				},
			}
		},
		onLoad(e) {
			if(e){
				this.postData.userCouponsId = e.id
				this.postData.shopName = e.shopname
				this.postData.shopId = e.shopid
			}
		},
		methods:{
			sbumit(){
				if(this.postData.star == 0){
					uni.showToast({
						icon: 'none',
						title: '请先打个分吧',
						duration: 2000
					})
					return
				} else if(this.postData.content == ''){
					uni.showToast({
						icon: 'none',
						title: '还没有填写评论哦~~',
						duration: 2000
					})
					return
				}
				uni.showLoading({
					title: '评论中...'
				})
				this.$request.post('/discounts/addComment', this.postData).then(res=>{
					if (res.code == 'succes') {
						uni.hideLoading()
						uni.showToast({
							title: '提交成功',
							duration: 2000
						})
						setTimeout(()=>{
							uni.redirectTo({
								url: '../../discover/groupBooking/index?id=' + this.postData.shopId
							})
						},1500)
					}
				})
			},
			clickStart(i){
				this.postData.star = i
				console.log(i)
			},
			deletImages(i){
				this.postData.imgList.splice(i, 1)
			},
			addImageList(){
				uni.chooseImage({
					count: 9,
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						// this.postData.imgList = this.postData.imgList.concat(tempFilePaths) 
						tempFilePaths.forEach((v)=>{
							// console.log(v)
							this.uploadFile(v)
						})
						// this.uploadFile(tempFilePaths)
						// console.log(this.postData.imgList)
						// this.uploadFile(tempFilePaths[0])
				    }
				});
			},
			uploadFile(file){
				uni.showLoading({
					title: '上传中...'
				})
				uni.uploadFile({
				    url: this.baseURL + '/upload/one/upLoadImg', //仅为示例，非真实的接口地址
					// files: file,
				    filePath: file,
				    name: 'fileList',
				    formData: {
				        
				    },
				    success: (res) => {
				    	console.log(JSON.parse(res.data).data)
						this.postData.imgList.push(JSON.parse(res.data).data)
				    	// if(type == 'z'){
				    	// 	this.uploadeCardZImg = JSON.parse(res.data).data
				    	// } else {
				    	// 	this.uploadeCardFImg = JSON.parse(res.data).data
				    	// }
				    	uni.hideLoading()
				    },
				    fail:()=>{
				    	uni.showToast({
				    		icon: 'none',
				    		title: '图片上传失败',
				    		duration: 2000
				    	})
				    	uni.hideLoading()
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
