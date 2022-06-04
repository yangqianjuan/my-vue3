import { createStore } from 'vuex'
import login from './login/index'

const store = createStore({
  state: () => {
    return {
      username: '',
      password: ''
    }
  },
  modules: {
    login
  }
})

export default store
