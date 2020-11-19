<template>
	<view class="billDetails">
		<view class="dateBox flex">
			<image src="../../../static/image/my/rl.png" mode="aspectFill" class="rlimg"></image>
			<picker mode="date" :value="pickerValue" :start="startDate" :end="endDate" @change="pickerDateChange">
				<view class="uni-input">{{pickerValue}}</view>
			</picker>
			<text>-</text>
			<picker mode="date" :value="pickerValue" :start="startDate" :end="endDate" @change="pickerDateChange">
				<view class="uni-input">{{pickerValue}}</view>
			</picker>
		</view>
		<view class="incomeAndExpenses flex">
			<view class="moneyBox">
				<view class="moneyTitle">收入</view>
				<view class="moneyS">2345.67</view>
			</view>
			<view class="moneyBox">
				<view class="moneyTitle">支出</view>
				<view class="moneyS">2345.67</view>
			</view>
		</view>
		<view class="billList">
			<view class="billListItem flex" v-for="item in 10">
				<view class="msgBox">
					<view class="msgTitle">提现</view>
					<view class="time">2020-11-15 22:57:55</view>
					<view class="serialNumber">流水号：1241241251251251351</view>
				</view>
				<view class="picBox">￥300.00</view>
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
				pickerValue: currentDate
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
		methods: {
			pickerDateChange(e) {
				this.pickerValue = e.target.value
				console.log(e.target.value)
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
			}
		}
	}
</script>

<style scoped>
	.billDetails{
		padding: 0 30upx;
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
