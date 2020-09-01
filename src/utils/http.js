
import React from 'react'
import axios from 'axios'
const isDev = process.env.NODE_ENV === 'development'
const globalConfig = {
	apiPath: ''
}

class HttpServe {
	constructor() {
		this.http = axios.create({
			baseURL: isDev ? `//${window.location.host}/api/` : `//${globalConfig.apiPath}/`,
			withCredentials: true
		})
	}

	watch() {
		this.http.interceptors.request.use((config:any) => new Promise((resolve) => {
			config.params = config.params || {}
			// if (config.method === 'get' && !config.params.vt) {
			//     config.params.vt = Date.now()
			// }
			resolve(config)
		}), (error) => Promise.reject(error))


		this.http.interceptors.response.use((res) => {
			// 未登录异常处理
			if(res.data.code === -10) {
				// @ts-ignore
				React.$message.error('请去登录')
				setTimeout(() => {
					window.location.href = '/sparkmangement/login'
				}, 1500)
			}
			// 系统错误
			if(res.data.code === -1) {
				// @ts-ignore
				React.$message.error(res.data.msg)
			}
			return res
		})
	}

	get(url, params, config) {
		return new Promise((resolve, reject) => {
			this.http.get(url, {
				params: params
			}, config).then((res) => {
			resolve(res)
			}, (e) => {
				console.log('网络异常', e)
				reject()
			}).finally(() => {

			})
		})
	}

	post(url, params, config) {
		return new Promise((resolve, reject) => {
			this.http.post(url, params, config).then((res) => {
				resolve(res)
			}, (e) => {
				console.log('网络异常', e)
				reject()
			}).finally(() => {

			})
		})
	}
}

let httpServe = new HttpServe()
httpServe.watch()

export default httpServe
