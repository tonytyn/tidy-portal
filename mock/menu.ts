import { MockMethod } from 'vite-plugin-mock'

const menuList = [
  {
    id: 1,
    menuName: '应用中心',
    permissionCode: 'app:main',
    menuType: 'module',
    children: [
      {
        id: 11,
        menuName: '应用列表',
        permissionCode: 'app:list',
        developer: 'Tony',
        finishAt: '尚未开发',
        menuType: 'page'
      }
    ]
  },
  {
    id: 2,
    menuName: '开发者中心',
    permissionCode: 'develop:main',
    menuType: 'module',
    children: [
      {
        id: 11,
        menuName: '应用管理',
        permissionCode: 'app:management',
        developer: 'Tony',
        finishAt: '尚未开发',
        menuType: 'page'
      }
    ]
  },
  {
    id: 3,
    menuName: '系统管理',
    permissionCode: 'system',
    menuType: 'module',
    children: [
      {
        id: 11,
        menuName: '用户管理',
        permissionCode: 'user',
        menuType: 'page',
        developer: 'Tony',
        finishAt: '2023-09',
        children: [
          {
            id: 111,
            menuName: '搜索用户',
            permissionCode: 'user:search',
            menuType: 'button'
          },
          {
            id: 112,
            menuName: '查看用户详情',
            permissionCode: 'user:detail',
            menuType: 'button'
          },
          {
            id: 113,
            menuName: '创建用户',
            permissionCode: 'user:create',
            menuType: 'button'
          },
          {
            id: 114,
            menuName: '编辑用户信息',
            permissionCode: 'user:update',
            menuType: 'button'
          }
        ]
      },
      {
        id: 12,
        menuName: '角色管理',
        permissionCode: 'role',
        menuType: 'page',
        developer: 'Tony',
        finishAt: '2023-10',
        children: [
          {
            id: 121,
            menuName: '创建角色',
            permissionCode: 'role:create',
            menuType: 'button'
          },
          {
            id: 122,
            menuName: '编辑角色',
            permissionCode: 'user:update',
            menuType: 'button'
          },
          {
            id: 123,
            menuName: '删除角色',
            permissionCode: 'user:update',
            menuType: 'button'
          }
        ]
      },
      {
        id: 13,
        menuName: '菜单管理',
        permissionCode: 'menu',
        menuType: 'page',
        developer: 'Tony',
        finishAt: '开发中'
      }
    ]
  }
]
const menuTree = [
  {
    key: 1,
    title: '应用中心',
    children: [
      {
        key: 11,
        title: '应用列表'
      }
    ]
  },
  {
    key: 2,
    title: '开发者中心',
    children: [
      {
        key: 21,
        title: '应用管理'
      }
    ]
  },
  {
    key: 3,
    title: '系统管理',
    children: [
      {
        key: 31,
        title: '用户管理',
        children: [
          {
            key: 311,
            title: '搜索用户'
          },
          {
            key: 312,
            title: '查看用户详情'
          },
          {
            key: 313,
            title: '创建用户'
          },
          {
            key: 314,
            title: '编辑用户信息'
          }
        ]
      },
      {
        key: 32,
        title: '角色管理',
        children: [
          {
            key: 321,
            title: '创建角色'
          },
          {
            key: 322,
            title: '编辑角色'
          },
          {
            key: 323,
            title: '删除角色'
          }
        ]
      },
      {
        key: 4,
        title: '菜单管理'
      }
    ]
  }
]

export default [
  {
    url: '/menu/list',
    method: 'get',
    response: () => {
      return {
        code: 0,
        msg: 'ok',
        data: menuList
      }
    }
  },
  {
    url: '/menu/tree',
    method: 'get',
    response: () => {
      return {
        code: 0,
        msg: 'ok',
        data: menuTree
      }
    }
  }
] as MockMethod[]
