<template>
	<scroll-view class="" style="width: 100%;height: 78%;" scroll-y="true" refresher-enabled="true" @scroll="scorllmove"
		show-scrollbar="true" scroll-anchoring="true" @scrolltolower="scrolldown">
		<!-- 推荐 -->
		<view class="tuijian">
			<view class="" style="font-size: 40rpx;margin-left: 30rpx;">Hi vike 今日为你推荐</view>
			<view class="banner" scroll-x="true" scroll-left="120">
				<view class="radio">
					<view class="" style="width: 50%;height: 100%;">
						<view class="item_radio">个性电台</view>
						<view class="item_time">早上好</view>
						<view class="item_tect">您的音乐馆营业中
						</view>
					</view>
					<view class="title_playwrap">
						<view class="title_playlogo"></view>
						<view class="title_play">
						</view>
					</view>
				</view>
				<view class="daliy"></view>
				<view class="daliy"></view>
				<view class="daliy"></view>
				<view class="daliy"></view>
				<view class="daliy"></view>
			</view>
		</view>
		<!-- 华语好歌 -->
		<view class="songs">
			<view class="songs_title">
				<view class="songs_title_text">华语好歌 百听不腻</view>
				<view class="song_button" v-show="Music_state==false">
					<view class="song_button_icon song_button_play"></view>
					<view class="songs_button_play">播放</view>
				</view>
				<view class="song_button" v-show="Music_state==true">
					<view class="song_button_icon song_button_stop"></view>
					<view class="songs_button_play">暂停</view>
				</view>
			</view>
			<view class="song_list">
				<view class="song_list_wrap">
					<view class="song_list_item"
						@click="musicClick(Song_recommendation[0].id,Song_recommendation[0].al.name,Song_recommendation[0].ar[0].name,Song_recommendation[0].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[0].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[0].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[0].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[0].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[0].ar[0].name}}
							</view>
						</view>
						<!-- 	<view class="list_item_playwrap">
							<view class="play item_play"></view>
						</view> -->
					</view>

					<view class="song_list_item"
						@click="musicClick(Song_recommendation[1].id,Song_recommendation[1].al.name,Song_recommendation[1].ar[0].name,Song_recommendation[1].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[1].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[1].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[1].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[1].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[1].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item"
						@click="musicClick(Song_recommendation[2].id,Song_recommendation[2].al.name,Song_recommendation[2].ar[0].name,Song_recommendation[2].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[2].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[2].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[2].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[2].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[2].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>


				<view class="song_list_wrap">
					<view class="song_list_item"
						@click="musicClick(Song_recommendation[3].id,Song_recommendation[3].al.name,Song_recommendation[3].ar[0].name,Song_recommendation[3].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[3].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[3].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[3].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[3].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[3].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item"
						@click="musicClick(Song_recommendation[4].id,Song_recommendation[4].al.name,Song_recommendation[4].ar[0].name,Song_recommendation[4].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[4].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[4].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[4].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[4].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[4].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item"
						@click="musicClick(Song_recommendation[5].id,Song_recommendation[5].al.name,Song_recommendation[5].ar[0].name,Song_recommendation[5].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[5].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[5].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[5].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[5].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[5].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>

				<view class="song_list_wrap">
					<view class="song_list_item"
						@click="musicClick(Song_recommendation[6].id,Song_recommendation[6].al.name,Song_recommendation[6].ar[0].name,Song_recommendation[6].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[6].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[6].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[6].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[6].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[6].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item"
						@click="musicClick(Song_recommendation[7].id,Song_recommendation[7].al.name,Song_recommendation[7].ar[0].name,Song_recommendation[7].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[7].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[7].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[7].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[7].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[7].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item"
						@click="musicClick(Song_recommendation[8].id,Song_recommendation[8].al.name,Song_recommendation[8].ar[0].name,Song_recommendation[8].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[8].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[8].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[8].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[8].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[8].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>

				<view class="song_list_wrap">
					<view class="song_list_item"
						@click="musicClick(Song_recommendation[9].id,Song_recommendation[9].al.name,Song_recommendation[9].ar[0].name,Song_recommendation[9].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[9].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[9].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[9].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[9].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[9].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item"
						@click="musicClick(Song_recommendation[10].id,Song_recommendation[10].al.name,Song_recommendation[10].ar[0].name,Song_recommendation[10].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[10].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[10].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[10].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[10].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[10].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item"
						@click="musicClick(Song_recommendation[11].id,Song_recommendation[11].al.name,Song_recommendation[11].ar[0].name,Song_recommendation[11].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[11].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[11].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[11].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[11].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[11].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>

				<view class="song_list_wrap">
					<view class="song_list_item"
						@click="musicClick(Song_recommendation[12].id,Song_recommendation[12].al.name,Song_recommendation[12].ar[0].name,Song_recommendation[12].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[12].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[12].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[12].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[12].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[12].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item"
						@click="musicClick(Song_recommendation[13].id,Song_recommendation[13].al.name,Song_recommendation[13].ar[0].name,Song_recommendation[13].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[13].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[13].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[13].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[13].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[13].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item"
						@click="musicClick(Song_recommendation[14].id,Song_recommendation[14].al.name,Song_recommendation[14].ar[0].name,Song_recommendation[14].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[14].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[14].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[14].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[14].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[14].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>

				<view class="song_list_wrap">
					<view class="song_list_item"
						@click="musicClick(Song_recommendation[15].id,Song_recommendation[15].al.name,Song_recommendation[15].ar[0].name,Song_recommendation[15].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[15].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[15].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[15].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[15].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[15].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item"
						@click="musicClick(Song_recommendation[16].id,Song_recommendation[16].al.name,Song_recommendation[16].ar[0].name,Song_recommendation[16].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[16].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[16].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[16].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[16].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[16].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item"
						@click="musicClick(Song_recommendation[17].id,Song_recommendation[17].al.name,Song_recommendation[17].ar[0].name,Song_recommendation[17].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[17].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[17].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[17].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[17].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[17].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>

				<view class="song_list_wrap">
					<view class="song_list_item"
						@click="musicClick(Song_recommendation[18].id,Song_recommendation[18].al.name,Song_recommendation[18].ar[0].name,Song_recommendation[18].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[18].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[18].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[18].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[18].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[18].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item"
						@click="musicClick(Song_recommendation[19].id,Song_recommendation[19].al.name,Song_recommendation[19].ar[0].name,Song_recommendation[19].al.picUrl)">
						<view class="list_item_logowrap">
							<view class="item_logo"
								:style="{'background-image': 'url('+Song_recommendation[19].al.picUrl+')'}"></view>
						</view>
						<view class="list_item_textwrap">
							<view
								:class="Songs.ids== Song_recommendation[19].id && Music_state==true?'item_texts item_green':'item_texts'">
								{{Song_recommendation[19].al.name}}
							</view>
							<view
								:class="Songs.ids== Song_recommendation[19].id && Music_state==true?'item_text item_green':'item_text item_grey'">
								{{Song_recommendation[19].ar[0].name}}
							</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>


				</view>

			</view>
		</view>

		<!-- 获取电台 -->
		<view class="radio_collect">
			<view class="" style="margin-left: 30rpx;font-weight: bold;">最热门的电台节目一键获得</view>
			<view class="radio_wrap">
				<view class="radio_item" v-for="(item,index) in Radio_recommendation" :key="index">
					<view class="radio_items" :style="{'background-image': 'url('+item.picUrl+')'}"></view>
					<view class=""
						style="font-size: 25rpx;white-space: normal;word-break: break-all;margin-left: 30rpx;">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
		<!-- 音乐视频 -->
		<view class="radio_collect" style="height: 400rpx;">
			<view class="" style="margin-left: 30rpx;font-weight: bold;">精选视频</view>
			<view class="radio_wrap">
				<view class="radio_item" v-for="(item,index) in Video_recommendation" :key="index">
					<view class="radio_items" :style="{'background-image': 'url('+item.data.coverUrl+')'}"></view>
					<view class=""
						style="font-size: 25rpx;white-space: normal;word-break: break-all;margin-left: 30rpx;">
						{{item.data.title}}
					</view>
				</view>
			</view>
		</view>

		<!-- 播客 -->
		<view class="songs" style="height: 600rpx;margin-top: 30rpx;">
			<view class="songs_title">
				<view class="songs_title_text">播客 听见另外一种声音</view>
				<view class="song_button">
					<view class="song_button_icon"></view>
					<view class="songs_button_play">播放</view>
				</view>
			</view>
			<view class="song_list">
				<view class="song_list_wrap">
					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[0].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[0].copywriter}}</view>
							<view class="item_text">{{Radio_hot[0].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[1].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[1].copywriter}}</view>
							<view class="item_text">{{Radio_hot[1].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[2].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[2].copywriter}}</view>
							<view class="item_text">{{Radio_hot[2].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>


				<view class="song_list_wrap">
					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[3].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[3].copywriter}}</view>
							<view class="item_text">{{Radio_hot[3].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[4].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[4].copywriter}}</view>
							<view class="item_text">{{Radio_hot[4].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[5].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[5].copywriter}}</view>
							<view class="item_text">{{Radio_hot[5].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>

				<view class="song_list_wrap">
					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[6].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[6].copywriter}}</view>
							<view class="item_text">{{Radio_hot[6].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[7].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[7].copywriter}}</view>
							<view class="item_text">{{Radio_hot[7].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[8].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[8].copywriter}}</view>
							<view class="item_text">{{Radio_hot[8].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>


				<view class="song_list_wrap">
					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[9].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[9].copywriter}}</view>
							<view class="item_text">{{Radio_hot[9].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[10].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[10].copywriter}}</view>
							<view class="item_text">{{Radio_hot[10].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[11].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[11].copywriter}}</view>
							<view class="item_text">{{Radio_hot[11].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>

				<view class="song_list_wrap">
					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[12].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[12].copywriter}}</view>
							<view class="item_text">{{Radio_hot[12].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[13].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[13].copywriter}}</view>
							<view class="item_text">{{Radio_hot[13].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[14].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[14].copywriter}}</view>
							<view class="item_text">{{Radio_hot[14].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>

				<view class="song_list_wrap">
					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[15].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[15].copywriter}}</view>
							<view class="item_text">{{Radio_hot[15].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[16].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[16].copywriter}}</view>
							<view class="item_text">{{Radio_hot[16].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[17].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[17].copywriter}}</view>
							<view class="item_text">{{Radio_hot[17].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>

				<view class="song_list_wrap">
					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[18].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[18].copywriter}}</view>
							<view class="item_text">{{Radio_hot[18].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[19].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[19].copywriter}}</view>
							<view class="item_text">{{Radio_hot[19].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>

					<view class="song_list_item">
						<view class="list_item_logowrap">
							<view class="item_logo" :style="{'background-image': 'url('+Radio_hot[20].picUrl+')'}">
							</view>
						</view>
						<view class="list_item_textwrap">
							<view class="item_texts">{{Radio_hot[20].copywriter}}</view>
							<view class="item_text">{{Radio_hot[20].name}}</view>
						</view>
						<view class="list_item_playwrap">
							<view class="item_play"></view>
						</view>
					</view>
				</view>
			</view>
		</view>


	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				isscorll: true,
				world: ''
			}
		},
		computed: {
			Song_recommendation() {
				return this.$store.state.Song_recommendation.dailySongs
			},
			Radio_recommendation() {
				return this.$store.state.Radio_recommendation.result
			},
			Video_recommendation() {
				return this.$store.state.Video_recommendation.video
			},
			Radio_hot() {
				return this.$store.state.Radio_hot.radio
			},
			Songs() {
				return this.$store.state.song
			},
			Music_state() {
				return this.$store.state.musicplay
			}
		},
		methods: {
			timestampToTime(timestamp) {
				let minute = parseInt(timestamp.substring(1, 3))
				let s = parseInt(timestamp.substring(4, 6))
				// let hs = timestamp.substring(7,10)
				return minute * 60 + s
			},
			scrolldown(e) {
				console.log(e, '移动到底部')
			},
			scorllmove(e) {
				console.log(e, '移动了')
			},
			musicClick(src, title, singer, picUrl) {
				var that = this
				uni.request({
					url: 'https://life-sage-seven.vercel.app/lyric?id=' + src,
					success(res) {
						res.data.lrc.lyric.split('\n').forEach((res) => {
							console.log(res.substring(0, 11))
							let sets = setInterval(() => {
								if (parseInt(that.$bgAudioMannager.currentTime) == that.timestampToTime(res.substring(0, 11))-2) {
									let reg = /\[[0-9]{2}:[0-9]{2}\.[0-9]{2,3}]/g
									that.$store.commit('save_words',res.replace(reg, ""))
								}
								if (that.Music_state != true) {
									console.log('清除定时器')
									clearInterval(sets)
								}
							}, 1000);
						})
					}
				})


				this.$bgAudioMannager.onPlay(() => {

				})
				

				// 判断是否是同一首歌曲
				if (src == this.Songs.ids && this.$bgAudioMannager.paused != true) {
					this.$store.commit('change_musicplay', false)
					this.$bgAudioMannager.pause()
				} else if (src == this.Songs.ids && this.$bgAudioMannager.paused == true) {
					this.$store.commit('change_musicplay', true)
					this.$bgAudioMannager.play()
				} else {
					this.$store.commit('change_musicplay', true)
					this.$store.commit('change_songs', {
						music_name: title,
						music_picUrl: picUrl,
						singer: singer,
						ids: src
					})
					this.$bgAudioMannager.title = this.Songs.music_name
					this.$bgAudioMannager.singer = this.Songs.singer
					this.$bgAudioMannager.coverImgUrl = this.Songs.music_picUrl
					this.$bgAudioMannager.src = 'https://music.163.com/song/media/outer/url?id=' + this.Songs.ids + '.mp3'
					this.$bgAudioMannager.play()
				}

			}
		}
	}
