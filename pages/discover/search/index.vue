<template>
	<view class="searchBox">
		<view class="groupBooking flex" v-if="tableData && tableData.length>0" v-for="item in tableData" :key="item.id" @tap="goToPage(`../groupBooking/index?id=${item.id}`)">
			<image :src="item.imgs" class="groupBookingImg" mode="scaleToFill"></image>
			<view class="groupBookingContent">
				<view class="groupBookingTitle">{{ item.name }}</view>
				<view class="groupBookingShop">
					{{ item.address }}<text>653m</text>
				</view>
				<view class="groupBookingFuncBox flex">
					<view class="saleNum">已拼1000份</view>
					<view class="saleBtn">马上拼团</view>
				</view>
			</view>
		</view>
		<view class="noData" v-else>未搜索到数据</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				tableData: [],
				queryData: {
					name: '',
					id: '',
					type: '',
					pageNum: 1,
					pageSize: 20
				},
				pagecount: ''
			}
		},
		onLoad(e) {
			this.queryData.name = e.keywords
			this.$nextTick(()=>{
				this.getShopList()
			})
		},
		methods:{
			getShopList() {
				this.$request.post('/shop/selectShopByCon',this.queryData).then(res => {
					if (res.code == 'succes') {
						this.tableData = this.tableData.concat(res.data.list)
						this.pagecount = res.data.pages
					}
				})
			},
			goToPage(url){
				uni.navigateTo({
					url: url
				})
			}
		},
		onReachBottom() {
			this.queryData.pageNum += 1
			this.getShopList()
		}
	}
</script>

<style scoped>
	
	.searchBox {
		padding: 20upx 50upx;
	}
	.groupBooking{
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20upx;
	}
	.groupBookingImg{
		width: 190upx;
		height: 200upx;
		border-radius: 10upx;
		margin-right: 20upx;
	}
	.groupBookingContent{
		width: 460upx;
	}
	.groupBookingTitle{
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
	.groupBookingShop{
		color: #AF8A45;
		font-size: 28upx;
	}
	.groupBookingShop text{
		margin-left: 30upx;
	}
	.groupBookingFuncBox{
		justify-content: space-between;
		align-items: center;
		margin-top: 14upx;
	}
	.saleBtn{
		background: linear-gradient(180deg, #FE4A32 0%, #FE7E48 100%);
		box-shadow: 0px 2upx 20upx 0px rgba(251, 126, 50, 0.5);
		border-radius: 64upx;
		padding: 10upx 26upx;
		color: #FFFFFF;
		font-size: 28upx;
	}
	.saleNum{
		color: #F23030;
		font-size: 20upx;
		background: #FEE4CE;
		padding: 8upx 30upx 8upx 40upx;
		border-radius: 64upx;
		position: relative;
	}
	.saleNum::before{
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
	.noData{
		line-height: 300upx;
		text-align: center;
		color: #dedede;
	}
</style>
