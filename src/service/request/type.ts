import { AxiosRequestConfig, AxiosResponse } from 'axios'
interface HYInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYInterceptors
  showLoading?: boolean
}

export { HYRequestConfig, HYInterceptors }
