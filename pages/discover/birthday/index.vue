<template>
	<view class="pageBox">
		<view class="pageTopFunc">
			<view class="stepBox">
				<view class="stepNext flex">
					<image src="/static/image/center/sfz.png" mode="aspectFill" class="stepNextImg stepImg"></image>
					<image :src="pageData.status>=1?'/static/image/center/shenhe1.png':'/static/image/center/shenhe.png'" mode="aspectFill" class="stepNextImg" :class="pageData.status==1?'stepImg':''"></image>
					<image :src="pageData.status==2?'/static/image/center/quan1.png':'/static/image/center/quan.png'" mode="aspectFill" class="stepNextImg" :class="pageData.status==2?'stepImg':''"></image>
					<view class="stepNextProcess">
						<view class="stepNextProcessView" :style="{width: pageData.status==1?'66.6%':pageData.status==2?'100%':'33.3%'}"></view>
					</view>
				</view>
				<view class="stepNext flex">
					<view>提交</view>
					<view>审核</view>
					<view>领劵</view>
				</view>
			</view>
			<view class="uploadTip">
				<input class="uni-input" type="idcard" v-model="idCard" :disabled="pageData == '' || pageData == null || pageData.status == 3?false:true" placeholder="身份证号码" />
				<view class="uploadTipTitle">请拍摄并上传身份证</view>
				<image :src="uploadeCardZImg?uploadeCardZImg:'/static/image/center/sz.png'" @click="uploadeCardZ" mode="aspectFill" class="uploadTipImg"></image>
				<view class="uploadTipText">身份证正面</view>
				<image :src="uploadeCardFImg?uploadeCardFImg:'/static/image/center/sb.png'" @click="uploadeCardF" mode="aspectFill" class="uploadTipImg" style="margin-top: 50upx;"></image>
				<view class="uploadTipText">身份证背面</view>
				<view class="submitBtn" v-if="pageData == '' || pageData == null || pageData.status == 3" @click="submitCard">上传提交</view>
			</view>
			<view class="">
				<view class="discountDouponList">
					<view class="listItem flex" v-for="item in cuponList" :key="item.id" :class="item.states>0?'stateTwo':'stateOne'">
						<view class="discountDouponMsg">
							<view class="money"><text>{{ item.money }}</text>元</view>
							<view class="fullReduction">{{ item.name }}</view>
						</view>
						<view class="shopBox">
							<view class="shopName">{{ item.shopName }}</view>
							<view class="expireTime">领取后{{ item.overTime }}小时后到期</view>
						</view>
						<view class="funcBtn" v-if="item.states == 0" @click="getCupons(item)">立即领取</view>
						<view class="funcBtn" v-if="item.states == 1" >已领取</view>
						<view class="funcBtn" v-if="item.states == 2" >不可领取</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import {baseURL} from '../../../static/js/request.js'
	export default{
		data(){
			return{
				uploadeCardZImg: '',
				uploadeCardFImg: '',
				idCard: '',
				baseURL: getApp().globalData.baseUrl,
				pageData: '',
				cuponList: ''
			}
		},
		onLoad() {
			this.getCuponList()
			this.getPageData()
		},
		methods:{
			getCupons(item){
				this.$request.post('/discounts/getUserCoupons', {
					couponsId: item.id,
					shopId: item.shopId
				}).then(res=>{
					if (res.code == 'succes') {
						uni.showToast({
							icon: 'none',
							title: '领取成功',
							duration: 2000
						})
						this.getCuponList()
					}
				})
			},
			submitCard(){
				this.$request.post('/discounts/addAuditCoupons',{
					img: this.uploadeCardZImg,
					backImg: this.uploadeCardFImg,
					idCard: this.idCard,
					type: '1'
				}).then(res=>{
					if (res.code == 'succes') {
						uni.showToast({
							icon: 'success',
							title: '提交成功',
							duration: 2000
						})
						this.getPageData()
					}
				})
			},
			getPageData(){
				uni.showLoading({
					title: '加载中...'
				})
				this.$request.get('/discounts/getShenRiInfo',{
					type: '1'
				}).then(res=>{
					if (res.code == 'succes') {
						this.pageData = res.data
						this.uploadeCardZImg = this.pageData.img
						this.uploadeCardFImg = this.pageData.backImg
						this.idCard = this.pageData.idCard
						uni.hideLoading()
					}
				})
			},
			getCuponList(){
				this.$request.get('/discounts/showBirthdayCouponsList').then(res=>{
					if (res.code == 'succes') {
						this.cuponList = res.data
					}
				})
			},
			uploadeCardZ(){
				if(this.pageData!= null && this.pageData!= '' && this.pageData.status == 2 || this.pageData.status == 1) return
				uni.chooseImage({
					count: 1,
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						this.uploadFile(tempFilePaths[0], 'z')
				    }
				});
			},
			uploadeCardF(){
				if(this.pageData!= null && this.pageData!= '' && this.pageData.status == 2 || this.pageData.status == 1) return
				uni.chooseImage({
					count: 1,
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths;
						this.uploadFile(tempFilePaths[0], 'f')
				        
				    }
				});
			},
			uploadFile(file, type){
				uni.showLoading({
					title: '上传中...'
				})
				uni.uploadFile({
				    url: this.baseURL + '/upload/one/upLoadImg',
				    filePath: file,
				    name: 'fileList',
				    success: (res) => {
						console.log(JSON.parse(res.data).data)
						if(type == 'z'){
							this.uploadeCardZImg = JSON.parse(res.data).data
						} else {
							this.uploadeCardFImg = JSON.parse(res.data).data
						}
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
	.pageBox {
		width: 100%;
		min-height: 100vh;
		background: #F5F5F5;
	}

	.pageTopFunc {
		/* padding: 10upx; */
	}

	.stepBox {
		margin-bottom: 50upx;
		padding: 10upx;
		border-bottom: 1upx solid #F0F0F9;
	}

	.stepNext {
		padding: 0 100upx;
		position: relative;
		justify-content: space-between;
		color: #666666;
		font-size: 24upx;
		line-height: 52upx;
	}

	.stepNextImg {
		width: 60upx;
		height: 60upx;
		position: relative;
		z-index: 9;
		border-radius: 100%;
		padding: 12upx;
		border: 1upx solid #CCCCCC;
		background: #FFFFFF;
	}
	
	.stepImg{
		background: #F95D19;
		/* padding: 12upx; */
		
		/* border: 8upx solid rgba(249,93,25,0.5); */
		border: 8upx solid #FCBDA2;
	}
	
	.stepNextProcess {
		position: absolute;
		width: 472upx;
		height: 4upx;
		background: #CCCCCC;
		top: 50%;
		margin-top: -2upx;
		left: 128upx;
	}

	.stepNextProcessView {
		width: 33.3%;
		height: 100%;
		background: #F95D19;
	}

	.uploadTip {
		text-align: center;
		border-bottom: 1upx solid #E8E8E8;
		padding-bottom: 40upx;
	}

	.uploadTipImg {
		width: 390upx;
		height: 240upx;
		border-radius: 15upx;
	}

	.uploadTipTitle {
		color: #2C2C2C;
		font-size: 30upx;
		padding: 30upx;
	}

	.uploadTipText {
		color: #666666;
		font-size: 26upx;
		margin-top: 20upx;
	}



	.discountDouponList {
		padding: 40upx 30upx;
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
	.submitBtn {
		width: 470upx;
		margin-top: 30upx;
		margin-left: 140upx;
		color: #FFFFFF;
		text-align: center;
		height: 80upx;
		line-height: 80upx;
		border-radius: 64upx;
		background: linear-gradient(180deg, #FA463C 0%, #FA7B54 100%);
		box-shadow: 0px 2px 20px 0px rgba(247, 123, 68, 0.5);
	}
	.uni-input{
		width: 80%;
		margin-left: 10%;
		text-align: left;
		border: 1px solid #FA463C;
		border-radius: 10upx;
		padding: 10upx 20upx;
		height: 64upx;
	}
</style>
