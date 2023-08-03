import { defRequest } from '@/utils/request'
import type { ResopnseResult } from '@/api/base-models'
import type { MenuTreeResult, CreateMenuParam, UpdateMenuParam } from './models'

// 接口顺序：查/增/删/改（强迫症犯了）
export const getUserListApi = (): Promise<ResopnseResult<MenuTreeResult>> => {
  return defRequest.get('/menu/tree')
}
export const createUserApi = (data: CreateMenuParam): Promise<ResopnseResult<null>> => {
  return defRequest.post('/menu/create', data)
}
export const deleteUserApi = (id: number): Promise<null> => {
  return defRequest.delete('/menu/delete/' + id)
}
export const updateUserApi = (data: UpdateMenuParam): Promise<null> => {
  return defRequest.put('/menu/update', data)
}
