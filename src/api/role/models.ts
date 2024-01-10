export interface RoleListModel {
  readonly id: number
  roleName: string
  state: string
  createdAt: string
}
export interface RoleDetailModel {
  readonly id: number
  roleName: string
  state: string
  createdAt: string
}
export interface CreateRoleParam {
  roleName: string
}

export interface UpdateRoleParam {
  readonly id: number
  roleName: string
  state: string
  menuIds: number[]
}
