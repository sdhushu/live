<template>
	<view style="width: 100%;height:1300rpx ;">
		<!-- 首页 及歌曲logo -->
		<view class="playindex-title">
			<view class="home-page">
				首页
			</view>
			<view :class="music_state == false ?'songs-logo bc round':'songs-logo bc' "
				:style="{'background-image': 'url('+song.music_picUrl+')'}"></view>
		</view>

		<!-- 歌曲搜索框 -->
		<view class="playindex-search">
			<view class="search-logo bc"></view>
			<input type="text" value="" placeholder="请输入歌曲名称或歌手名字" confirm-type="search"
				style="width: 80%;height: 100rpx;margin-top:-15rpx;margin-left: 10rpx;font-size: 30rpx;"  @confirm="Inputend"/>
		</view>

		<!-- 歌单列表 -->
		<view class="songs-list">
			<view class="buttons">
				<!-- 播放全部 -->
				<view class="playall">
					<!-- 图片 -->
					<view class="playimg bc"></view>
					<!-- 文字 -->
					<view style="margin-left: 15rpx;">播放全部</view>
				</view>
				<!-- 歌曲数 -->
				<view class="songsnum">
					{{music.length}}首
				</view>
			</view>

			<!-- 歌曲 -->
			<view class="songs" v-for="(item,index) in music" :key="index">
				<!-- 歌曲序号 -->
				<view class="num"><text style="font-size: 40rpx;color: #ff0000;margin-top: 10rpx;">{{index+1}}</text></view>
				<!-- 歌曲名 -->
				<view class="textspan">
					<view class="" style="font-size: 35rpx;">{{item.name}}</view>
					<!-- 歌手名 -->
					<view class="" style="font-size: 25rpx;">{{item.ar[0].name}}</view>
				</view>
				<!-- 播放/暂停 -->
				<view class="buttonmenus">
					<view class="stop bc" v-show="item.id != song.ids || music_state"
						@click="musicstate(item.ar[0].id,item.name,item.ar[0].name,item.al.picUrl,item.id)"></view>
					<view class="stops bc" v-show="!music_state && item.id == song.ids"
						@click="musicstate(item.ar[0].id,item.name,item.ar[0].name,item.al.picUrl,item.id)"></view>
				</view>

				<!-- 菜单 -->
				<view class="buttonmenus">
					<view class="menus bc"></view>
				</view>
			</view>
		</view>

		<!-- 底部播放 -->
		<view class="play-bottom">
			<!-- 歌曲图片 -->
			<view :class="music_state == false ?'margin-img bc round':'margin-img bc' "
				:style="{'background-image': 'url('+song.music_picUrl+')'}" @click="songdetail">
				<view class="padding-img"></view>
			</view>
			<!-- 歌曲名称 -->
			<view class="songs-text">
				<text style="font-size: 30rpx;margin-top: 15rpx;">{{song.music_name}}</text>
			</view>
			<!-- 暂停 -->
			<view class="songs-play bc" v-show="music_state" @click="musicstate"></view>
			<view class="songs-stop bc" v-show="!music_state" @click="musicstate"></view>
		</view>


		<!-- 页面弹窗 -->

	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
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
			music() {
				return this.$store.state.index_songs.songs
			}
		},
		onLoad() {
			uni.showLoading({
				title: '加载中'
			})
			if (this.music == ''){
				console.log('请求了')
				var that = this
				uni.request({
					// 请求热歌榜
					url: 'https://life-sage-seven.vercel.app/playlist/detail?id=3778678',
					success(res) {
						that.$store.commit('save_songs', {
							songs:res.data.playlist.tracks
						})
						uni.hideLoading()
					},
					fail() {
						uni.showToast({
							title:'网络不好'
						})
					}
				})
			}else {
				uni.hideLoading()
			}
		},
		onReady() {
			// console.log(this.music)
		},
		onPullDownRefresh() {
			console.log('用户上拉刷新')
		},
		methods: {
			// 存留问题 
			// 1.点击底部播放栏会出现不可预计的错误  解决
			// 2.遇到问题暂停以后 还处于播放图标     解决
			// 3.歌曲点击暂停之后，再点开始不能续播 解决
			// 4.后台不显示音乐播放 1436709403 1815498605
			// 5.修复页面切换歌曲状态不同步
			// 6.修复歌单列表歌曲显示undefined状态
			// 
			musicstate(id, title, singer, picUrl, ids) {
				this.$store.commit('change_songslist',this.music)
				// 无参数传入 点击底下按钮
				if (id, title, singer, picUrl, ids == undefined) {
					console.log('点击了底部按钮')
					if (this.$store.state.musicplay == false) {
						// 播放中
						this.$bgAudioMannager.pause()
						this.$store.commit('change_musicplay',true)
						console.log('暂停，点击的底部按钮')
					} else {
						this.$bgAudioMannager.play()
						this.$store.commit('change_musicplay',false)
						console.log('播放，点击底部按钮')
					}
				} else {
					// 点击的同一歌曲
					if (ids == this.song.ids) {
						// 不在播放中
						if (this.$store.state.musicplay == false) {
							// 播放中
							// console.log(this.music_list,this.song.ids,ids)
							// 歌单逻辑
							// this.music_list.songs.splice(0,n)
							// console.log(this.music_list.songs)
							this.$bgAudioMannager.pause()
							this.$store.commit('change_musicplay',true)
							console.log('暂停，点击的同一首歌曲')
						} else {
							this.$store.commit('change_songs',{
								music_name:title,
								music_picUrl : picUrl,
								singer:singer,
								ids:ids
							})
							this.$bgAudioMannager.play()
							this.$store.commit('change_musicplay',false)
							console.log('开始播放，点击的同一首歌曲')
						}
					} else {
						// 点击的不是同一个歌曲
						this.$store.commit('change_songs',{
							endtime:0,
							music_name:title,
							music_picUrl : picUrl,
							singer:singer,
							ids:ids
						})						
						this.$bgAudioMannager.title = this.song.music_name
						this.$bgAudioMannager.singer = this.song.singer
						this.$bgAudioMannager.coverImgUrl = this.song.music_picUrl
						this.$bgAudioMannager.src = 'https://music.163.com/song/media/outer/url?id=' + this.song.ids + '.mp3'
						this.$bgAudioMannager.play()
						this.$store.commit('change_musicplay',false)
						console.log('开始播放，点击的不同歌曲')
					}
					
				}


				this.$bgAudioMannager.onEnded(() => {
					let n = 0
					this.music_list.songs.forEach((e)=>{
						if (e.id == this.song.ids) {
							n = this.music_list.songs.indexOf(e)
						}
					})
					if (n < this.music_list.songs.length - n-1) {
						this.$store.commit('change_songs',{
							music_name:this.music_list.songs[n+1].name,
							music_picUrl : this.music_list.songs[n+1].al.picUrl,
							singer:this.music_list.songs[n+1].ar[0].name,
							ids:this.music_list.songs[n+1].id
						})
					}
					this.$bgAudioMannager.src = 'https://music.163.com/song/media/outer/url?id=' + this.music_list.songs[n+1].id + '.mp3'
					this.$bgAudioMannager.play()
					console.log(this.song,this.$bgAudioMannager)
					// this.$store.commit('change_musicplay',true)
					// console.log('播放完成，自动暂停2')
				})
				
				

			},
			Inputend(e) {
				console.log(e.target.value)
				uni.navigateTo({
					url:'../playsongs/playsongs?id='+0+'&name='+'搜索榜'+'&keyword='+ e.target.value
				})
			},
			songdetail(){
				uni.navigateTo({
					url:'../playdetails/playdetails'
				})
			}
		},
		onShow() {
			console.log('页面加载了')
		}
	}
