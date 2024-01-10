import { defRequest } from '@/utils/request'
import type { AppListModel } from '@/api/app/models'

const AppApi = {
  searchList: '/app/list'
}
export const searchAppList = () => {
  return defRequest.get<ResponseResult<AppListModel[]>>(AppApi.searchList)
}