</script>

<style>
	.tuijian {
		width: 100%;
		height: 30%;
	}

	.banner {
		width: 100%;
		max-width: 100%;
		height: 100%;
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
		display: flex;
	}

	.banner::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	.song_list::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	.radio_wrap::-webkit-scrollbar {
		width: 0;
		height: 0;
	}

	.radio {
		width: 400rpx;
		height: 230rpx;
		background-image: url(../../static/img/songsdiv.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		flex: none;
		border-radius: 20rpx;
		display: flex;
		margin-left: 30rpx;
	}

	.radio-text {
		width: 50%;
		height: 100%;
	}

	.radio-img {
		width: 50%;
		height: 100%;
	}

	.daliy {
		width: 230rpx;
		height: 230rpx;
		background-color: #4CD964;
		margin-left: 20rpx;
		/* display: inline-block; */
		flex: none;
		border-radius: 20rpx;
		background-color: #1785FF;
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
		background-size: 100% 100%;
		background-repeat: no-repeat;
		margin-left: 20rpx;
		margin-top: 8rpx;
	}

	.song_button_play {
		background-image: url(../../static/img/play.png);
	}

	.song_button_stop {
		background-image: url(../../static/img/playstop.png);
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
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.item_texts {
		font-size: 35rpx;
	}

	.item_green {
		color: #4CD964;
	}

	.item_grey {
		color: #a1a1a1;
	}

	.item_text {
		font-size: 25rpx;
		margin-top: 10rpx;
	}

	.item_play {
		width: 60rpx;
		height: 60rpx;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		margin-top: 30rpx;
	}

	.play {
		background-image: url(../../static/img/playmini.png);
	}

	.stop {
		background-image: url(../../static/img/paue.png);
	}

	.item_radio {
		font-size: 40rpx;
		color: #FFFFFF;
		margin-top: 30rpx;
		margin-left: 30rpx;
	}

	.item_time {
		font-size: 35rpx;
		color: #FFFFFF;
		margin-top: 40rpx;
		margin-left: 30rpx;
	}

	.item_tect {
		font-size: 30rpx;
		color: #FFFFFF;
		margin-top: 10rpx;
		margin-left: 30rpx;
	}

	.title_playwrap {
		width: 50%;
		height: 100%;
	}

	.title_playlogo {
		width: 150rpx;
		height: 150rpx;
		background-image: url(../../static/img/songsbc.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		margin-top: 30rpx;
		margin-left: 30rpx;
		border-radius: 20rpx;
	}

	.title_play {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		background-image: url(../../static/img/playmini.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		margin-top: -70rpx;
		margin-left: 40rpx;
	}

	.radio_collect {
		width: 100%;
		margin-top: 100rpx;
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
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
</style>
