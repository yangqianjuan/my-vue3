import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { HYRequestConfig, HYInterceptors } from './type'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const DEFAULT_LOADING = false
class HYRequest {
  instance: AxiosInstance
  interceptors?: HYInterceptors
  showLoading: boolean
  loading?: ILoadingInstance
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    //传入的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全部实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            fullscreen: true,
            text: '数据加载中'
          })
        }
        console.log('所有请求成功拦截')
        return config
      },
      (err) => {
        console.log('所有请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        if (this.loading) {
          this.loading?.close()
        }

        console.log('所有响应成功拦截')
        return res
      },
      (err) => {
        console.log('所有响应失败拦截')
        return err
      }
    )
  }
  request<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T>(config: HYRequestConfig): Promise<T> {
    return this.instance.request({ ...config, method: 'GET' })
  }
}
export default HYRequest
