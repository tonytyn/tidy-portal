import { MockMethod } from 'vite-plugin-mock'

const roleList = [
  {
    id: 1,
    roleName: '平凡的人',
    state: '启用',
    createdAt: '2023-08-18'
  },
  {
    id: 2,
    roleName: '开发者',
    state: '启用',
    createdAt: '2013-08-18'
  },
  {
    id: 3,
    roleName: '系统管理员',
    state: '停用',
    createdAt: '2013-07-08'
  }
]
export default [
  {
    url: '/role/list',
    method: 'get',
    response: () => {
      return {
        code: 0,
        msg: 'ok',
        data: roleList
      }
    }
  },
  {
    url: '/role/detail',
    method: 'get',
    response: ({ query }) => {
      const role = roleList.find((role) => role.id === Number(query.id))
      return {
        code: 0,
        msg: 'ok',
        data: role
      }
    }
  },
  {
    url: '/role/menus',
    method: 'get',
    response: () => {
      return {
        code: 0,
        msg: 'ok',
        data: [1, 2, 31, 311]
      }
    }
  },
  {
    url: '/role/create',
    method: 'post',
    response: ({ body }) => {
      const exist = roleList.some((role) => role.roleName === body.roleName)
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
    url: '/role/delete',
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
    url: '/role/update',
    method: 'put',
    response: () => {
      return {
        code: 0,
        msg: '修改成功（演示模式请勿当真）',
        data: null
      }
    }
  }
] as MockMethod[]
