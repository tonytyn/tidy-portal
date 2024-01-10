import { defRequest } from '@/utils/request'
import type { MenuListModel, MenuTreeModel } from './models'

// 接口顺序：查/增/删/改（强迫症犯了）

export const getMenuList = () => {
  return defRequest.get<ResponseResult<MenuListModel[]>>('/menu/list')
}
export const getMenuTree = () => {
  return defRequest.get<ResponseResult<MenuTreeModel[]>>('/menu/tree')
}
