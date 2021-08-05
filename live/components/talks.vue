<template>
	<!-- 底部弹出栏 -->
	<view v-show="showTalk" ref="viewBox" @touchend="touch"
		style="width: 100%;height: 900rpx;background-color: #FFFFFF; border-radius:50rpx;position: absolute;bottom: 0;border: 1px solid #1785FF;overflow: auto;">
		<!-- 评论框 -->
		<view class="talks" v-for="(item,index) in talk.comment" :key="index">
			<!-- 内容 -->
			<view class="talk-body">
				<!-- 左侧头像 -->
				<view class="talk-logo" :style="{'background-image':'url('+item.user.avatarUrl+')'}"></view>
				<!-- 右侧昵称和内容 -->
				<view class="talk-content" style="font-size: 35rpx;">
					{{item.user.nickname}}:{{item.content}}
				</view>
			</view>
			<!-- 发表时间 -->
			<view class="talk-time" style="font-size: 25rpx;">{{formatDate(item.time)}}</view>
			<!-- 分割线 -->
			<!-- <view class="hr"></view> -->
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		name: "talks",
		data() {
			return {
				// talksdata: ''
			};
		},
		computed:{
			...mapState({
				talk: state => state.talk
			}),
			...mapState({
				song: state => state.song,
			})
		},
		props:['showTalk','talksdata'],
		methods: {
			formatDate(time) {
				const times = new Date(time);
				let year = times.getFullYear();
				let month = times.getMonth();
				let date = times.getDate();
				let hour = times.getHours();
				let minute = times.getMinutes();
				let second = times.getSeconds();
				return year + "-" + (month > 9 ? month : "0" + month) + '-' + (date > 9 ? date : "0" + date) + " " + (
					hour > 9 ? hour : "0" + hour) + ":" + (minute > 9 ? minute : "0" + minute) + ":" + (second > 9 ?
					second : "0" + second)
			},
			touch(e) {
				var that = this
				uni.request({
					url: `https://life-sage-seven.vercel.app/comment/new?type=0&id=${that.song.ids}&sortType=2&pageNo=${that.talk.page}`,
					success(e) {
						that.$store.commit('change_talk', {
							comment:that.talk.comment.concat(e.data.data.comments),
							id:that.song.ids,
							page:that.talk.page+1
						})
					}
				})
			}
			
		},
		// mounted() {
		// 	 this.$nextTick(function() {
		// 	      // 监听当前组件的滚动事件
		// 	      this.box = this.$refs.viewBox;
		// 	      this.box.addEventListener('scroll', ()=> {
		// 			  console.log(this.$refs.viewBox.scrollTop)
		// 	      },false)
		// 	    });
		// }
	}
</script>

<style>

</style>
