<template>
	<view class="getCoupon">
		<view class="searchBox">
			<view class="searchInputBox flex">
				<image src="/static/image/searchIcon.png" class="searchIcon" mode="scaleToFill"></image>
				<input class="uni-input" v-model="search" placeholder="搜索店铺" placeholder-class="placeholderClass" confirm-type="search"
				 @confirm="confirmSubmit" />
				 <view class="searchBtns" @click="confirmSubmit">搜索</view>
			</view>
		</view>
		<view class="couponContent">
			<view class="PTitle">白嫖券</view>
		</view>
		<view class="couponBoxList">
			<view class="couponBoxListItem" @tap="goToPage('../../index/freeOfCharge/index')">
				<image src="/static/image/center/c1.png" class="couponBoxListImg" mode="scaleToFill"></image>
				<view class="couponBoxListText">
					<view class="couponBoxListTextTitle">每日免费</view>
					<view class="couponBoxListTextDerail">TOP.100</view>
				</view>
			</view>
			<view class="couponBoxListItem" @tap="goToPage('../share/index')">
				<image src="/static/image/center/c2.png" class="couponBoxListImg" mode="scaleToFill"></image>
				<view class="couponBoxListText">
					<view class="couponBoxListTextTitle">积赞领劵</view>
					<view class="couponBoxListTextDerail">THE TEST</view>
				</view>
			</view>
			<view class="couponBoxListItem" @tap="goToPage('../birthday/index')">
				<image src="/static/image/center/c3.png" class="couponBoxListImg" mode="scaleToFill"></image>
				<view class="couponBoxListText">
					<view class="couponBoxListTextTitle">生日快乐</view>
					<view class="couponBoxListTextDerail">THE BIRTHDAY</view>
				</view>
			</view>
		</view>
		<view class="couponContent">
			<view class="PTitle">拼团劵</view>
			<view class="selectTitleBox">
				<view class="selectTitleList" :class="queryData.type == item.id?'selectActive':''" v-for="(item, index) in selectTitleListData"
				 @tap="selectTitles(item.id)" :key="index">
					{{item.name}}
				</view>
			</view>
			<view>
				<view class="groupBooking flex" v-for="(item, index) in tableData" :key="index" @tap="goToPage(`../groupBooking/index?id=${item.id}`)">
					<image :src="item.imgs" class="groupBookingImg" mode="scaleToFill"></image>
					<view class="groupBookingContent">
						<view class="groupBookingTitle">{{ item.name }}</view>
						<view class="groupBookingShop">
							{{ item.address }}<text>{{(item.jl / 1000).toFixed(2)}}KM</text>
						</view>
						<view class="groupBookingFuncBox flex">
							<view class="saleNum">已拼{{item.count}}份</view>
							<view class="saleBtn">马上拼团</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				search: '',
				selectTitleListData: [],
				selectTitleListIndex: 0,
				queryData: {
					name: '',
					id: '',
					type: '',
					pageNum: 1,
					pageSize: 20,
					lat: '',
					lon: ''
				},
				tableData: [],
				pagecount: ''
			}
		},
		onShow() {
			if(uni.getStorageSync('locationObj')){
				this.queryData.lat = JSON.parse(uni.getStorageSync('locationObj')).lat
				this.queryData.lon = JSON.parse(uni.getStorageSync('locationObj')).lon
			} else {
				this.queryData.lat = 0
				this.queryData.lon = 0
			}
			// this.queryData.lat = JSON.parse(uni.getStorageSync('locationObj')).lat
			// this.queryData.lon = JSON.parse(uni.getStorageSync('locationObj')).lon
			this.tableData = []
			this.getShopData()
		},
		onLoad() {
			
			// this.getShopData()
		},
		methods: {
			confirmSubmit() {
				if (this.search) {
					uni.navigateTo({
						url: '../search/index?keywords=' + this.search
					})
				}

			},
			selectTitles(id) {
				this.queryData.pageNum = 1
				this.queryData.type = id
				this.tableData = []
				this.getShopList()
			},
			goToPage(url) {
				uni.navigateTo({
					url: url
				})
			},
			getShopData() {
				uni.showLoading({
					title: '加载中...'
				})
				this.$request.get('/back/type/getShopType').then(res => {
					if (res.code == 'succes') {
						this.selectTitleListData = res.data
						this.queryData.type = this.selectTitleListData[0].id
						this.getShopList()
					}
				})
			},
			getShopList() {
				this.$request.post('/shop/selectShopByCon', this.queryData).then(res => {
					if (res.code == 'succes') {
						this.tableData = this.tableData.concat(res.data.list)
						this.pagecount = res.data.pages
						uni.hideLoading()
					}
				})
			},
		},
		onReachBottom() {
			this.queryData.pageNum += 1
			this.getShopList()
		}
	}
