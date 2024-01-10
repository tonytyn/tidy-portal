import { defRequest } from '@/utils/request'
import type { AppListModel } from '@/api/app/models'

export const searchAppList = () => {
  return defRequest.get<ResponseResult<AppListModel[]>>('/app/list')
}
