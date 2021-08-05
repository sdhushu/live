<template>
	<view class="content">
		<!-- banner -->
		<view class="banner">
			<view class="bannertext">
				Hello World!
			</view>
		</view>

		<!-- body -->
		<view class="body">
			<view class="index">
				<!-- 首页 -->
				<view class="indextext">
					首页
				</view>

				<!-- 下拉选择器 -->
				<view class="indexselect">
					<picker @change="bindPickerChange" :value="index" :range="array" class="picker">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
			</view>
			<!-- 首页底下横条 -->
			<view class="indexhr"></view>

			<!-- icon组件图标 -->

			<!-- 		<image src='../../static/img/index.png' text='首页' @click='MusicIndex'></image>
			<icon src='../../static/img/songslist.png' text='歌单' @click='MusicList'></icon>
			<icon src='../../static/img/songsword.png' text='歌词' @click='MusicDetails'></icon> -->
			<!-- 音乐  首页 歌单 详情  -->
			<view class="icons" v-show="index == 0">
				<view style="width: 20%;height: 150rpx;text-align: center;" @click="MusicIndex()">
					<image src="../../static/img/index.png" mode="" class="icon"></image>
					<view class="" style="font-size:30rpx;width: 150rpx;">
						仿qq首页
					</view>
				</view>
				
				<view style="width: 20%;height: 150rpx;text-align: center;" @click="MusicIndexs()">
					<image src="../../static/img/index.png" mode="" class="icon"></image>
					<view class="" style="font-size:30rpx;width: 150rpx;">
						首页
					</view>
				</view>

				<view style="width: 20%;height: 150rpx;text-align: center;" @click="MusicList()">
					<image src="../../static/img/songslist.png" mode="" class="icon"></image>
					<view class="" style="font-size:30rpx;width: 150rpx;">
						歌单
					</view>
				</view>

				<view style="width: 20%;height: 150rpx;text-align: center;" @click="MusicDetails()">
					<image src="../../static/img/songsword.png" mode="" class="icon"></image>
					<view class="" style="font-size:30rpx;width: 150rpx;">
						歌词
					</view>
				</view>


			</view>

			<!-- 社交 消息 好友 动态 -->
			<view class="icons" v-show="index == 1">
				<view style="width: 20%;height: 150rpx;text-align: center;" @click="SocialMessage()">
					<image src="../../static/img/message.png" mode="" class="icon"></image>
					<view class="" style="font-size:30rpx;width: 150rpx;">
						消息
					</view>
				</view>

				<view style="width: 20%;height: 150rpx;text-align: center;" @click="MusicIndex()">
					<image src="../../static/img/friend.png" mode="" class="icon"></image>
					<view class="" style="font-size:30rpx;width: 150rpx;">
						好友
					</view>
				</view>

				<view style="width: 20%;height: 150rpx;text-align: center;" @click="MusicIndex()">
					<image src="../../static/img/content.png" mode="" class="icon"></image>
					<view class="" style="font-size:30rpx;width: 150rpx;">
						动态
					</view>
				</view>
			</view>

			<!-- 恋爱 宠物 甜蜜圈 规划 恋爱保证书 -->

			<!-- 树洞 语音倾诉 文字倾诉 倾听 -->

			<!-- 小计划 计划空间 -->

			<!-- 学习 每日一题 学习视频 学习笔记 -->

			<!-- 热门推荐 -->
			<view class="hot">
				<!-- 标头 -->
				<view style="font-style: 80rpx;margin-left: 40rpx;">热门推荐</view>

				<!-- 小文字 -->
				<view style="font-size: 30rpx;color: #C0C0C0;margin-left: 40rpx;margin-top: 5rpx;">根据你最近足迹,推荐每日最热作品
				</view>

				<!-- 列表 -->
				<view class="list">

				</view>
			</view>

		</view>
	</view>
</template>

<script>
	// import icon from '../../components/index/icon.vue'
	export default {
		components: {
			// icon
		},
		data() {
			return {
				array: [
					'音乐',
					'聊天',
					'恋爱',
					'树洞',
					'小计划',
					'学习'
				],
				index: 0
			}
		},
		onLoad() {
			// console.log(this.$store.state.name)
			console.log(this.index == 0)

		},
		methods: {
			MusicIndex() {
				console.log('点击了')
				uni.getStorage({
					key: 'cookie',
					success: () => {
						uni.navigateTo({
							url: '../qq_index/qq_index'
						})
					},
					fail() {
						uni.navigateTo({
							url: '../login/login'
						})
					}
				})

			},
			
			MusicIndexs(){
				uni.navigateTo({
					url:'../playindex/playindex'
				})
			},
			MusicList() {
				uni.navigateTo({
					url: '../playlist/playlist'
				})
			},
			MusicDetails() {
				uni.navigateTo({
					url: '../playdetails/playdetails'
				})
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			SocialMessage() {
				uni.navigateTo({
					url: '../social/message/message'
				})
			}

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

	.content {
		width: 100%;
		height: 100%;
	}

	.banner {
		width: 100%;
		height: 400rpx;
		background-color: #007AFF;
		text-align: center;
	}

	.body {
		width: 100%;
		height: 800rpx;
		border-radius: 80rpx;
		background-color: #FFFFFF;
		margin-top: -80rpx;
	}

	.index {
		width: 100%;
		height: 200rpx;
		display: flex;
		/* background-color: #3F536E; */
	}

	.indexselect {
		height: 80rpx;
	}

	.indextext {
		font-size: 80rpx;
		margin-left: 40rpx;
		margin-top: 25rpx;
	}

	.indexhr {
		width: 75rpx;
		height: 30rpx;
		border-radius: 10rpx;
		background-color: #00007f;
		margin-top: -60rpx;
		margin-left: 40rpx;
	}

	.uni-input {
		height: 50px;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 50rpx;
		margin-left: 60rpx;
		margin-top: 40rpx;
	}

	.icons {
		width: 100%;
		height: 200rpx;
		display: flex;
	}

	.pic {
		width: 30%;
		height: 40%;
	}

	.hot {
		width: 100%;
		height: 600rpx;
	}

	.list {
		width: 90%;
		height: 600rpx;
		background-color: #C0C0C0;
		margin-left: 5%;
		margin-top: 20rpx;
	}
</style>
