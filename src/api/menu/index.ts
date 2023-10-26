import { defRequest } from '@/utils/request'
import type { ResopnseResult } from '@/api/base-models'
import type { MenuListResult,MenuTreeResult } from './models'

// 接口顺序：查/增/删/改（强迫症犯了）
export const getMenuListApi = () => {
  return defRequest.get<ResopnseResult<MenuListResult[]>>('/menu/list')
}
export const getMenuTreeApi = () => {
  return defRequest.get<ResopnseResult<MenuTreeResult[]>>('/menu/tree')
}