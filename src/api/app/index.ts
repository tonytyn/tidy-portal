import { defRequest } from '@/utils/request'
import type { AppListResult } from './models'

// 接口顺序：查/增/删/改（强迫症犯了）
export const searchAppListApi = () => {
  return defRequest.get<ResponseResult<AppListResult[]>>('/app/list')
}

