<template>
	<view class="pageBox">
		<view class="pageTopFunc">
			<view class="stepBox">
				<view class="stepNext flex">
					<image src="/static/image/center/sfz.png" mode="aspectFill" class="stepNextImg stepImg"></image>
					<image src="/static/image/center/shenhe.png" mode="aspectFill" class="stepNextImg"></image>
					<!-- <image src="/static/image/center/shenhe1.png" mode="aspectFill" class="stepNextImg stepImg"></image> -->
					<image src="/static/image/center/quan.png" mode="aspectFill" class="stepNextImg"></image>
					<view class="stepNextProcess">
						<view class="stepNextProcessView"></view>
					</view>
				</view>
				<view class="stepNext flex">
					<view>提交</view>
					<view>审核</view>
					<view>领劵</view>
				</view>
			</view>
			<view class="uploadTip">
				<view class="uploadTipTitle">请拍摄并上传身份证</view>
				<image src="/static/image/center/sz.png" mode="aspectFill" class="uploadTipImg"></image>
				<view class="uploadTipText">身份证正面</view>
				<image src="/static/image/center/sb.png" mode="aspectFill" class="uploadTipImg" style="margin-top: 50upx;"></image>
				<view class="uploadTipText">身份证背面</view>
			</view>
			<view class="">
				<view class="discountDouponList">
					<view class="listItem flex stateOne">
						<view class="discountDouponMsg">
							<view class="money"><text>88</text>元</view>
							<view class="fullReduction">满500元可用</view>
						</view>
						<view class="shopBox">
							<view class="shopName">店铺名字店铺名字店铺名字店铺名字店铺名字店铺名字</view>
							<view class="expireTime">2020-11-15 23:24:28到期</view>
						</view>
						<view class="funcBtn">立即使用</view>
					</view>
					<view class="listItem flex stateTwo">
						<view class="discountDouponMsg">
							<view class="money"><text>88</text>元</view>
							<view class="fullReduction">满500元可用</view>
						</view>
						<view class="shopBox">
							<view class="shopName">店铺名字店铺名字店铺名字店铺名字店铺名字店铺名字</view>
							<view class="expireTime">2020-11-15 23:24:28到期</view>
						</view>
						<view class="funcBtn">已使用</view>
					</view>
					<view class="listItem flex stateTwo">
						<view class="discountDouponMsg">
							<view class="money"><text>5</text>元</view>
							<view class="fullReduction">满60元可用</view>
						</view>
						<view class="shopBox">
							<view class="shopName">店铺名字店铺名字店铺名字店铺名字店铺名字店铺名字</view>
							<view class="expireTime">2020-11-15 23:24:28到期</view>
						</view>
						<view class="funcBtn">已过期</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
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
		width: 66.6%;
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
</style>
