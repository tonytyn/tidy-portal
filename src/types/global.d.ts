interface ResponseResult<T> {
  code: number
  msg: string
  data: T
}

interface PageResult<T> {
  total: number
  list: T[]
}

interface Pane {
  key: string
  title: string
}

interface Option {
  label: string
  value: number
  disabled: boolean
}
