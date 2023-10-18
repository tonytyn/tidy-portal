import { MockMethod } from 'vite-plugin-mock'

const userList = [
  {
    id: 1,
    username: '张三',
    account: 'abc123...',
    phone: '13856894587',
    state: '启用',
    createdAt: '2023-08-18'
  },
  {
    id: 2,
    username: '李四',
    account: 'abc123...',
    phone: '13856894587',
    state: '启用',
    createdAt: '2013-08-18'
  },
  {
    id: 3,
    username: '王五',
    account: 'abc123...',
    phone: '13856894587',
    state: '启用',
    createdAt: '2013-07-08'
  },
  {
    id: 4,
    username: '赵六',
    account: 'abc123...',
    phone: '13856894587',
    state: '启用',
    createdAt: '2013-12-18'
  },
  {
    id: 5,
    username: '孙七',
    account: 'abc123...',
    phone: '13856894587',
    state: '启用',
    createdAt: '2023-06-18'
  },
  {
    id: 6,
    username: '周八',
    account: 'abc123...',
    phone: '13856894587',
    state: '停用',
    createdAt: '2023-08-22'
  },
  {
    id: 7,
    username: 'Tony',
    account: 'abc123...',
    phone: '13856894587',
    state: '启用',
    createdAt: '2023-08-03'
  },
  {
    id: 8,
    username: 'Miss',
    account: 'abc123...',
    phone: '13856894587',
    state: '停用',
    createdAt: '2023-08-08'
  },
  {
    id: 9,
    username: '王小二',
    account: 'abc123...',
    phone: '13856894587',
    state: '启用',
    createdAt: '2023-01-18'
  },
  {
    id: 10,
    username: '张先生',
    account: 'abc123...',
    phone: '13856894587',
    state: '启用',
    createdAt: '2023-08-12'
  }
]
export default [
  {
    url: '/base/user/list',
    method: 'get',
    response: ({ query }) => {
      const resultList = userList.filter((user) => user.username.includes(query.username))
      return {
        code: 0,
        msg: 'ok',
        data: {
          total: resultList.length,
          list: resultList
        }
      }
    }
  },
  {
    url: '/base/user/detail',
    method: 'get',
    response: ({ query }) => {
      const user = userList.find((user) => user.id === Number(query.id))
      return {
        code: 0,
        msg: 'ok',
        data: user
      }
    }
  },
  {
    url: '/base/user/roles',
    method: 'get',
    response: () => {
      return {
        code: 0,
        msg: 'ok',
        data: [1, 2]
      }
    }
  },
  {
    url: '/base/user/create',
    method: 'post',
    response: ({ body }) => {
      const exist = userList.some((user) => user.account === body.account)
      if (exist) {
        return {
          code: 400,
          msg: '账号已存在',
          data: null
        }
      }
      return {
        code: 0,
        msg: '创建成功（演示模式请勿当真）',
        data: null
      }
    }
  },
  {
    url: '/base/user/delete',
    method: 'delete',
    response: () => {
      return {
        code: 0,
        msg: '删除成功（演示模式请勿当真）',
        data: null
      }
    }
  },
  {
    url: '/base/user/update',
    method: 'put',
    response: () => {
      return {
        code: 0,
        msg: '修改成功（演示模式请勿当真）',
        data: null
      }
    }
  },
  {
    url: '/base/user/roles',
    method: 'put',
    response: () => {
      return {
        code: 0,
        msg: '角色修改成功（演示模式请勿当真）',
        data: null
      }
    }
  }
] as MockMethod[]
