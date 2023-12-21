import { defRequest } from '@/utils/request'
import type {
  SearchUserParam,
  UserDetailResult,
  UserListResult,
  CreateUserParam,
  UpdateUserParam
} from './models'

// 接口顺序：查/增/删/改（强迫症犯了）
export const searchUserListApi = (searchUserParam: SearchUserParam) => {
  // 这里返回的是一个Promise，需要用await才能拿到resolve后的结果
  // 这里本想使用restFul风格的（user/username/张三）无奈mock-server接收path参数不方便，只能先这样用query传了
  return defRequest.get<ResponseResult<PageResult<UserListResult>>>(
    '/user/list?username=' +
      searchUserParam.username +
      '&pageNum=' +
      searchUserParam.pageNum +
      '&pageSize=' +
      searchUserParam.pageSize
  )
}
export const getUserDetailApi = (userId: number) => {
  return defRequest.get<ResponseResult<UserDetailResult>>('/user/detail?id=' + userId)
}
export const getUserRoleIdsApi = (userId: number) => {
  return defRequest.get<ResponseResult<number[]>>('/user/roles?id=' + userId)
}
export const createUserApi = (data: CreateUserParam) => {
  return defRequest.post<ResponseResult<null>>('/user/create', data)
}
export const deleteUserApi = (id: number) => {
  return defRequest.delete<ResponseResult<null>>('/user/delete?id=' + id)
}
export const updateUserRolesApi = (userId: number, roleIds: number[]) => {
  return defRequest.put<ResponseResult<number[]>>('/user/roles?id=' + userId, roleIds)
}
export const updateUserApi = (data: UpdateUserParam) => {
  return defRequest.put<ResponseResult<null>>('/user/update', data)
}
