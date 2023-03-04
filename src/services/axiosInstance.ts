import { message } from 'antd'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
  },
})

axiosInstance.interceptors.request.use(
  config => {
    // config.headers.Authorization = `Bearer ${''}`
    return config
  },
  error => {
    return Promise.reject(error)
  },
)
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const statusCode = error?.response?.status
    if (statusCode !== 400) message.error(error.message)

    return Promise.reject(error)
  },
)
