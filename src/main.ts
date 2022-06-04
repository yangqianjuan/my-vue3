import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { hyRequest } from './service/index'
import { globalRegister } from './global/index'
import '@/assets/css/index.css'
const app = createApp(App)
app.use(store)
app.use(router)
app.use(globalRegister)
app.mount('#app')

hyRequest.get({
  url: '/home/multidata',
  // method: 'GET',
  headers: {},
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的拦截器')
      if (config.headers) {
        config.headers['token'] = 'xixixixiix'
      }

      return config
    }
  }
})
