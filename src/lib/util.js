//与业务有关的公共方法
import Cookies from 'js-cookie'

export const setTitle = (title) => {
  window.document.title = title || 'admin'
}

export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
//window.sessionStorage.setItem('token', token)
}

export const getToken = (tokenName = 'token') => {
//	return window.sessionStorage.getItem('token')
	return Cookies.get(tokenName)
}
