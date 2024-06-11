import App from './App' 
import fui from './common/fui-app'
import fuiConfig from './components/firstui/fui-config'
import store from './store'


//全局组件配置
uni.$fui = fuiConfig
uni.fui = fui

// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.fui = fui

App.mpType = 'app' 

const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	app.config.globalProperties.fui = fui;
	return {
		app
	}
} 
// #endif