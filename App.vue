<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
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
