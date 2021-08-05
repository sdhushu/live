<template>
	<view
		style="background-image: url(../../static/img/playdetail.jpg);background-size: 100% 100%;background-repeat: no-repeat;width: 100%;height: 100%;">
		<!-- 歌词详情栏 -->
		<view class="playdetail-title">
			<!-- 返回上一层按钮 -->
			<view class="back" @click="Back">

			</view>
			<!-- 标题 -->
			<view class="title-text">
				{{song.music_name}}
			</view>
			<!-- 功能缩放 -->
			<view class="menu">

			</view>
		</view>


		<!-- 歌词滑动框 -->
		<view class="songsplit">
			<view v-for="(item,index) in music_words" :key="index"
				:style="{transform:`translateY(${-(splits/splitq*1000)+'rpx'})`}" class="songstext">{{item}}</view>
		</view>


		<!-- 进度条 -->
		<view class="process">
			<view class="left-time">
				{{music_starttime}}
			</view>
			<view class="process-center">
				<progress :percent="(splits/splitq*100)" stroke-width="3" active="true" active-mode="forwards" />
			</view>
			<view class="right-time">
				{{music_endtime}}
			</view>
		</view>


		<!-- 播放按钮 -->
		<view class="play-button">
			<!-- 上一曲 -->
			<view class="play-left" @click="previous">
				<view class="play-left2"></view>
			</view>
			<!-- 播放/暂停 -->
			<view class="play">
				<view v-show="music_state" class="play2" @click="musicstate"></view>
				<view v-show="!music_state" class="play3" @click="musicstate"></view>
			</view>
			<!-- 下一曲 -->
			<view class="play-right" @click="next">
				<view class="play-right2"></view>
			</view>
		</view>

		<!-- 歌单按钮 -->
		<view class="song-button">
			<!-- 收藏按钮 -->
			<view class="fav">
				<view class="fav2"></view>
			</view>

			<!-- 循环按钮 -->
			<view class="fav">
				<view class="xunhuan2"></view>
			</view>

			<!-- 下载按钮 -->
			<view class="fav" @click="showTalks">
				<view class="download2"></view>
			</view>

			<!-- 歌单按钮-->
			<view class="fav">
				<view class="songlist2"></view>
			</view>
		</view>
		<talks :showTalk='showTalk' :talksdata='talksdata'></talks>
	</view>





</template>


