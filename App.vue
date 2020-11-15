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
		}
	}
</script>

<style>
	@import url("/components/gaoyia-parse/parse.css");
	/*每个页面公共css */
	*{
		box-sizing: border-box;
	}
	view{
		font-size: 28upx;
		/* color: #333333; */
	}
	.flex{
		display: flex;
		flex-wrap: nowrap;
	}
</style>
