<template>
	<view style="width: 100%;height: 1300rpx;">
		<!-- 歌单头部 -->
		<view class="songs-header bc">
			<!-- 居中图像及文字 -->
			<view class="songs-center">
				<!-- 图像 -->
				<view class="header-bac bc header-size"></view>
				<!-- 文字 -->
				<view class="header-text header-size">
					<view style="font-size: 40rpx;">{{name}}</view>
					<view style="font-size: 30rpx;margin-top: 15rpx;">根据你的爱好生成</view>
					<view style="font-size: 25rpx;color:#999999;margin-top: 15rpx;">每天6点更新</view>
				</view>

			</view>

		</view>

		<!-- 收藏按钮 -->
		<view class="songs-button">
			<!-- 收藏 -->
			<view class="button">
				<view class="fav bc"></view>
			</view>
			<!-- 下载 -->
			<view class="button">
				<view class="download bc"></view>
			</view>
			<!-- 菜单 -->
			<view class="button">
				<view class="menu bc"></view>
			</view>
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
				<view class="num"><text style="font-size: 40rpx;color: #ff0000;margin-top: 10rpx;">{{index+1}}</text>
				</view>
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
			:style="{'background-image': 'url('+song.music_picUrl+')'}"
			@click="songdetail">
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

	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				name: '每日热歌推荐',
				music:'1234'
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
			}
		},
		methods: {
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
			songdetail(){
				uni.navigateTo({
					url:'../playdetails/playdetails'
				})
			}
		},
		onLoad(res) {
			uni.showLoading({
				title:'加载中'
			})
			// console.log(this.$store.state.songslist,22)
			var that = this
			if (res.id == 0 && res.id != undefined) {
				// 搜索榜
				console.log(res.keyword)
				uni.request({
					url:'https://life-sage-seven.vercel.app/cloudsearch?keywords=' + res.keyword,
					success(res) {
						// console.log(res.data.result.songs)
						that.music = res.data.result.songs
						uni.hideLoading()
					}
				})
				
			}else {
				uni.request({
					url:'https://life-sage-seven.vercel.app/playlist/detail?id='+res.id,
					success(res) {
						// console.log(res.data.playlist.tracks)
						that.music = res.data.playlist.tracks
						uni.hideLoading()
					}
				})
			}
		}
	}
</script>

<style>
	.bc {
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.songs-header {
		width: 100%;
		height: 500rpx;
		background-image: url(../../static/img/songsbc.jpg);
	}

	.songs-center {
		width: 100%;
		height: 500rpx;
		/* margin: 60rpx auto; */
		/* border:  1px solid #4CD964; */
		display: flex;

	}

	.header-size {
		margin-top: 80rpx;
		margin-left: 50rpx;
	}

	.header-bac {
		width: 50%;
		height: 50%;
		background-image: url(../../static/img/songsdiv.jpg);
		border-radius: 15rpx;
	}

	.header-text {
		width: 50%;
		height: 50%;
		margin-top: 160rpx;
		color: #FFFFFF;
	}

	.songs-button {
		width: 100%;
		height: 100rpx;
		/* border: 1px solid #007AFF; */
		margin-top: -150rpx;
		display: flex;
	}

	.button {
		width: 33%;
		height: 80rpx;
	}

	.fav {
		background-image: url(../../static/img/fav.png);
		width: 80rpx;
		height: 80rpx;
		margin: 0 auto;
	}

	.download {
		background-image: url(../../static/img/download.png);
		width: 80rpx;
		height: 80rpx;
		margin: 0 auto;
	}

	.menu {
		background-image: url(../../static/img/menu.png);
		width: 80rpx;
		height: 80rpx;
		margin: 0 auto;
	}

	.songs-list {
		width: 100%;
		height: 80%;
		/* border: 1px solid #007AFF; */
		border-radius: 20rpx;
		margin-top: -5rpx;
		background-color: #FFFFFF;
		overflow: auto;
	}

	.play-bottom {
		width: 100%;
		height: 8%;
		border: 1px solid #007AFF;
		display: flex;
		border-radius: 20rpx;
	}

	.margin-img {
		width: 150rpx;
		height: 150rpx;
		border-radius: 80%;
		/* border: 1px solid #007AFF; */
		background-image: url(../../static/img/songsdiv.jpg);
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
	
	.stops {
		width: 80rpx;
		height: 80rpx;
		/* margin-top: 10rpx; */
		background-image: url(../../static/img/playstop.png)
	}

	.songs-play {
		width: 10%;
		height: 70rpx;
		/* border-radius: 80%; */
		background-image: url(../../static/img/playmini.png);
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

	@keyframes rotate{
	    from{transform: rotate(0deg)}
	    to{transform: rotate(359deg)}
	}
	.round {
		animation: rotate 3s linear infinite;
	}
		
	.songs {
		width: 100%;
		height: 100rpx;
		display: flex;
		/* margin-top: 20rpx; */
	}

	.stop {
		width: 80rpx;
		height: 80rpx;
		/* margin-top: 10rpx; */
		background-image: url(../../static/img/playmini.png)
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
	
	.songs-stop {
		width: 10%;
		height: 70rpx;
		/* border-radius: 80%; */
		background-image: url(../../static/img/playstop.png);
		margin-top: 10rpx;
	}
</style>
