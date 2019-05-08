import { login, authorization } from '@/api/user'
import { setToken } from '@/lib/util'
import Cookies from 'js-cookie'
export default {
  state: {
    userName: 'zzx',
    rules: {}
  },
  mutations: {
    SET_RULES (state, rules) {
      state.rules = rules
    }
  },
  actions: {
    //登录
    login ({ commit }, { userName, password }) {
      return new Promise((resolve, reject) => {
        login({ userName, password }).then(res => {
          if (res.code === 200 && res.data.token) {
            setToken(res.data.token)
            resolve()
          } else {
            reject(new Error('错误'))
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    authorization ({ commit }, token) {
      return new Promise((resolve, reject) => {
        authorization().then(res => {
          if (parseInt(res.code) === 401) {
            reject(new Error('token error'))
          } else {
            setToken(res.data.token)
            resolve(res.data.rules.page)
            commit('SET_RULES', res.data.rules.component)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
