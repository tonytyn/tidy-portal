export interface BasicPageParams {
  page: number
  pageSize: number
}

export interface BasicFetchResult<T> {
  items: T[]
  total: number
}

export interface ResopnseResult<T> {
  code: number
  msg: string
  data: T
}

export interface PageResult<T> {
  pageUnm: number
  pageSize: number
  total: number
  list: T[]
}