<script>
	// 1. 新增进度条逻辑
	// 2. 歌单播放
	// 3. 暂停逻辑引入
	import {
		mapState
	} from 'vuex'
	import talks from '../../components/talks.vue'
	export default {
		data() {
			return {
				music_name: '',
				music_words: '',
				music_starttime: 0,
				music_endtime: 0,
				splits: 0,
				splitq: 0,
				showTalk: '',
				talksdata: ''
				// playstate:this.$store.state.musicplay
			}
		},
		computed: {
			music_state() {
				return this.$store.state.musicplay
			},
			...mapState({
				song: state => state.song,
			}),
			music_list() {
				return this.$store.state.songslist
			},
			...mapState({
				talk: state => state.talk
			})
		},
		components: {
			talks
		},
		methods: {
			showTalks() {
				this.showTalk = !this.showTalk
				var that = this
				uni.request({
					url: `https://life-sage-seven.vercel.app/comment/new?type=0&id=${that.song.ids}&sortType=2&pageNo=1`,
					success(e) {
						that.$store.commit('change_talk', {
							comment: e.data.data.comments,
							id: that.song.ids,
							page: 2
						})
						console.log(that.talk, 99)
					}
				})
			},
			previous() {
				let n = 0
				this.music_list.songs.forEach((e) => {
					if (e.id == this.song.ids) {
						n = this.music_list.songs.indexOf(e)
					}
				})

				this.$store.commit('change_songs', {
					music_name: this.music_list.songs[n - 1].name,
					music_picUrl: this.music_list.songs[n - 1].al.picUrl,
					singer: this.music_list.songs[n - 1].ar[0].name,
					ids: this.music_list.songs[n - 1].id
				})

				this.$bgAudioMannager.src = 'https://music.163.com/song/media/outer/url?id=' + this.music_list.songs[n - 1]
					.id + '.mp3'
				this.$bgAudioMannager.play()
			},
			next() {
				let n = 0
				this.music_list.songs.forEach((e) => {
					if (e.id == this.song.ids) {
						n = this.music_list.songs.indexOf(e)
					}
				})
				
				this.$store.commit('change_songs', {
					music_name: this.music_list.songs[n + 1].name,
					music_picUrl: this.music_list.songs[n + 1].al.picUrl,
					singer: this.music_list.songs[n + 1].ar[0].name,
					ids: this.music_list.songs[n + 1].id
				})
				
				this.$bgAudioMannager.src = 'https://music.163.com/song/media/outer/url?id=' + this.music_list.songs[n + 1]
					.id + '.mp3'
				this.$bgAudioMannager.play()
			},
			Back() {
				uni.navigateBack()
			},
			musicstate() {
				// console.log(this.playstate)
				let times = (time) => {
					let theTime = parseInt(time); // 秒
					let middle = 0; // 分
					let hour = 0; // 小时
					let result = 0

					if (theTime > 60) {
						middle = parseInt(theTime / 60);
						theTime = parseInt(theTime % 60);
						if (middle > 60) {
							hour = parseInt(middle / 60);
							middle = parseInt(middle % 60);
						}
					}
					if (parseInt(theTime) < 10) {
						result = "0:0" + parseInt(theTime);
					} else {
						result = "0:" + parseInt(theTime);
					}
					if (middle > 0) {
						result = "" + parseInt(middle) + result.slice(1);
					}
					return result
				}
				if (this.$store.state.musicplay == false) {
					// 播放中
					this.$bgAudioMannager.pause()
					this.$store.commit('change_musicplay', true)
					console.log('暂停，点击的底部按钮')
				} else {
					// 开始播放
					this.$bgAudioMannager.play()
					this.$bgAudioMannager.startTime = this.song.endtime || 0
					this.$store.commit('change_musicplay', false)
					let sets = setInterval(() => {
						this.music_starttime = times(this.$bgAudioMannager.currentTime);
						this.splits = this.$bgAudioMannager.currentTime;
						// console.log(this.music_starttime)
					}, 1000);
					console.log('开始播放')
				}
			},
			onLoad() {
				let times = (time) => {
					let theTime = parseInt(time); // 秒
					let middle = 0; // 分
					let hour = 0; // 小时
					let result = 0

					if (theTime > 60) {
						middle = parseInt(theTime / 60);
						theTime = parseInt(theTime % 60);
						if (middle > 60) {
							hour = parseInt(middle / 60);
							middle = parseInt(middle % 60);
						}
					}
					if (parseInt(theTime) < 10) {
						result = "0:0" + parseInt(theTime);
					} else {
						result = "0:" + parseInt(theTime);
					}
					if (middle > 0) {
						result = "" + parseInt(middle) + result.slice(1);
					}
					return result
				}
				this.music_name = this.$store.state.song.music_name
				this.splitq = this.$bgAudioMannager.duration
				console.log(this.$bgAudioMannager.duration)
				this.music_endtime = times(this.$bgAudioMannager.duration)
				let sets = setInterval(() => {
					this.music_starttime = times(this.$bgAudioMannager.currentTime);
					this.splits = this.$bgAudioMannager.currentTime;
				}, 1000);
				// this.$bgAudioMannager.onEnded(() => {
				// 	this.splitq = this.splits = 0
				// 	this.music_starttime = this.music_endtime
				// 	this.playstate = this.$store.state.musicplay = false
				// 	clearInterval(sets)
				// })
				var that = this
				let reg = /\[[0-9]{2}:[0-9]{2}\.[0-9]{2,3}]/g

				uni.request({
					url: 'https://life-sage-seven.vercel.app/lyric?id=' + that.$store.state.song.ids,
					success(res) {
						// console.log(res.data.lrc.lyric.split('\n'))
						// that.music_words = res.data.lrc.lyric
						that.music_words = res.data.lrc.lyric.replace(reg, "").split('\n')
					}
				})
			}
		}
	}
