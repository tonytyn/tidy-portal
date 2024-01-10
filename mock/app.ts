import { MockMethod } from 'vite-plugin-mock'

const appList = [
  {
    id: 1,
    appKey: 'aaa', // 应用唯一标识
    appName: '考勤管理系统', // 应用名称
    appBrief:
      '这里是应用的简要介绍，应该让用户简洁直观的了解应用的大致功能。文字不要太多，超出后会隐藏', // 应用简介
    authorized: true //是否已授权
  },
  {
    id: 2,
    appKey: 'bbb', // 应用唯一标识
    appName: '制造现场管理系统', // 应用名称
    appBrief:
      '这里是应用的简要介绍，应该让用户简洁直观的了解应用的大致功能。文字不要太多，超出后会隐藏。试试看最多多少行,才会让省略号出现', // 应用简介
    authorized: true //是否已授权
  },
  {
    id: 3,
    appKey: 'ccc', // 应用唯一标识
    appName: '车间无纸化办公系统啊哈哈哈', // 应用名称
    appBrief: '这里是应用的简要介绍，应该让用户简洁直观的了解应用的大致功能。', // 应用简介
    authorized: true //是否已授权
  },
  {
    id: 4,
    appKey: 'ddd', // 应用唯一标识
    appName: '设备点检系统', // 应用名称
    appBrief: '这里是应用的简要介绍', // 应用简介
    authorized: true //是否已授权
  },
  {
    id: 5,
    appKey: 'eee', // 应用唯一标识
    appName: '数字化碳运营系统', // 应用名称
    appBrief:
      '这里是应用的简要介绍，应该让用户简洁直观的了解应用的大致功能。文字不要太多，超出后会隐藏', // 应用简介
    authorized: true //是否已授权
  },
  {
    id: 6,
    appKey: 'fff', // 应用唯一标识
    appName: '研发工作台', // 应用名称
    appBrief:
      '这里是应用的简要介绍，应该让用户简洁直观的了解应用的大致功能。文字不要太多，超出后会隐藏', // 应用简介
    authorized: true //是否已授权
  },
  {
    id: 7,
    appKey: 'ggg', // 应用唯一标识
    appName: '新工报到系统', // 应用名称
    appBrief:
      '这里是应用的简要介绍，应该让用户简洁直观的了解应用的大致功能。文字不要太多，超出后会隐藏', // 应用简介
    authorized: true //是否已授权
  },
  {
    id: 8,
    appKey: 'hhh', // 应用唯一标识
    appName: '工号查询系统', // 应用名称
    appBrief:
      '这里是应用的简要介绍，应该让用户简洁直观的了解应用的大致功能。文字不要太多，超出后会隐藏', // 应用简介
    authorized: false //是否已授权
  },
  {
    id: 9,
    appKey: 'jjj', // 应用唯一标识
    appName: '乱七八糟的系统', // 应用名称
    appBrief:
      '这里是应用的简要介绍，应该让用户简洁直观的了解应用的大致功能。文字不要太多，超出后会隐藏', // 应用简介
    authorized: false //是否已授权
  }
]
export default [
  {
    url: '/app/list',
    method: 'get',
    response: () => {
      return {
        code: 0,
        msg: 'ok',
        data: appList
      }
    }
  },
  {
    url: '/app/detail',
    method: 'get',
    response: ({ query }) => {
      console.log(query.id)
      return {
        code: 0,
        msg: 'ok',
        data: {
          id: 111,
          targetUser: '车间操作工包括临时工及援产人员',
          responseDept: '人力资源部',
          creator: '张三先生',
          contactWay: '钉钉搜索：人力资源小组张三丰，电话：12332155566',
          msg: '应用使用形式1：所有人无需申请即可使用2：用户自己申请，管理员同意后可以使用3：管理员邀请后可以使用'
        }
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
  }
] as MockMethod[]
