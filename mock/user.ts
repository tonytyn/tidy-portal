import { MockMethod } from 'vite-plugin-mock'

const userList = [
    {
      id: 1,
      username: 'John Brown',
      account: 'abc123...',
      state: '启用'
    },
    {
      id: 2,
      username: 'John Brown',
      account: 'abc123...',
      state: '启用'
    },
    {
      id: 3,
      username: 'John Brown',
      account: 'abc123...',
      state: '启用'
    },
    {
      id: 4,
      username: 'John Brown',
      account: 'abc123...',
      state: '启用'
    },
    {
      id: 5,
      username: 'John Brown',
      account: 'abc123...',
      state: '启用'
    },
    {
      id: 6,
      username: 'John Brown',
      account: 'abc123...',
      state: '停用'
    },
    {
      id: 7,
      username: 'John Brown',
      account: 'abc123...',
      state: '启用'
    },
    {
      id: 8,
      username: 'John Brown',
      account: 'abc123...',
      state: '停用'
    },
    {
      id: 9,
      username: 'John Brown',
      account: 'abc123...',
      state: '启用'
    },
    {
      id: 10,
      username: 'John Brown',
      account: 'abc123...',
      state: '启用'
    }
  ]
export default [
  {
    url: '/base/user',
    method: 'get',
    response: ({ query }) => {
    console.log(query);
      return {
        code: 0,
        data: {
          list: userList
        }
      }
    }
  },
  
] as MockMethod[]