</script>

<style scoped>
	.getCoupon {}

	.searchBox {
		padding: 20upx 50upx;
	}

	.searchInputBox {
		width: 100%;
		height: 60upx;
		background: #EFEFEF;
		border-radius: 64upx;
		padding: 0 25upx;
		justify-content: flex-start;
		align-items: center;
		position: relative;
	}
	.searchBtns{
		position: absolute;
		right: 0;
		top: 0;
		height: 60upx;
		border-radius: 0 64upx 64upx 0;
		width: 100upx;
		line-height: 60upx;
		text-align: center;
		background: linear-gradient(180deg, #FE4A32 0%, #FE7E48 100%);
		color: #FFFFFF;
	}
	.searchIcon {
		width: 28upx;
		height: 28upx;
		margin-right: 15upx;
	}

	.uni-input {
		width: 510upx;
		color: #737373;
		font-size: 26upx;
	}

	.placeholderClass {
		color: #737373;
		font-size: 26upx;
	}

	.couponContent {
		padding: 0 40upx;
	}

	.couponBoxList {
		overflow-x: auto;
		white-space: nowrap;
	}

	.PTitle {
		position: relative;
		color: #333333;
		font-size: 32upx;
		font-weight: 600;
		padding: 20upx 0;
		padding-left: 48upx;
	}

	.PTitle::before {
		content: '';
		position: absolute;
		width: 32upx;
		height: 32upx;
		background-image: url(@/static/image/titleIcon.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		left: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	.couponBoxListItem {
		width: 300upx;
		height: 175upx;
		position: relative;
		border-radius: 6upx;
		margin-left: 40upx;
		overflow: hidden;
		display: inline-block;
	}

	.couponBoxListItem:last-child {
		margin-right: 40upx;
	}

	.couponBoxListImg {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 1;
	}

	.couponBoxListText {
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
		right: 0;
		padding: 50upx 36upx;
	}

	.couponBoxListTextTitle {
		color: #FFFFFF;
		font-weight: normal;
		font-size: 32upx;
	}

	.couponBoxListTextDerail {
		color: #FFFFFF;
		font-size: 22upx;
		padding-left: 22upx;
	}

	.selectTitleBox {
		width: 100%;
		background: #FE4E34;
		padding: 6upx;
		border-radius: 64upx;
		overflow-x: auto;
		white-space: nowrap;
	}

	.selectTitleList {
		padding: 14upx 35upx;
		min-width: 124upx;
		text-align: center;
		border-radius: 64upx;
		color: #FFFFFF;
		font-size: 30upx;
		font-weight: normal;
		display: inline-block;
	}

	.selectActive {
		color: #FF902C;
		background: #FFFFFF;
	}

	.groupBooking {
		justify-content: space-between;
		align-items: center;
		padding: 50upx 0;
	}

	.groupBookingImg {
		width: 190upx;
		height: 200upx;
		border-radius: 10upx;
		margin-right: 20upx;
	}

	.groupBookingContent {
		width: 460upx;
	}

	.groupBookingTitle {
		color: #333333;
		font-size: 30upx;
		font-weight: 600;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
		overflow-wrap: break-word;
		white-space: wrap;
		margin-bottom: 10upx;
	}

	.groupBookingShop {
		color: #AF8A45;
		font-size: 28upx;
	}

	.groupBookingShop text {
		margin-left: 30upx;
	}

	.groupBookingFuncBox {
		justify-content: space-between;
		align-items: center;
		margin-top: 14upx;
	}

	.saleBtn {
		background: linear-gradient(180deg, #FE4A32 0%, #FE7E48 100%);
		box-shadow: 0px 2upx 20upx 0px rgba(251, 126, 50, 0.5);
		border-radius: 64upx;
		padding: 10upx 26upx;
		color: #FFFFFF;
		font-size: 28upx;
	}

	.saleNum {
		color: #F23030;
		font-size: 20upx;
		background: #FEE4CE;
		padding: 8upx 30upx 8upx 40upx;
		border-radius: 64upx;
		position: relative;
	}

	.saleNum::before {
		position: absolute;
		content: '';
		width: 18upx;
		height: 18upx;
		background-image: url(@/static/image/fire.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		left: 12upx;
		top: 0;
		bottom: 0;
		margin: auto;
	}
</style>
