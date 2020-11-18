<template>
	<view class="pageBox">
		<view class="pageTopFunc">
			<view class="stepBox">
				<view class="stepNext flex">
					<image src="/static/logo.png" mode="aspectFill" class="stepNextImg"></image>
					<image src="/static/logo.png" mode="aspectFill" class="stepNextImg"></image>
					<image src="/static/logo.png" mode="aspectFill" class="stepNextImg"></image>
					<view class="stepNextProcess">
						<view class="stepNextProcessView"></view>
					</view>
				</view>
				<view class="stepNext flex">
					<view style="margin-left: -40upx;">分享至朋友圈</view>
					<view style="margin-left: -40upx;">审核点赞过百</view>
					<view>领劵</view>
				</view>
			</view>
			<view class="uploadTip">
				<view class="posterBox">
					<image src="/static/logo.png" mode="aspectFill" class="posterBgImg"></image>
					<view class="imagesTexts">
						今天的努力，<br />
						为了让明天毫不费力！
					</view>
					<view class="bottomBox">
						<view class="bottomBoxCodeBox flex">
							<view class="">
								<view class="CodeBoxTirle">扫描二维码，跟我一起学习</view>
								<view class="CodeBoxTirleForm">来自 [go平台]公众号</view>
							</view>
							<image src="/static/logo.png" mode="aspectFill" class="codeImg"></image>
						</view>
						<view class="bottomBoxCodeBoxTip">现在加入，还有新人大礼包哦</view>
					</view>
				</view>
				<view class="submitBtn">上传提交</view>
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

	.posterBox {
		width: 470upx;
		height: 760upx;
		margin-top: 60upx;
		margin-left: 140upx;
		position: relative;
		background: #F7F8FA;
		box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.15);
	}

	.posterBgImg {
		width: 470upx;
		height: 520upx;
	}

	.bottomBox {
		width: 436upx;
		height: 212upx;
		margin: -8upx 17upx 25upx 17upx;
		background: #FFFFFF;
		padding: 10upx;
	}

	.bottomBoxCodeBox {
		justify-content: space-between;
		align-items: center;
		padding-bottom: 20upx;
		border-bottom: 2upx dotted #868686;
	}

	.CodeBoxTirle {
		color: #2A2A2A;
		font-size: 22upx;
		font-weight: 500;
		margin-bottom: 20upx;
	}

	.CodeBoxTirleForm {
		color: #2A2A2A;
		font-size: 18upx;
		font-weight: normal;
	}

	.codeImg {
		width: 100upx;
		height: 100upx;
	}

	.bottomBoxCodeBoxTip {
		color: #2A2A2A;
		font-size: 20upx;
		text-align: center;
		line-height: 80upx;
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

	.imagesTexts {
		position: absolute;
		z-index: 1;
		top: 70upx;
		left: 40upx;
		text-align: left;
		color: #4A4A4A;
		font-size: 36upx;
		font-weight: 600;
	}

	.imagesTexts::before,
	.imagesTexts::after {
		position: absolute;
		color: #4A4A4A;
		font-size: 40upx;
		font-weight: 600;
	}

	.imagesTexts::before {
		content: '“';
		left: -30upx;
		top: -30upx;
	}

	.imagesTexts::after {
		content: '”';
		right: -30upx;
		bottom: -30upx;
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
