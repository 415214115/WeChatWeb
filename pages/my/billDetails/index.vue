<template>
	<view class="billDetails">
		<view class="typeNav flex">
			<view class="typeNavBox" :class="navIndexType==0?'selectActivetypeNavBox':''" @click="typeNavBoxclick(0)">收入</view>
			<view class="typeNavBox" :class="navIndexType==1?'selectActivetypeNavBox':''" @click="typeNavBoxclick(1)">支出</view>
			<view class="navIndexs" :style="{left: navIndexType*50+'%'}"></view>
		</view>
		<view class="dateBox flex">
			<image src="../../../static/image/my/rl.png" mode="aspectFill" class="rlimg"></image>
			<picker mode="date" :value="startpickerValue" :start="startDate" :end="endDate" @change="startPickerDateChange">
				<view class="uni-input">{{startpickerValue}}</view>
			</picker>
			<text>-</text>
			<picker mode="date" :value="endpickerValue" :start="startDate" :end="endDate" @change="endPickerDateChange">
				<view class="uni-input">{{endpickerValue}}</view>
			</picker>
		</view>
		<!-- <view class="incomeAndExpenses flex">
			<view class="moneyBox">
				<view class="moneyTitle">收入</view>
				<view class="moneyS">2345.67</view>
			</view>
			<view class="moneyBox">
				<view class="moneyTitle">支出</view>
				<view class="moneyS">2345.67</view>
			</view>
		</view> -->
		<view class="billList">
			<view class="billListItem flex" v-for="item in pageData" :key="item.id">
				<view class="msgBox">
					<view class="msgTitle">{{ item.content }}</view>
					<view class="time">{{item.CreateTime}}</view>
					<!-- <view class="serialNumber">流水号：1241241251251251351</view> -->
				</view>
				<view class="picBox">{{item.type == 0?'+':'-'}}￥{{item.money}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				startpickerValue: currentDate,
				endpickerValue: currentDate,
				pageData: [],
				navIndexType: 0,
				queryData: {
					pageNum: 1,
					pageSize: 20,
					beginTime: '',
					endTime: '',
					type: 0
				}
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		onLoad() {
			this.getPayDetails()
		},
		methods: {
			typeNavBoxclick(i){
				this.navIndexType = i
				this.queryData.type = i
				this.queryData.pageNum = 1
				this.pageData = []
				this.getPayDetails()
			},
			startPickerDateChange(e) {
				this.startpickerValue = e.target.value
				this.queryData.pageNum = 1
				this.pageData = []
				this.queryData.beginTime = this.startpickerValue
				this.getPayDetails()
			},
			endPickerDateChange(e) {
				this.endpickerValue = e.target.value
				this.queryData.endTime = this.endpickerValue
				this.queryData.pageNum = 1
				this.pageData = []
				this.getPayDetails()
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 10;
				} else if (type === 'end') {
					year = year;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			getPayDetails(){
				this.$request.post('/user/selectBillList',this.queryData).then(res=>{
					if (res.code == 'succes') {
						// res.data.list.forEach((v)=>{
							
						// })
						this.pageData = this.pageData.concat(res.data.list)
						// this.pageData = res.data.list
						console.log(this.pageData)
					}
				})
			}
		},
		onReachBottom() {
			// 到底了
			this.queryData.pageNum += 1
			this.getPayDetails()
		}
	}
</script>

<style scoped>
	.billDetails{
		padding: 0 30upx;
		padding-top: 110upx;
	}
	.dateBox{
		justify-content: space-between;
		align-items: center;
		border: 1px solid #E6E6E6;
		border-radius: 15upx;
		margin-top: 50upx;
		padding: 25upx;
		position: relative;
	}
	.rlimg{
		width: 34upx;
		height: 30upx;
	}
	.typeNav{
		position: fixed;
		justify-content: center;
		height: 100upx;
		background: #FFFFFF;
		box-shadow: 0 0 10upx 1upx rgba(0,0,0,0.3);
		z-index: 9;
		width: 100%;
		left: 0;
		top: 0;
		right: 0;
		line-height: 100upx;
		
	}
	.typeNavBox{
		width: 50%;
		text-align: center;
	}
	.navIndexs{
		width: 50%;
		height: 4upx;
		background: linear-gradient(0deg, #FE4B32, #FE7C48);
		position: absolute;
		left: 0;
		bottom: 0;
		transition: .2s all;
	}
	.selectActivetypeNavBox{
		color: #FE4B32;
	}
	/* .dateBox::before{
		position: absolute;
		background-image: url(@/static/image/my/rl.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 30upx;
		height: 30upx;
		top: 0;
		left: 0;
		z-index: 5;
	} */
	uni-picker{
		width: 45%;
		display: inline-block;
		text-align: center;
	}
	.incomeAndExpenses{
		width: 100%;
		height: 180upx;
		background: linear-gradient(0deg, #FE4B32, #FE7C48);
		box-shadow: 0px 10upx 10upx 0px rgba(254, 75, 50, 0.6);
		border-radius: 15upx;
		margin-top: 40upx;
		justify-content: space-between;
		align-items: center;
		padding: 44upx 0;
	}
	.moneyBox{
		color: #FFFFFF;
		text-align: center;
		width: 50%;
	}
	.moneyTitle{
		font-size: 24upx;
		margin-bottom: 22upx;
	}
	.moneyS{
		font-size: 48upx;
	}
	.billList{
		margin-top: 50upx;
	}
	.billListItem{
		border: 1px solid #E6E6E6;
		border-radius: 6upx;
		margin-bottom: 20upx;
		padding: 30upx 50upx;
		justify-content: space-between;
		align-items: center;
	}
	.msgTitle{
		color: #333333;
		font-size: 28upx;
	}
	.time,.serialNumber{
		color: #999999;
		font-size: 22upx;
	}
	.picBox{
		color: #999999;
		font-size: 36upx;
		font-weight: 600;
	}
</style>
