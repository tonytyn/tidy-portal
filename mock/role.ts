import { MockMethod } from 'vite-plugin-mock'

const roleList = [
  {
    id: 1,
    roleName: '张三',
    state: '启用',
    createdAt: '2023-08-18'
  },
  {
    id: 2,
    roleName: '李四',
    state: '启用',
    createdAt: '2013-08-18'
  },
  {
    id: 3,
    roleName: '王五',
    state: '启用',
    createdAt: '2013-07-08'
  },
  {
    id: 4,
    roleName: '赵六',
    state: '启用',
    createdAt: '2013-12-18'
  },
  {
    id: 5,
    roleName: '孙七',
    state: '启用',
    createdAt: '2023-06-18'
  },
  {
    id: 6,
    roleName: '周八',
    state: '停用',
    createdAt: '2023-08-22'
  },
  {
    id: 7,
    roleName: 'Tony',
    state: '启用',
    createdAt: '2023-08-03'
  },
  {
    id: 8,
    roleName: 'Miss',
    state: '停用',
    createdAt: '2023-08-08'
  },
  {
    id: 9,
    roleName: '王小二',
    state: '启用',
    createdAt: '2023-01-18'
  },
  {
    id: 10,
    roleName: '张先生',
    state: '启用',
    createdAt: '2023-08-12'
  }
]
export default [
  {
    url: '/base/role/list',
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
    url: '/base/role/detail',
    method: 'get',
    response: ({query}) => {
      console.log(query);
      const role = roleList.find(role=>role.id === Number(query.id))
      return {
        code: 0,
        msg: 'ok',
        data: role
      }
    }
  },
  {
    url: '/base/role/create',
    method: 'post',
    response: ({body}) => {
      const exist = roleList.some(role=>role.roleName === body.roleName)
      if(exist){
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
    url: '/base/role/delete',
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
    url: '/base/role/update',
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
