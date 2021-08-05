import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		// 音乐部分状态
		// 音乐播放/暂停状态  true是正在播放中 false是停止播放
		'musicplay':'false',
		// 歌单状态
		'songslist':{
			songs:''
		},
		// 保存歌单数据
		'song':{
			music_name:'暂无音乐',
			music_num:'',
			music_picUrl:'../../static/img/songsdiv.jpg',
			singer:'',
			ids:'',
			endtime:0
		},
		// 保存歌曲评论 及状态
		'talk': {
			comment:'',
			id : '',
			page: 1
		},
		// 首页歌曲存储
		'index_songs':{
			songs:''
		},
		// 歌曲推荐
		'Song_recommendation':{
			dailySongs:''
		},
		// 电台推荐
		'Radio_recommendation':{
			result:''
		},
		// 视频推荐
		'Video_recommendation':{
			video:''
		},
		// 热门电台
		'Radio_hot': {
			radio:''
		},
		// 保存当前歌词
		'Words':''
	},
	mutations:{
		change_musicplay(state,payload) {
			state.musicplay = payload
		},
		change_songs(state, payload) {
			state.song.music_name = payload.music_name
			state.song.music_num = payload.music_num
			state.song.music_picUrl = payload.music_picUrl
			state.song.singer= payload.singer
			state.song.ids = payload.ids
			state.song.endtime = payload.endtime
		},
		change_songslist(state,payload) {
			state.songslist.songs = payload
		},
		change_talk(state,payload){
			state.talk.comment = payload.comment
			state.talk.id = payload.id
			state.talk.page = payload.page
		},
		save_songs(state,payload){
			state.index_songs.songs = payload.songs
		},
		save_recommendation(state,payload) {
			console.log(payload.songs,99)
			state.Song_recommendation.dailySongs = payload.songs
		},
		save_radio(state,payload){
			state.Radio_recommendation.result = payload
		},
		save_video(state,payload){
			state.Video_recommendation.video = payload
		},
		save_radio_hot(state,payload){
			console.log('存储了',payload)
			state.Radio_hot.radio = payload
		},
		save_words(state,payload) {
			state.Words = payload
		}
	},
	actions:{}
})
export default store