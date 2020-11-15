import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 全局请求or api
import request from './static/js/request.js'
Vue.prototype.$request = request
import jweixin from 'jweixin-module'
Vue.prototype.$wx = jweixin
// jweixin.config({
// 	debug: true,
// 	appId: 'wx27e5e3576b8ab430', // 必填，公众号的唯一标识
// 	  timestamp: '1605363204574', // 必填，生成签名的时间戳
// 	  nonceStr: '111', // 必填，生成签名的随机串
// 	  signature: '68f13c1e9f615a6b1a89cab38e041d73',// 必填，签名
// 	jsApiList: [
// 		"getLocation", //获取地理位置
// 		"chooseWXPay" //微信支付
// 	]
// });
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
