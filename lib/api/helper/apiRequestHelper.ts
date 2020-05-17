import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Method } from 'axios'

let $axios: NuxtAxiosInstance

export function initializeAxios (axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

function request<req, res> (method: Method, url: string, params: req): Promise<res> {
  const fullUrl = process.env.API_URL + url

  console.log(fullUrl)
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
