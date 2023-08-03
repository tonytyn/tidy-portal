import axios from 'axios'
import type { AxiosInstance } from 'axios'

export const defRequest: AxiosInstance = axios.create({
  baseURL: '/base', // 统一接口前缀，方便反向代理配置
  timeout: 3000 // 请求超时时间
})
