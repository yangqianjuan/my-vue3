import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { hyRequest } from './service/index'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
hyRequest.request({
  url: '/home/multidata',
  method: 'GET',
  headers: {},
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的拦截', config)
      if (config.headers) {
        config.headers['token'] = '1233333'
      }
      return config
    }
  }
})
