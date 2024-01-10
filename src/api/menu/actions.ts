import { defRequest } from '@/utils/request'
import type { MenuListModel, MenuTreeModel } from './models'

// 接口顺序：查/增/删/改（强迫症犯了）

export const getMenuListApi = () => {
  return defRequest.get<ResponseResult<MenuListModel[]>>('/menu/list')
}
export const getMenuTreeApi = () => {
  return defRequest.get<ResponseResult<MenuTreeModel[]>>('/menu/tree')
}
