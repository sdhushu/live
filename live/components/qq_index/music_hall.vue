<template>
	<scroll-view style="width: 100%;height: 78%;" scroll-y="true" refresher-enabled="true" show-scrollbar="true"
		scroll-anchoring="true">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
			style="width: 90%;height: 300rpx;margin-left: 30rpx;">
			<swiper-item class="swiper"></swiper-item>
			<swiper-item class="swiper"></swiper-item>
		</swiper>
		<!-- 选项 -->
		<view class="navbar">
			<view class="nav">
				<view class="nav_icon bc" style="background-image: url(../../static/qq_music/musiclist/singer.png);">
				</view>
				<view class="nav_text">歌手</view>
			</view>

			<view class="nav">
				<view class="nav_icon bc" style="background-image: url(../../static/qq_music/musiclist/data.png);">
				</view>
				<view class="nav_text">排行</view>
			</view>

			<view class="nav">
				<view class="nav_icon bc" style="background-image: url(../../static/qq_music/musiclist/menu.png);">
				</view>
				<view class="nav_text">分类歌单</view>
			</view>

			<view class="nav">
				<view class="nav_icon bc" style="background-image: url(../../static/qq_music/musiclist/radio.png);">
				</view>
				<view class="nav_text">音乐电台</view>
			</view>

			<view class="nav">
				<view class="nav_icon bc" style="background-image: url(../../static/qq_music/musiclist/live.png);">
				</view>
				<view class="nav_text">直播</view>
			</view>
		</view>

		<!-- 编辑甄选 -->
		<view class="radio_collect" style="height: 400rpx;">
			<view class="" style="margin-left: 30rpx;font-weight: bold;">编辑甄选</view>
			<view class="radio_wrap">
				<view class="radio_item">
					<view class="radio_items"></view>
					<view class=""
						style="font-size: 25rpx;white-space: normal;word-break: break-all;margin-left: 30rpx;">
						全网最火流行歌曲都在这里</view>
				</view>
				<view class="radio_item">
					<view class="radio_items"></view>
					<view class=""
						style="font-size: 25rpx;white-space: normal;word-break: break-all;margin-left: 30rpx;">
						全网最火流行歌曲都在这里</view>
				</view>
				<view class="radio_item">
					<view class="radio_items"></view>
					<view class=""
						style="font-size: 25rpx;white-space: normal;word-break: break-all;margin-left: 30rpx;">
						全网最火流行歌曲都在这里</view>
				</view>
				<view class="radio_item">
					<view class="radio_items"></view>
					<view class=""
						style="font-size: 25rpx;white-space: normal;word-break: break-all;margin-left: 30rpx;">
						全网最火流行歌曲都在这里</view>
				</view>
				<view class="radio_item">
					<view class="radio_items"></view>
					<view class=""
						style="font-size: 25rpx;white-space: normal;word-break: break-all;margin-left: 30rpx;">
						全网最火流行歌曲都在这里</view>
				</view>
			</view>
		</view>

		<!-- 新歌 -->
		<view class="songs" style="height: 600rpx;">
			<view class="songs_title">
				<view class="songs_title_text">新歌</view>
				<view class="song_button">
					<view class="song_button_icon"></view>
					<view class="songs_button_play">播放</view>
				</view>
			</view>
			<view class="song_list">
				<view class="song_list_wrap">
					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo"></view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">青春是盲盒</view>
							<view class="item_text">SNH48</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo"></view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">歌唱二小放牛郎</view>
							<view class="item_text">诚意</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo"></view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">Coloratura</view>
							<view class="item_text">Coldplay</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>
				<view style="width: 90%;height: 100%;flex: none;background-color: #ffaa7f;"></view>
				<view style="width: 90%;height: 100%;flex: none;background-color: #ffff00;"></view>
				<view style="width: 90%;height: 100%;flex: none;background-color: #ff55ff;"></view>
				<view style="width: 90%;height: 100%;flex: none;background-color: #00557f;"></view>
			</view>
		</view>
		<!-- 歌曲榜单 -->
		<view class="songs_list_wrap" style="height: 400rpx;width: 100%;margin-top: -100rpx;">
			<view class="" style="margin-left: 30rpx;">排行榜</view>
			<view class="songs_list">
				<view class="songs_list_item">
					<!-- 图片 -->
					<view class="" style="width: 40%;height: 100%;background-color: #3F536E;border-radius: 20rpx;box-shadow:10px 0px 5px #888888 ;"></view>
					<!-- 歌曲信息 -->
					<view class="" style="width: 60%;height: 100%;font-size: 30rpx;">
						<view style="font-size: 40rpx;font-weight: bold;margin-left: 20rpx;">热歌榜</view>
						<view style="margin-top: 20rpx;margin-left: 20rpx;">01 不如-秦海清</view>
						<view style="margin-top: 20rpx;margin-left: 20rpx;">02 放空-大籽</view>
						<view style="margin-top: 20rpx;margin-left: 20rpx;">03 星辰大海-黄潇潇</view>
					</view>
				</view>
				<view class="songs_list_item"></view>
				<view class="songs_list_item"></view>
				<view class="songs_list_item"></view>
				<view class="songs_list_item"></view>
			</view>

		</view>


	</scroll-view>
