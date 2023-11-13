
export interface RoleListResult {
  readonly id: number
  roleName: string
  state: string
  createdAt: string
}
export interface RoleDetailResult {
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
