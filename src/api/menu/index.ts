import { defRequest } from '@/utils/request'
import type { MenuListResult, MenuTreeResult } from './models'

// 接口顺序：查/增/删/改（强迫症犯了）
export const getMenuListApi = () => {
  return defRequest.get<ResponseResult<MenuListResult[]>>('/menu/list')
}
export const getMenuTreeApi = () => {
  return defRequest.get<ResponseResult<MenuTreeResult[]>>('/menu/tree')
}
