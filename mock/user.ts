import { MockMethod } from 'vite-plugin-mock'

const userList = [
  {
    id: 1,
    username: '张三',
    account: 'abc123...',
    state: '启用'
  },
  {
    id: 2,
    username: '李四',
    account: 'abc123...',
    state: '启用'
  },
  {
    id: 3,
    username: '王五',
    account: 'abc123...',
    state: '启用'
  },
  {
    id: 4,
    username: '赵六',
    account: 'abc123...',
    state: '启用'
  },
  {
    id: 5,
    username: '孙七',
    account: 'abc123...',
    state: '启用'
  },
  {
    id: 6,
    username: '周八',
    account: 'abc123...',
    state: '停用'
  },
  {
    id: 7,
    username: 'Tony',
    account: 'abc123...',
    state: '启用'
  },
  {
    id: 8,
    username: 'Miss',
    account: 'abc123...',
    state: '停用'
  },
  {
    id: 9,
    username: '王小二',
    account: 'abc123...',
    state: '启用'
  },
  {
    id: 10,
    username: '张先生',
    account: 'abc123...',
    state: '启用'
  }
]
export default [
  {
    url: '/base/user',
    method: 'get',
    response: ({query}) => {
      const resultList = userList.filter(user=>user.username.includes(query.username))
      return {
        code: 0,
        msg: 'ok',
        data: {
          total: resultList.length,
          list: resultList
        }
      }
    }
  }
] as MockMethod[]
