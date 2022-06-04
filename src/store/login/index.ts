import { Module } from 'vuex'
import { LState, RState } from './type'
import { hyRequest } from '@/service/index'
const loginModule: Module<LState, RState> = {
  namespaced: true,
  state: () => {
    return {
      username: '',
      password: ''
    }
  },
  mutations: {},
  actions: {
    loginActions({ commit }, payload) {
      hyRequest
        .request({ url: 'login', method: 'GET', params: payload })
        .then((result: any) => {
          console.log(result)
        })
        .catch((err: any) => {
          console.log(err)
        })
    }
  }
}
export default loginModule
