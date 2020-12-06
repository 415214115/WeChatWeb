<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			$wx.ready(function() { //需在用户可能点击分享按钮前就先调用
				$wx.onMenuShareTimeline({
					title: '测试分享标题', // 分享标题
					link: 'http://www.168wangwang.wang', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: 'https://wangpic.oss-cn-beijing.aliyuncs.com/APP/1606663162881.jpg', // 分享图标
					success: function() {
						// 设置成功
						uni.showToast({
							title: '分享成功'
						})
					}
				})
			});
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData:{
			baseUrl: 'http://47.114.59.188/'
		}
	}
</script>

<style>
	@import url("/components/gaoyia-parse/parse.css");

	/*每个页面公共css */
	* {
		box-sizing: border-box;
		font-family: baotucuheiti;
	}

	view {
		font-size: 28upx;
		/* color: #333333; */
	}

	.flex {
		display: flex;
		flex-wrap: nowrap;
	}
</style>
