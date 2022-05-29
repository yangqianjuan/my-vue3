import axios, { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'
import { HYRequestInterceptors, HYRequestConfig } from './type'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'
const DEFAULTE_LOADING = false
class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)

    this.showLoading = config.showLoading ?? DEFAULTE_LOADING
    if (config.interceptors) {
      this.interceptors = config.interceptors
    }

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都具有的请求成功拦截')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            fullscreen: true,
            lock: true,
            text: '数据请求中。。。。'
          })
        }
        return config
      },
      (err) => {
        console.log('所有实例都具有的请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        if (this.showLoading) {
          this.loading?.close()
        }
        console.log('所有实例都具有的响应成功拦截')
        const data = res.data
        return data
      },
      (err) => {
        console.log('所有实例都具有的响应失败拦截')
        return err
      }
    )
  }
  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      console.log(config, '>>>>>>')
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
          this.showLoading = DEFAULTE_LOADING
        })
        .catch((err) => {
          reject(err)
          this.showLoading = DEFAULTE_LOADING
          return err
        })
    })
  }
}

export default HYRequest
