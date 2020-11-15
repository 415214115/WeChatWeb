// const baseURL = 'https://chenzhouhuang.utools.club'
// const baseURL = 'https://kwkxcx.com'
const baseURL = ''
const request = {
	get: (url, data) => {
		return new Promise((resolve, reject) => {
			uni.request({
				url: baseURL + url,
				data,
				method:'GET',
				dataType:'json',
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
				    'content-type': 'application/json' 
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