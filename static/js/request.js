// const baseURL = 'http://47.114.59.188/'
const baseURL = 'http://chenzhouhuang.cn.utools.club/'
// const baseURL = 'https://kwkxcx.com'
// const baseURL = ''
// const baseURL = getApp()
// console.log(baseURL)
const request = {
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
					resolve(res.data)
				},
				fail: (error) => {
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
					resolve(res.data)
				},
				fail: (err) => {
					reject(err.data)
				}
				
			})
		})
	}
}
export default request