</script>

<style>
	.playindex-title {
		width: 100%;
		height: 10%;
		/* border: 1px solid #007AFF; */
	}

	.home-page {
		font-size: 80rpx;
		float: left;
		margin-left: 20rpx;
	}

	.songs-logo {
		width: 90rpx;
		height: 90rpx;
		border-radius: 80%;
		border: 1px solid #ff0000;
		background: url(../../static/img/songsbc.jpg);
		float: right;
		margin-right: 20rpx;
		margin-top: 20rpx;
	}

	.bc {
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.playindex-search {
		width: 80%;
		height: 5%;
		border-radius: 10rpx;
		background-color: #f1f1f1;
		margin: 0 auto;
		display: flex;
		margin-top: 20rpx;
	}

	.search-logo {
		width: 60rpx;
		height: 60rpx;
		background: url(../../static/img/playindex-search.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.songs-list {
		width: 100%;
		height: 92%;
		border: 1px solid #007AFF;
		border-bottom: none;
		border-radius: 50rpx;
		margin-top: -5rpx;
		margin-top: 20rpx;
		overflow: auto;
		/* background-color: #FFFFFF; */
	}

	.play-bottom {
		width: 100%;
		height: 8%;
		border: 1px solid #007AFF;
		display: flex;
		border-radius: 20rpx;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg)
		}

		to {
			transform: rotate(359deg)
		}
	}

	.round {
		animation: rotate 3s linear infinite;
	}

	.margin-img {
		width: 150rpx;
		height: 150rpx;
		border-radius: 80%;
		/* border: 1px solid #007AFF; */
		/* background-image: url(../../static/img/songsdiv.jpg); */
		margin-top: -70rpx;

	}

	.padding-img {
		width: 40rpx;
		height: 40rpx;
		border-radius: 80%;
		/* border: 1px solid #007AFF; */
		background-color: #FFFFFF;
		/* margin-top: -60rpx; */
		margin: auto;
		margin-top: 60rpx;
	}

	.songs-text {
		width: 65%;
		height: auto;
		text-align: center;
	}

	.songs-play {
		width: 10%;
		height: 70rpx;
		/* border-radius: 80%; */
		background-image: url(../../static/img/playmini.png);
		margin-top: 10rpx;
	}

	.songs-stop {
		width: 10%;
		height: 70rpx;
		/* border-radius: 80%; */
		background-image: url(../../static/img/playstop.png);
		margin-top: 10rpx;
	}

	.buttons {
		width: 100%;
		height: 100rpx;
		padding-top: 30rpx;
		/* border: 1px solid #007AFF; */
	}

	.playall {
		width: 40%;
		height: 100rpx;
		display: flex;
		border-radius: 30rpx;
		/* background-color: #d1d1d1; */
		float: left;
		margin-left: 30rpx;

	}

	.playimg {
		width: 35rpx;
		height: 35rpx;
		margin-top: 10rpx;
		background-image: url(../../static/img/play.png)
	}

	.songsnum {
		width: 40%;
		height: 100rpx;
		float: right;
		text-align: center;
	}

	.songs {
		width: 100%;
		height: 100rpx;
		display: flex;
	}

	.stop {
		width: 80rpx;
		height: 80rpx;
		/* margin-top: 10rpx; */
		background-image: url(../../static/img/playmini.png)
	}

	.stops {
		width: 80rpx;
		height: 80rpx;
		/* margin-top: 10rpx; */
		background-image: url(../../static/img/playstop.png)
	}

	.menus {
		width: 80rpx;
		height: 80rpx;
		/* margin-top: 10rpx; */
		background-image: url(../../static/img/all.png)
	}

	.buttonmenus {
		width: 15%;
		height: 100rpx;
	}

	.num {
		width: 10%;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
	}

	.textspan {
		width: 60%;
		height: 100rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
