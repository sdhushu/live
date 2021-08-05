import Vue from 'vue'
import App from './App'
import store from './store/index.js'

// 状态管理
Vue.prototype.$store = store
// 全局音频
Vue.prototype.$bgAudioMannager = uni.getBackgroundAudioManager()

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
