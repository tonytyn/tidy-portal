import { defRequest } from '@/utils/request'
import type { LoginParam } from './models'

export const login = (data: LoginParam) => {
  return defRequest.post<ResponseResult<null>>('/system/login', data)
}