</template>

<script>
	export default {
		date() {
			return {

			}
		}
	}
</script>

<style>
	.bc {
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.swiper {
		background-color: #3DA7FF;
		border-radius: 20rpx;
	}

	.navbar {
		width: 100%;
		height: 150rpx;
		display: flex;
	}

	.nav {
		width: 25%;
		height: 100%;
		text-align: center;
	}

	.nav_icon {
		width: 90rpx;
		height: 80rpx;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}

	.nav_text {
		margin-left: -20rpx;
		font-size: 30rpx;
	}

	.radio_collect {
		width: 100%;
		/* margin-top: 100rpx; */
		height: 300rpx;
	}

	.radio_wrap {
		width: 100%;
		height: 350rpx;
		display: flex;
		white-space: nowrap;
		overflow-x: scroll;
		overflow-y: hidden;
	}

	.radio_item {
		width: 250rpx;
		height: 250rpx;
		flex: none;
	}

	.radio_items {
		width: 230rpx;
		height: 230rpx;
		margin-left: 30rpx;
		margin-top: 20rpx;
		background-color: #1785FF;
		border-radius: 20rpx;
	}

	.radio_wrap::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	.songs {
		width: 100%;
		height: 400rpx;
	}

	.songs_title {
		width: 100%;
		height: 80rpx;
		display: flex;
	}

	.song_button {
		width: 150rpx;
		height: 50rpx;
		border-radius: 30rpx;
		margin-left: 10rpx;
		text-align: center;
		font-size: 30rpx;
		background-color: #aaffff;
		display: flex;
	}

	.song_button_icon {
		width: 30rpx;
		height: 30rpx;
		background-image: url(../../static/img/play.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		margin-left: 20rpx;
		margin-top: 8rpx;
	}

	.songs_title_text {
		font-size: 30rpx;
		margin-left: 30rpx;
		font-weight: bold;
	}

	.songs_button_play {
		margin-left: 10rpx;
	}

	.song_list {
		width: 100%;
		height: 400rpx;
		display: flex;
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
	}

	.song_list_wrap {
		width: 90%;
		height: 100%;
		flex: none;
	}

	.song_list_item {
		width: 100%;
		height: 33%;
		display: flex;
	}

	.list_item_logowrap {
		width: 20%;
		height: 100%;
	}

	.list_item_textwrap {
		width: 60%;
		height: 100%;
		margin-left: 20rpx;
		margin-top: 25rpx;
	}

	.list_item_playwrap {
		width: 10%;
		height: 100%;
	}

	.item_logo {
		width: 120rpx;
		height: 120rpx;
		border-radius: 20rpx;
		margin-left: 30rpx;
		background-color: #007AFF;
	}

	.item_texts {
		font-size: 35rpx;
	}

	.item_text {
		font-size: 25rpx;
		margin-top: 10rpx;
		color: #a1a1a1;
	}

	.item_play {
		width: 60rpx;
		height: 60rpx;
		background-image: url(../../static/img/playmini.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		margin-top: 30rpx;
	}

	.song_list::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	.songs_list {
		width: 100%;
		height: 100%;
		display: flex;
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
	}

	.songs_list_item {
		width: 90%;
		height: 250rpx;
		margin-left: 30rpx;
		border-radius: 20rpx;
		background-color: #1785FF;
		flex: none;
		display: flex;
	}
</style>
