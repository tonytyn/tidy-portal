
export interface UserListResult {
  id: number
  username: string
  account: string
  state: string
}
export interface CreateUserParam {
  username: string
  account: string
  password: string
  phone: string
}

export interface UpdateUserParam {
  readonly id: number
  parentId: number
  menuName: string
}
