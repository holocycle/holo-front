import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Method } from 'axios'

let $axios: NuxtAxiosInstance

export function initializeAxios (axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
  $axios.interceptors.request.use((request) => {
    console.log(request.url)
    return request
  })
  $axios.interceptors.response.use((response) => {
    return response
  }, (error) => {
    if (error.response.status === 401 &&
      process.client &&
      typeof process.env.LOGIN_URL !== 'undefined' &&
      localStorage.getItem('token') !== null
    ) {
      console.log(localStorage.getItem('token'))
      const path = location.pathname
      localStorage.setItem('redirectPath', path)
      // window.location.href = process.env.LOGIN_URL
    }
    return error
  })
}

function request<req, res> (method: Method, url: string, params: req): Promise<res> {
  const fullUrl = process.env.API_URL + url

  if (method === 'GET') {
    return $axios.$get<res>(fullUrl, { params })
  } else if (method === 'POST') {
    return $axios.$post<res>(fullUrl, params)
  } else if (method === 'PUT') {
    return $axios.$put<res>(fullUrl, params)
  } else if (method === 'DELETE') {
    return $axios.$delete<res>(fullUrl, params)
  }
  throw Error
}

function requestWithToken<req, res> (method: Method, url: string, params: req): Promise<res> {
  const fullUrl = process.env.API_URL + url
  const token = localStorage.getItem('token')

  return $axios.$request<res>(
    {
      method,
      url: fullUrl,
      headers: {
        Authorization: 'Bearer ' + token
      },
      data: params
    }
  )
}

export default {
  get<req, res> (url: string, params: req): Promise<res> {
    return request<req, res>('GET', url, params)
  },

  getWithToken<req, res> (url: string, params: req): Promise<res> {
    return requestWithToken<req, res>('GET', url, params)
  },

  post<req, res> (url: string, params: req): Promise<res> {
    return request<req, res>('POST', url, params)
  },

  postWithToken<req, res> (url: string, params: req): Promise<res> {
    return requestWithToken<req, res>('POST', url, params)
  },

  put<req, res> (url: string, params: req): Promise<res> {
    return request<req, res>('PUT', url, params)
  },

  putWithToken<req, res> (url: string, params: req): Promise<res> {
    return requestWithToken<req, res>('PUT', url, params)
  },

  delete<req, res> (url: string, params: req): Promise<res> {
    return request<req, res>('DELETE', url, params)
  },

  deleteWithToken<req, res> (url: string, params: req): Promise<res> {
    return requestWithToken<req, res>('DELETE', url, params)
  }
}
