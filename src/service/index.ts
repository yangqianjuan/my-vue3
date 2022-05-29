import HYRequest from './request/index'
import { BASE_URL } from './request/config'
console.log(process.env)

export const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功的拦截')
      const token = '1212121212'
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      console.log(config)
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  },
  showLoading: true
})
