import { defRequest } from '@/utils/request'
import type { RoleListModel, CreateRoleParam, UpdateRoleParam } from './models'

// 接口顺序：查/增/删/改（强迫症犯了）
export const searchRoleList = () => {
  // 这里返回的是一个Promise，需要用await才能拿到resolve后的结果
  // 这里本想使用restFul风格的（user/username/张三）无奈mock-server接收path参数不方便，只能先这样用query传了
  return defRequest.get<ResponseResult<RoleListModel[]>>('/role/list')
}
export const getRoleDetail = (roleId: number) => {
  return defRequest.get<ResponseResult<RoleListModel>>('/role/detail?id=' + roleId)
}
export const getRoleMenus = (roleId: number) => {
  return defRequest.get<ResponseResult<number[]>>('/role/menus?id=' + roleId)
}
export const createRole = (data: CreateRoleParam) => {
  return defRequest.post<ResponseResult<null>>('/role/create', data)
}
export const deleteRole = (id: number) => {
  return defRequest.delete<ResponseResult<null>>('/role/delete?id=' + id)
}
export const updateRole = (data: UpdateRoleParam) => {
  return defRequest.put<ResponseResult<null>>('/role/update', data)
}
