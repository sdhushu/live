<template>
	<view class="title_tarbar">
		<view class="tarbars">
			<!-- 推荐  -->
			<view id="tuijian" style="margin-top: 50rpx;font-weight: bold;margin-left: 30rpx;"
				@click="music_list('tuijian',1)">推荐</view>
			<!-- 音乐馆 -->
			<view id="music" style="margin-left: 40rpx;margin-top: 50rpx;" @click="music_list('music',2)">音乐馆</view>
			<!-- 直播 -->
			<view id="video" style="margin-left: 40rpx;margin-top: 50rpx;" @click="music_list('video',3)">直播</view>
			<!-- 音乐图标 -->
		</view>
		<!-- 底部线 -->
		<view class="line" id="line" :style="{transform:`translateX(${left+'px'})`}"></view>
		<!-- 输入框 -->
		<view class="input">
			<!-- icon图标 -->
			<view class="input_icon"></view>
			<input type="text" placeholder="心动动 为你推荐" maxlength="10" v-model="value" />{{value}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				left: ''
			}
		},
		props:{
			pages:Number
		},
		methods: {
			music_list(id,pages) {
				const query = uni.createSelectorQuery().in(this);
				query.select(`#${id}`).boundingClientRect(data => {
					console.log("得到布局位置信息" + JSON.stringify(data));
					console.log("节点离页面左边的距离为" + data.left);
					this.left = data.left - 12;
				}).exec();
				this.$emit('childFn',pages)
			}


		}
	}
</script>

<style>
	.title_tarbar {
		width: 100%;
		height: 15%;
	}

	.tarbars {
		font-size: 45rpx;
		display: flex;
		width: 100%;
		height: 50%;
		background-color: #eaeaea;
	}

	.line {
		width: 80rpx;
		height: 12rpx;
		background-color: #4CD964;
		border-radius: 20rpx;
		margin-top: 10rpx;
		margin-left: 30rpx;
		transition: transform 1s;
	}

	.input {
		width: 90%;
		height: 50rpx;
		border: 1px solid #f4f4f4;
		margin-top: 20rpx;
		margin-left: 5%;
		border-radius: 20rpx;
		display: flex;
	}

	.input_icon {
		width: 50rpx;
		height: 50rpx;
		background-image: url(../../static/img/search.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
</style>
