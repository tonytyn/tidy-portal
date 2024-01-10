import { defRequest } from '@/utils/request'
import type { AppListModel, AppDetailModel } from '@/api/app/models'

export const searchAppList = () => {
  return defRequest.get<ResponseResult<AppListModel[]>>('/app/list')
}
export const getAppDetail = (id: number) => {
  return defRequest.get<ResponseResult<AppDetailModel>>('/app/detail', { params: { id: id } })
}
