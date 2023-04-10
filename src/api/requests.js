import axios from 'axios'
import { URL_PREFIX } from '../constants'
import { STORAGE } from 'constants/common'
import { getCookie } from 'utils'

const getUrlPrefix = () => '/'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
})

const accessToken = getCookie(STORAGE.ACCESS_TOKEN)
if (accessToken) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
}

instance.interceptors.request.use(
  function (config) {
    if (accessToken) {
      config.headers.Accept = 'application/json'
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    //refresh token if expired and retry ? times
    return Promise.reject(error)
  }
)

const get = async (url, params = {}) => {
  try {
    const config = { params: params }
    const response = await instance.get(getUrlPrefix() + url, config)
    return _responseHandler(response)
  } catch (error) {
    return _errorHandler(error)
  }
}

const put = async (url, data = {}, config = {}) => {
  try {
    let response = {}
    if (data.toLocaleString() === '[object FormData]') {
      response = await instance.put(getUrlPrefix() + url, data, {
        ...config
      })
    } else {
      response = await instance.put(getUrlPrefix() + url, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
    }
    return _responseHandler(response)
  } catch (error) {
    _errorHandler(error)
  }
}

const post = async (url, data = {}, config) => {
  try {
    const response = await instance.post(getUrlPrefix() + url, data, config)
    return _responseHandler(response)
  } catch (error) {
    _errorHandler(error)
  }
}

const del = async (url, data = {}) => {
  try {
    const response = await instance.delete(getUrlPrefix() + url, {data})
    return _responseHandler(response)
  } catch (error) {
    _errorHandler(error)
  }
}

const _responseHandler = (response, url) => {
  return response.data
}

const _errorHandler = (err) => {
  if (err.response && err.response.status === 401) {
    // todo
  }
  throw err
}

export { get, post, del, put }
