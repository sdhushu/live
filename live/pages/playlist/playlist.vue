<template>
	<view>
		<!-- 歌单文字 歌单 搜索框 添加按钮 -->
		<view class="title">
			<view class="songtext">歌单</view>
			<!-- 搜索框图片 -->
			<image src="../../static/img/search.png" mode="" class="search" style="margin-right: 30rpx;"></image>
			<!-- 添加按钮 -->
			<image src="../../static/img/add.png" mode="" class="search"></image>
		</view>

		<!-- banner图 -->
		<view class="banner">
			<view class="banner1">
				<text>最近播放</text>
			</view>

			<view class="banner1">
				<text>流行收集</text>
			</view>
		</view>

		<!-- 我的收藏 -->
		<view class="collection">
			<view class="title">
				<!-- 文字 我的收藏 -->
				<view class="songtext">
					我的收藏
				</view>
				<!-- icon more -->
				<view class="search">
					more
				</view>
			</view>
		</view>

		<!-- 歌单方块 -->
		<view class="songslist" style="width: 100%;height: auto;">
			<!-- 外框 -->
			<view class="song-all" @click="onDetails('飙升榜',19723756)"> 
				<view class="song-block" style="background-image: url(https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>飙升榜</text>
					</view>
			</view>
			
			<view class="song-all" @click="onDetails('新歌榜',3779629)">
				<view class="song-block" style="background-image: url(https://p2.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>新歌榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('原创榜',2884035)">
				<view class="song-block" style="background-image: url(https://p2.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>原创榜</text>
					</view>
			</view>
			
			
			
			<view class="song-all" @click="onDetails('热歌榜',3778678)">
				<view class="song-block" style="background-image: url(https://p2.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>热歌榜</text>
					</view>
			</view>
			
			<view class="song-all" @click="onDetails('云音乐说唱榜',991319590)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/EJyXfGYsiHxxxoCiTAz6Kg==/109951165611553137.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>云音乐说唱榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('云音乐古典榜',71384707)">
				<view class="song-block" style="background-image: url(https://p2.music.126.net/7XQ7j5GKsiWQ6hLMtjGGKQ==/109951165611553527.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>云音乐古典榜</text>
					</view>
			</view>
			
			<view class="song-all" @click="onDetails('云音乐电音榜',1978921795)">
				<view class="song-block" style="background-image: url(https://p2.music.126.net/FUTBe-hYwYZ7kidXNz2f0g==/109951165611546880.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>云音乐电音榜</text>
					</view>
			</view>
			
			
			
			<view class="song-all" @click="onDetails('云音乐ACG榜',71385702)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/pAFaa_EVMj0ktkDo381dnw==/109951165611551680.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>云音乐ACG榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('云音乐韩语榜',745956260)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/v--zfW0Y0jbexl3CiALGlw==/109951165611550672.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>云音乐韩语榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('云音乐国电榜',10520166)">
				<view class="song-block" style="background-image: url(https://p2.music.126.net/6la5fQwcd3YW6ZQHvTiZqw==/109951165611482698.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>云音乐国电榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('UK排行榜周榜',180106)">
				<view class="song-block" style="background-image: url(https://p2.music.126.net/fhAqiflLy3eU-ldmBQByrg==/109951165613082765.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>UK排行榜周榜</text>
					</view>
			</view>
			
			<view class="song-all" @click="onDetails('KTV唛榜',21845217)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/5wDP78s43ydVTKt62C8OjQ==/109951165613100063.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>KTV唛榜</text>
					</view>
			</view>
			
			<view class="song-all" @click="onDetails('美国Billboard榜',60198)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/rwRsVIJHQ68gglhA6TNEYA==/109951165611413732.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>美国Billboard榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('Beatport全球电子舞曲榜',3812895)">
				<view class="song-block" style="background-image: url(https://p2.music.126.net/oT-RHuPBJiD7WMoU7WG5Rw==/109951166093489621.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>Beatport全球电子舞曲榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('日本Oricon榜',60131)">
				<view class="song-block" style="background-image: url(https://p2.music.126.net/aXUPgImt8hhf4cMUZEjP4g==/109951165611417794.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>日本Oricon榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('云音乐欧美新歌榜',2809577409)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/zmcB55ghLQeUSBqbX1SJuA==/109951165611546419.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>云音乐欧美新歌榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('法国NRJ Vos Hits周榜',27135204)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/-fyzrPWd06FfWl_0JDAxMQ==/109951165613108584.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>法国NRJ Vos Hits周榜</text>
					</view>
			</view>
			
			<view class="song-all" @click="onDetails('云音乐ACG动画榜',3001835560)">
				<view class="song-block" style="background-image: url(https://p2.music.126.net/SkGlKQ6acixthb77VlD9eQ==/109951164432300406.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>云音乐ACG动画榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('云音乐ACG游戏榜',3001795926)">
				<view class="song-block" style="background-image: url(https://p2.music.126.net/hivOOHMwEmnn9s_6rgZwEQ==/109951164432303700.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>云音乐ACG游戏榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('乡村音乐排行榜',3112516681)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/_3PD8PcncjtWE0l8WpACGA==/109951165613110607.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>乡村音乐排行榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('云音乐日语榜',5059644681)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/z3pYLlO2LdVNzcuo9PLnFg==/109951165611548673.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>云音乐日语榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('云音乐摇滚榜',1978921795)">
				<view class="song-block" style="background-image: url(https://p2.music.126.net/sk_T3eQMwIOjkOPylZ1vLQ==/109951165611542373.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>云音乐摇滚榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('云音乐古风榜',5059642708)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/dAYiKqH9owbhiKy1_okqEw==/109951165611544270.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>云音乐古风榜</text>
					</view>
			</view>
			
			<view class="song-all" @click="onDetails('潜力爆款榜',5338990334)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/Mi4QPklg1mtbWAfq74tEqQ==/109951165498334721.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>潜力爆款榜</text>
					</view>
			</view>
			
			<view class="song-all" @click="onDetails('云音乐民谣榜',5059661515)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/SMWYiPf7br4enzCNQeX2cw==/109951165611547181.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>云音乐民谣榜</text>
					</view>
			</view>
			
			<view class="song-all" @click="onDetails('听歌识曲榜',6688069460)">
				<view class="song-block" style="background-image: url(https://p2.music.126.net/fgb1AEGAtJ79tygFWyIsQg==/109951165850003297.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>听歌识曲榜</text>
					</view>
			</view>
			
			<view class="song-all" @click="onDetails('网络热歌榜',6723173524)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/k0yGVnDaTLeDe6-rbZahJA==/109951165911602412.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>网络热歌榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('俄语榜',6732051320)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/nOxTj0zDqUVYv2XBJcTigQ==/109951165928424636.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>俄语榜</text>
					</view>
			</view>
			
			
			<view class="song-all" @click="onDetails('越南语榜',6732014811)">
				<view class="song-block" style="background-image: url(https://p1.music.126.net/aML0vCjmsp8sgoFiGVsBAQ==/109951165928417426.jpg);">
						<view class="song-mini">
			
						</view>
					</view>
					<view class="song-text">
						<text>越南语榜</text>
					</view>
			</view>
		</view>
		
		
		
		
		<view class="foot">
			<!-- 头像 -->
			<view class="footlogo" :style="{'background-image': 'url('+song.music_picUrl+')'}"></view>
			
			<!-- 歌曲名及作者 -->
			<view class="footsongs">
				<view class="footsong">
					{{song.music_name}}
				</view>
				
				<view class="footsong" style="margin-top: 20rpx;">
					{{song.singer}}
				</view>
			</view>
			
			
			<!-- 左右播放按钮 -->
			<view class="footbutton">
				<view class="left"></view>

				<view class="midden play" v-show="music_state" @click="musicstate"></view>
				<view class="midden stop" v-show="!music_state" @click="musicstate"></view>
				
				<view class="right"></view>
			</view>
			
		</view>
		
		
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
				song: state => state.song
			}),
			music_list() {
				return this.$store.state.songslist
			}
		},
		methods: {
			// 请求歌单
			onDetails(name,id){
				var that = this
				uni.navigateTo({
					url:'../playsongs/playsongs?id='+id+'&name='+name,
					success() {
						console.log(that.$store.state.songslist)
						that.$store.state.songslist.name = name
						that.$store.state.songslist.id = id
					}
				})
			},
			musicstate() {
				if (this.$store.state.musicplay == false) {
					this.$bgAudioMannager.pause()
					this.$store.commit('change_musicplay',true)
					console.log('暂停')
				}else {
					this.$bgAudioMannager.play()
					this.$store.commit('change_musicplay',false)
					console.log('播放')
				}
			}

		},
		onLoad() {
			// 请求歌单
			
		}
	}
