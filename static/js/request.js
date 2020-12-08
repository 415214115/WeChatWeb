const baseURL = 'http://47.114.59.188/coupon'
// const baseURL = 'http://chenzhouhuang.cn1.utools.club'
// const baseURL = 'https://kwkxcx.com'
// const baseURL = ''
// const baseURL = getApp()
// console.log(baseURL)
const request = {
	callBack:(url, data)=>{
		return new Promise((resolve, reject) => {
			uni.request({
				url: baseURL + url,
				data,
				method:'GET',
				dataType:'json',
				success: (res)=>{
					if(res.data.code != 'succes' && res.data.code != 'loginError'){
						uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 200
						})
						reject(res.data)
					} else {
						resolve(res.data)
					}
				},
				fail: (error) => {
					console.error(err)
					reject(error.data)
				}
			})
		})
	},
	get: (url, data) => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: baseURL + url,
				data,
				method:'GET',
				dataType:'json',
				header: {
				    'token': uni.getStorageSync('token') || ''
				},
				success: (res)=>{
					if(res.data.code == 'loginError'){
						uni.showModal({
							showCancel: false,
							content: '前往登陆',
							title: '登陆提示',
							success: () => {
								let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc1e7cad6a53ecdbf&redirect_uri=http%3A%2F%2Fwww.168wangwang.wang%2F&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect'
								// let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx27e5e3576b8ab430&redirect_uri=http%3a%2f%2f192.168.0.106%3a8080&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect'
								window.location.href = url
							}
						})
					}
					if(res.data.code != 'succes' && res.data.code != 'loginError'){
						uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 200
						})
						reject(res.data)
					} else {
						resolve(res.data)
					}
				},
				fail: (error) => {
					console.error(err)
					reject(error.data)
				}
			})
		})
	},
	getSignature: (url, data) => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: baseURL + url,
				data,
				method:'GET',
				dataType:'json',
				header: {
				    'token': uni.getStorageSync('jsapi_ticket_token') || ''
				},
				success: (res)=>{
					resolve(res.data)
				},
				fail: (error) => {
					reject(error.data)
				}
			})
		})
	},
	post: (url, data) => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: baseURL + url,
				data,
				method:'POST',
				dataType:'json',
				header: {
				    'content-type': 'application/json' ,
					'token': uni.getStorageSync('token') || ''
				},
				success: (res)=>{
					if(res.data.code == 'loginError'){
						uni.showModal({
							showCancel: false,
							content: '前往登陆',
							title: '登陆提示',
							success: () => {
								let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc1e7cad6a53ecdbf&redirect_uri=http%3A%2F%2Fwww.168wangwang.wang%2F&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect'
								// let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx27e5e3576b8ab430&redirect_uri=http%3a%2f%2f192.168.0.106%3a8080&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect'
								window.location.href = url
							}
						})
					}
					if(res.data.code != 'succes' && res.data.code != 'loginError'){
						uni.showToast({
							icon: 'none',
							title: res.data.msg,
							duration: 200
						})
						reject(res.data)
					} else {
						resolve(res.data)
					}
				},
				fail: (err) => {
					reject(err.data)
				}
				
			})
		})
	}
}
export default request