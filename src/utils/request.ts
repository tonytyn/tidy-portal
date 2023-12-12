import axios from 'axios'
import type { AxiosInstance } from 'axios'

export const defRequest: AxiosInstance = axios.create({
  // api接口地址，开发环境不配或者配成空字符串都行，生产环境需要指定后端地址
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  timeout: 3000 // 请求超时时间
})
