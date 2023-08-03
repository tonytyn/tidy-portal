export interface MenuTreeResult {
  id: number
  parentId?: number
  menuName: string
  menuCode: string
  menuType: string
}

export interface CreateMenuParam {
  parentId?: number
  menuName: string
  menuCode: string
  menuType: string
}

export interface UpdateMenuParam {
  readonly id: number
  parentId: number
  menuName: string
}
