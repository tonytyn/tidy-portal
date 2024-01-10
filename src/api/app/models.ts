export interface AppListModel {
  id: number
  appKey: string // 应用唯一标识
  appName: string // 应用名称
  appBrief: string // 应用简介
  authorized: boolean //是否已授权
}
