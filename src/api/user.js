import axios from './index'
//登录
// export const login = (userName, password) => {
//   return new Promise((resolve, reject) => {
//     resolve({ code: 200, mes: '登录成功', token: true })
//     reject({ code: 401, mes: '登录失败', token: false })
//   })
// }
export const login = ({ userName, password }) => {
  return axios.request({
    url: 'http://localhost:3000/index/login',
    method: 'post',
    data: {
      userName,
      password
    }
  })
}
//权限列表
export const authorization = () => {
  return axios.request({
    url: 'http://localhost:3000/users/authorization',
    method: 'get'
  })
}
