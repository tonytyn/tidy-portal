import { defRequest } from '@/utils/request'
import type { ResopnseResult } from '@/api/base-models'
import type { MenuTreeResult } from './models'

// 接口顺序：查/增/删/改（强迫症犯了）
export const getMenuTreeApi = () => {
  return defRequest.get<ResopnseResult<MenuTreeResult[]>>('/menu/tree')
}