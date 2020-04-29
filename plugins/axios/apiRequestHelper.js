/* eslint-disable no-alert */
import axios from 'axios'

export default {
  request (method, url, params) {
    let promise = null
    const fullUrl = process.env.API_URL + url

    console.log(fullUrl)

    if (method === 'get') {
      promise = axios.get(fullUrl, { params })
    } else if (method === 'post') {
      promise = axios.post(fullUrl, params)
    }
    return promise
  },

  requestWithToken (method, url, params) {
    const token = localStorage.token
    const fullUrl = process.env.API_URL + url

    return axios({
      method,
      url: fullUrl,
      headers: { authorization: token },
      data: params
    })
  },

  get (url, params) {
    return this.request('get', url, params)
  },

  post (url, params) {
    console.log(url)
    return this.request('post', url, params)
  },

  login (loginId, pass) {
    const apiUrl = process.env.API_URL

    return axios.post(`${apiUrl}/user/login`, {
      loginId,
      pass
    })
  }
}