</script>

<style>
	.stop {
		background-image: url(../../static/img/playstop.png);
	}
	
	.play {
		background-image: url(../../static/img/play.png);
	}
	
	.title {
		width: 100%;
		height: 90rpx;
		display: flex;
		/* border: 1px solid #007AFF; */
		/* background-color: #007AFF; */
	}

	.search {
		width: 10%;
		height: 55rpx;
		margin-top: 20rpx;

	}

	.songtext {
		width: 80%;
		font-size: 60rpx;
	}

	.banner {
		display: flex;
		width: 100%;
		height: 200rpx;
		/* border: 1px solid #4CD964; */
	}

	.banner1 {
		width: 40%;
		height: 100%;
		margin-left: 5%;
		border-radius: 10rpx;
		background-color: #C0C0C0;
		text-align: center;
		line-height: 200rpx;
	}

	.collection {
		width: 100%;
		height: 100rpx;
		/* border: 1px solid #555555; */
	}

	.collection-title {
		width: 100%;
		height: 90rpx;
		display: flex;
		/* border: 1px solid #007AFF; */
	}
	
	.songslist{
		width: 100%;
		height: auto;
	}
	
	.song-all {
		float: left;
		width: 25%;
		height: 300rpx;
		margin-left: 45rpx;
		/* margin-top: 5rpx; */
		/* border: 1px solid #007AFF; */
		font-size: 30rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
		
	}
	
	.song-block {
		background-image: url(../../static/logo.png);
		border-radius: 20rpx;
		width: 100%;
		height: 200rpx;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: relative;
	}

	.song-mini {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		background-color: #4CD964;
		position: absolute;
		right: 10rpx;
		bottom: 10rpx;
	}

	.foot {
		width: 100%;
		height: 180rpx;
		background-color: #eeeeee;
		opacity: 0.9;
		position: fixed;
		bottom: 0;
		display: flex;
	}
	
	.footlogo {
		width: 15%;
		height: 130rpx;
		background-image: url(../../static/logo.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin-top: 30rpx;
	}
	
	.footsongs {
		width: 45%;
		height: 100%;
		/* border:  1rpx solid #4CD964; */
		margin-top: 60rpx;
	}
	
	.footsong {
		font-size: 30rpx;
	}

	
	.footbutton {
		width: 40%;
		height: 100%;
		/* border: 1rpx solid #00007F; */
		display: flex;
		margin-top: 50rpx;
	}
	
	.left {
		width: 100rpx;
		height: 100rpx;
		background-image: url(../../static/img/on.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	
	.midden {
		width: 100rpx;
		height: 100rpx;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	
	.right {
		width: 100rpx;
		height: 100rpx;
		background-image: url(../../static/img/off.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
</style>
