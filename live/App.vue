<script>
	import checkupdate from 'uni_modules/uni-upgrade-center-app/utils/check-update'
	export default {
		onLaunch: function() {
			checkupdate()
			uni.getNetworkType({
				success(res) {
					uni.showToast({
						title:res.networkType
					})
				}
			})
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
	/*每个页面公共css */
</style>
