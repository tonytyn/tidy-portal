export interface BasicPageParams {
  page: number
  pageSize: number
}

export interface BasicFetchResult<T> {
  items: T[]
  total: number
}
export interface Option {
  label: string
  value: number
  disabled: boolean
}

export interface ResopnseResult<T> {
  code: number
  msg: string
  data: T
}
export interface PageResult<T> {
  total: number
  list: T[]
}

export interface Pane {
  key: string
  title: string
}

