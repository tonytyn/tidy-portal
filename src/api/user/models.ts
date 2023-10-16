
export interface SearchUserParam {
  username: string
  pageNum: number
  pageSize: number
}
export interface UserListResult {
  readonly id: number
  username: string
  account: string
  state: string
}
export interface UserDetailResult {
  readonly id: number
  username: string
  account: string
  phone: string
  state: string
  createdAt: string
}
export interface CreateUserParam {
  username: string
  account: string
  password: string
  phone: string
}

export interface UpdateUserParam {
  readonly id: number
  username: string
  account: string
  phone: string
  state: string
}
