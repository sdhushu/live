<template>
	<view style="width: 20%;height: 150rpx;text-align: center;">
		<image :src="src" mode="" class="icon"></image>
		<view class="" style="font-size:30rpx;width: 150rpx;">
			{{text}}
		</view>
	</view>
</template>

<script>
	export default {
		name:"iconbtn",
		props:['src','text'],
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.icon {
		/* width: 20%; */
		width: 100rpx;
		height: 100rpx;
		/* height: 180rpx; */
		margin-left: 30rpx;
		margin-top: 40rpx;
	}

</style>
