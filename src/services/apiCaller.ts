import { AxiosRequestConfig } from 'axios'
import { axiosInstance } from './axiosInstance'

export const apiCaller = {
  get: async <T>(url: string, config?: AxiosRequestConfig<any>) => {
    try {
      const res = await axiosInstance.get<T>(url, config)
      if (res.status >= 200 && res.status < 300) {
        return res
      }
    } catch (err) {
      console.log(err)
    }
  },
  post: async <T>(url: string, data?: any, config?: AxiosRequestConfig<any>) => {
    try {
      const res = await axiosInstance.post<T>(url, data, config)

      if (res.status >= 200 && res.status < 300) {
        return res
      }
    } catch (err) {
      console.log(err)
    }
  },
  put: async <T>(url: string, data: any, config?: AxiosRequestConfig<any>) => {
    try {
      const res = await axiosInstance.put<T>(url, data, config)
      if (res.status >= 200 && res.status < 300) {
        return res
      }
    } catch (err) {
      console.log(err)
    }
  },
  delete: async <T>(url: string, data: any) => {
    try {
      const res = await axiosInstance.delete<T>(url, data)
      if (res.status >= 200 && res.status < 300) {
        return res
      }
    } catch (err) {
      console.log(err)
    }
  },
}
