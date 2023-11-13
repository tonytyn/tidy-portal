export interface MenuListResult {
  id: number
  menuName: string // 菜单名称
  permissionCode: string // 权限标识
  menuType: string // 菜单类型
  developer?: string //开发者
  finishAt?: string //完成时间
  children?: MenuListResult
}
export interface MenuTreeResult {
  key: number
  title: string // 菜单名称
  children?: MenuTreeResult[]
}
