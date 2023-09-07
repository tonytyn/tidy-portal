import { defRequest } from '@/utils/request'
import type { ResopnseResult,PageResult } from '@/api/base-models'
import type {  UserListResult, CreateUserParam, UpdateUserParam } from './models'

// 接口顺序：查/增/删/改（强迫症犯了）
export const searchUserListApi = (username: string): Promise<ResopnseResult<PageResult<UserListResult>>> => {
  return defRequest.get('/user?username=' + username)
}
export const createUserApi = (data: CreateUserParam): Promise<ResopnseResult<null>> => {
  return defRequest.post('/user/create', data)
}
export const deleteUserApi = (id: number): Promise<null> => {
  return defRequest.delete('/user/delete/' + id)
}
export const updateUserApi = (data: UpdateUserParam): Promise<null> => {
  return defRequest.put('/user/update', data)
}
