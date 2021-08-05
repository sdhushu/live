<template>
	<view class="indexpage" :style="{'height':height+'px'}">
		<swiper class="" style="width: 100%;height: 93%;background-color: #3DA7FF;" :vertical="true" @change="transition">
			<swiper-item style="width: 100%;height: 100%;" v-for="(item,index) in video" :key="index">
				<view class="swiper-item uni-bg-red">
					<video :src="video_url" controls></video>
				</view>
			</swiper-item>
		</swiper>
		<tarbar></tarbar>
	</view>
</template>

<script>
	import tarbar from '../../components/qq_index/qq_tarbars.vue'
	export default {
		data() {
			return {
				height: '',
				video:'',
				video_url:''
			}
		},
		components: {
			tarbar
		},
		methods: {
			transition(e) {
				var that = this
				uni.request({
					url:'https://life-sage-seven.vercel.app/mv/url?id='+that.video[e.detail.current].id,
					success(res) {
						that.video_url = res.data.data.url
						console.log(res.data.data.url)
					}
				})
				
			}
		},
		onLoad() {
			var that = this
			uni.request({
				url:'https://life-sage-seven.vercel.app/mv/first',
				success(res) {
						that.video = res.data.data
				}
			})
		},
		mounted() {
			let this_ = this
			uni.getSystemInfo({
				success(res) {
					this_.height = res.windowHeight
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
	
	.videos {
		width: 100%;
	}
</style>