</script>

<style>
	.playdetail-title {
		width: 100%;
		height: 100rpx;
		display: flex;
		/* border: 1px solid #4CD964; */
		text-align: center;
		padding-top: 40rpx;
	}

	.back {
		width: 10%;
		height: 60rpx;
		background-image: url(../../static/img/back.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.title-text {
		width: 80%;
		height: 90rpx;
		font-size: 40rpx;
		color: #FFFFFF;
	}

	.menu {
		width: 10%;
		height: 60rpx;
		background-image: url(../../static/img/menu.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.songsplit {
		width: 80%;
		height: 1000rpx;
		margin: 0 auto;
		border: 1rpx solid #808080;
		color: #FFFFFF;
		overflow: auto;
		text-align: center;
	}

	.process {
		width: 100%;
		height: 80rpx;
		/* border: 1px solid #007AFF; */
		display: flex;
	}

	.left-time {
		width: 10%;
		height: 40rpx;
		color: #FFFFFF;
		margin-top: 10rpx;
	}

	.process-center {
		width: 70%;
		height: 5rpx;
		/* background-color: #FFFFFF; */
		/* margin: 0 auto; */
		margin-top: 30rpx;
		margin-left: 30rpx;

	}

	.right-time {
		width: 10%;
		height: 40rpx;
		color: #FFFFFF;
		margin-left: 20rpx;
		margin-top: 10rpx;
	}

	.play-button {
		width: 100%;
		height: 120rpx;
		/* border: 1px solid #555555; */
		display: flex;
	}

	.play-left {
		width: 33%;
		height: 50rpx;

	}

	.play-left2 {
		margin: 0 auto;
		width: 80rpx;
		height: 80rpx;
		background-image: url(../../static/img/presongs.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.play {
		width: 33%;
		height: 50rpx;
	}

	.play2 {
		margin: 0 auto;
		width: 80rpx;
		height: 80rpx;
		background-image: url(../../static/img/detali_play.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.play3 {
		margin: 0 auto;
		width: 80rpx;
		height: 80rpx;
		background-image: url(../../static/img/paue.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.play-right {
		width: 33%;
		height: 50rpx;
	}

	.play-right2 {
		margin: 0 auto;
		width: 80rpx;
		height: 80rpx;
		background-image: url(../../static/img/nextsongs.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.song-button {
		width: 100%;
		height: 100rpx;
		/* border:  1px solid #3F536E; */
		display: flex;
	}

	.fav {
		width: 25%;
		height: 100rpx;
	}

	.fav2 {
		margin: 0 auto;
		width: 60rpx;
		height: 60rpx;
		background-image: url(../../static/img/fav.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.xunhuan2 {
		margin: 0 auto;
		width: 60rpx;
		height: 60rpx;
		background-image: url(../../static/img/xunhuan.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.download2 {
		margin: 0 auto;
		width: 60rpx;
		height: 60rpx;
		background-image: url(../../static/img/download.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.songlist2 {
		margin: 0 auto;
		width: 60rpx;
		height: 60rpx;
		background-image: url(../../static/img/songslist.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.songstext {
		animation: 5s infinite;
		transition: height 2s;
		transition-timing-function: linear;
	}

	.talks {
		width: 100%;
		height: auto;
		margin-top: 30rpx;
		border-radius: 50rpx;
		border-bottom: 2px solid #555555;
	}

	.hr {
		width: 90%;
		border: 3rpx solid #3F536E;
		height: 1%;
	}

	.talk-body {
		display: flex;
		width: 100%;
		height: 80%;
	}

	.talk-logo {
		width: 80rpx;
		height: 80rpx;
		background-image: url(../../static/img/songsbc.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		margin-right: 3%;
	}

	.talk-content {
		width: 85%;
		height: 100%;
	}

	.talk-time {
		width: 100%;
		height: 10%;
		margin-left: 13%;
	}
</style>
