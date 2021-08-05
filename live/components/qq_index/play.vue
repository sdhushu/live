<template>
	<view class="play">
		<view class="play_pic">
			<view class="bc play_pics" :style="{'background-image': 'url('+Song.music_picUrl+')'}"></view>
		</view>
		<view class="play_name">{{Words||Song.music_name}}</view>
		<view class="play_size" style="margin-right: 20rpx;" @click="handleClick">
			<view :class="Music_state==true ?'play_play bc stops':'play_play bc plays'"></view>
		</view>
		<view class="play_size">
			<view class="play_list bc"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		computed:{
			Song(){
				return this.$store.state.song
			},
			Music_state(){
				return this.$store.state.musicplay
			},
			Words(){
				return this.$store.state.Words
			}
		},
		methods: {
			handleClick(){
				if (this.Music_state){
					this.$store.commit('change_musicplay',false)
					this.$bgAudioMannager.pause()
				}else {
					this.$store.commit('change_musicplay',true)
					this.$bgAudioMannager.play()
				}
			}
		}
	}
</script>

<style>
	.play {
		width: 100%;
		height: 9%;
		background-color: #dbdbdb;
		border-radius: 30rpx;
		position: absolute;
		bottom: 7%;
		display: flex;
		text-align: center;
	}
	
	.bc {
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	
	.play_pic {
		width: 20%;
		height: 100%;
	}
	
	.play_pics {
		width: 120rpx;
		height: 120rpx;
		border-radius: 10rpx;
		margin-top: -10rpx;
		box-shadow: 0 5px 2px #888888;
		background-image: url(../../static/img/songsbc.jpg);
	}
	
	.play_name {
		width: 60%;
		height: 100%;
		margin-top: 40rpx;
		font-size: 30rpx;
		text-align: center;
		
	}
	
	.play_size {
		width: 10%;
		height: 100%;
	}
	
	.play_play {
		width: 70rpx;
		height: 70rpx;
		margin-top: 30rpx;
	}
	
	.plays {
		background-image: url(../../static/img/playmini.png);
	}
	
	.stops {
		background-image: url(../../static/img/playstop.png);
	}
	
	.play_list {
		width: 60rpx;
		height: 60rpx;
		margin-top: 30rpx;
		background-image: url(../../static/img/songslist.png);
	}
</style>
