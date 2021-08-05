<template>
	<view class="indexpage" :style="{'height':height+'px'}">
		<titles @childFn="Getpage"></titles>
		<tuijian v-if="page==1"></tuijian>
		<musichall v-if="page==2"></musichall>
		<!-- 歌曲播放框 -->
		<play></play>
		<tarbar></tarbar>
	</view>
</template>

<script>
	import tarbar from '../../components/qq_index/qq_tarbars.vue'
	import titles from '../../components/qq_index/qq_titles.vue'
	import play from '../../components/qq_index/play.vue'
	import tuijian from '../../components/qq_index/tuijian.vue'
	import musichall from '../../components/qq_index/music_hall.vue'
	export default {
		data() {
			return {
				height: '',
				page: 1
			}
		},
		components: {
			tarbar,
			titles,
			play,
			tuijian,
			musichall
		},
		methods: {
			onrefresh(e) {
				console.log(e)
			},
			Getpage(page) {
				console.log('修改了', page)
				this.page = page
			}
		},
		mounted() {
			let this_ = this
			uni.getSystemInfo({
				success(res) {
					this_.height = res.windowHeight
				}
			})
		},
		computed:{
			Song_recommendation(){
				return this.$store.state.Song_recommendation
			},
			Radio_recommendation(){
				return this.$store.state.Radio_recommendation
			},
			Video_recommendation(){
				return this.$store.state.Video_recommendation
			},
			Radio_hot(){
				return this.$store.state.Radio_hot
			},
			Songs() {
				return this.$store.state.song
			}
		},
		onLoad() {
			var that = this
			uni.getStorage({
				key: 'cookie',
				success(cookie) {
					// 请求推荐音乐
					uni.request({
						url: 'https://life-sage-seven.vercel.app/recommend/songs',
						header: {
							'cookie': cookie.data
						},
						success(res) {
							console.log(res.data.data.dailySongs)
							that.$store.commit('save_recommendation',{
								songs:res.data.data.dailySongs
							})
							console.log(that.Song_recommendation)
						}
					}),
					// 请求推荐电台
					uni.request({
						url:'https://life-sage-seven.vercel.app/personalized/djprogram',
						header: {
							'cookie': cookie.data
						},
						success(res) {
							that.$store.commit('save_radio',res.data.result)
							console.log(that.Radio_recommendation)
						}
					}),
					// 请求推荐视频
					uni.request({
						url:'https://life-sage-seven.vercel.app/video/timeline/recommend',
						header: {
							'cookie': cookie.data
						},
						success(res) {
							console.log(res.data)
							that.$store.commit('save_video',res.data.datas)
							console.log(that.Video_recommendation)
						}
					})
					// 请求热门电台
					uni.request({
						url:'https://life-sage-seven.vercel.app/dj/hot',
						success(res) {
							console.log(res.data.djRadios)
							that.$store.commit('save_radio_hot',res.data.djRadios)
							console.log(that.Radio_hot,88)
						}
					})
				}
			})


		}
	}
</script>

<style>
	.indexpage {
		width: 100%;
		height: 100%;
		background-color: #F9F9F9;
	}
</style>
