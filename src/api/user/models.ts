
export interface UserListResult {
  id: number
  username: string
  account: string
  state: string
}
export interface CreateUserParam {
  parentId?: number
  menuName: string
  menuCode: string
  menuType: string
}

export interface UpdateUserParam {
  readonly id: number
  parentId: number
  menuName: string
}
