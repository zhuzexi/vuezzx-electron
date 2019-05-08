import { getAppName } from '@/api/app'

const actions = {
  upDateAppName ({ commit }) {
    getAppName().then(res => {
      commit('SET_APP_NAME', res.info.appName)
    }).catch(err => {
      console.log(err)
    })
  }
}

export default actions
