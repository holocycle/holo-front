/* eslint-disable no-alert */
import axios from 'axios'

const GET = 'get'
const POST = 'post'
const PUT = 'put'
const DELETE = 'delete'

function request (method, url, params) {
  let promise = null
  const fullUrl = process.env.API_URL + url

  console.log(fullUrl)

  if (method === GET) {
    promise = axios.get(fullUrl, { params })
  } else if (method === POST) {
    promise = axios.post(fullUrl, params)
  }
  return promise
}

function requestWithToken (method, url, params) {
  const fullUrl = process.env.API_URL + url

  return axios({
    method,
    url: fullUrl,
    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    data: params
  })
}

export default {
  get (url, params) {
    return request(GET, url, params)
  },

  post (url, params) {
    return request(POST, url, params)
  },

  postWithToken (url, params, token) {
    return requestWithToken(POST, url, params, token)
  },

  put (url, params) {
    return request(PUT, url, params)
  },

  putWithToken (url, params, token) {
    return requestWithToken(PUT, url, params, token)
  },

  delete (url, params) {
    return request(DELETE, url, params)
  },

  deleteWithToken (url, params, token) {
    return requestWithToken(DELETE, url, params, token)
  }
}
