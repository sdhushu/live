<template>
	<view class="radio_wrap">
		<view class="radio_item">
			<view class="radio_items"></view>
			<view class=""
				style="font-size: 25rpx;white-space: normal;word-break: break-all;margin-left: 30rpx;">
				<slot name="line-text"></slot></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.radio_wrap {
		width: 100%;
		height: 350rpx;
		display: flex;
		white-space: nowrap;
		overflow-x: scroll;
		overflow-y: hidden;
	}
	
	.radio_item {
		width: 250rpx;
		height: 250rpx;
		flex: none;
	}
	
	.radio_items {
		width: 230rpx;
		height: 230rpx;
		margin-left: 30rpx;
		margin-top: 20rpx;
		background-color: #1785FF;
		border-radius: 20rpx;
	}
</style>
