<template>
	<view style="width: 100%;height: 7%;">
		
		<view class="tarbar">
			<!-- 编写导航栏 -->
			<view class="item" @click="Music">
				<!-- icon -->

				<view class="icon ms"></view>
				<!-- 文字 -->
				<view class=""><text>音乐</text></view>
			</view>
			
			<view class="item">
				<!-- icon -->

				<view class="icon ra"></view>

				<!-- 文字 -->
				<view class=""><text>电台</text></view>
			</view>
			
			<view class="item" @click="Video">
				<!-- icon -->

				<view class="icon vd"></view>

				<!-- 文字 -->
				<view class="" ><text>视频</text></view>
			</view>
			
			<view class="item">
				<!-- icon -->

				<view class="icon co"></view>

				<!-- 文字 -->
				<view class=""><text>扑通</text></view>
			</view>
			
			<view class="item">
				<!-- icon -->

				<view class="icon my"></view>

				<!-- 文字 -->
				<view class=""><text>我的</text></view>
			</view>
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
			Music(){
				uni.reLaunch({
					url:'../../pages/qq_index/qq_index'
				})
			},
			Video() {
				console.log('点击视频')
				uni.reLaunch({
					url:'../../pages/qq_video/qq_video'
				})
			}
		}
	}
</script>

<style>

	.tarbar {
		width: 100%;
		height: 55%;
		display: flex;
		margin-bottom: 0;
		/* background-color: #3DA7FF; */
		justify-content: center;
		align-items: center;
	}

	.item {
		width: 20%;
		height: 100%;
		text-align: center;
		font-size: 20rpx;
		color: #dbdbdb;
		justify-content: center;

	}

	.icon {
		width: 55rpx;
		height: 55rpx;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		margin-left: 50rpx;

	}
	
	
	.ms {
		background-image: url(../../static/qq_music/tarbar/music.png);
	}
	
	.ms_ac {
		background-image: url(../../static/qq_music/tarbar/music-active.png);
	}
	
	.ra {
		background-image: url(../../static/qq_music/tarbar/radio.png);
	}
	
	.ra_ac {
		background-image: url(../../static/qq_music/tarbar/radio-active.png);
	}
	
	.vd {
		background-image: url(../../static/qq_music/tarbar/video.png);
	}
	
	.vd_ac {
		background-image: url(../../static/qq_music/tarbar/video-active.png);
	}
	
	.co {
		background-image: url(../../static/qq_music/tarbar/ant-cloud.png);
	}
	
	.co_ac {
		background-image: url(../../static/qq_music/tarbar/ant-cloud-active.png);
	}
	
	.my {
		background-image: url(../../static/qq_music/tarbar/my.png);
	}
	
	.my_ac {
		background-image: url(../../static/qq_music/tarbar/my-active.png);
	}
</style>