import type { MockMethod } from 'vite-plugin-mock'


export default [
  {
    url: '/system/login',
    method: 'post',
    response: ({body}) => {
      if(body.password !== 'goodgood123'){
        return {
          code: 401,
          msg: '账号或密码不正确',
          data: null
        }
      
      }
      return {
        code: 0,
        msg: 'ok',
        data: null
      }
    }
  },
  
] as MockMethod[]
