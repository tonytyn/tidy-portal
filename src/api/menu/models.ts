export interface MenuTreeResult {
  id: number
  menuName: string // 菜单名称
  permissionCode: string // 权限标识
  menuType: string // 菜单类型
  developer?: string //开发者
  finishAt?: string //完成时间
  children?: MenuTreeResult
}
