import { createRouter, createWebHistory } from 'vue-router'

import {
  AppstoreAddOutlined,
  CodeOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'

import Layout from '@/layout/index.vue'

/**
 * 关于路由结构的一些思考：模块-页面-按钮是非常经典的三层结构，对于一个系统来说，层级越少用户的学习成本越低。
 * 能够让用户一看到名字就知道这个功能是干什么的，是最好的设计。可能有些时候三层并不能很好的去组织页面结构，
 * 但是我们要尽量向着三层去努力，如果三层不能体现系统的全部功能，请仔细想一想，你努力去设计了吗？
 */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main', // 路由名称不应该出现重复，尤其是这个主路由
      component: Layout,
      redirect: '/app-center/list',
      children: [
        {
          path: 'app-center',
          name: 'AppCenter',
          meta: { title:'应用中心',icon: AppstoreAddOutlined },
          children: [
            {
              path: '/app-center/list',
              name: 'AppList',
              meta: { title:'应用列表',icon: '345' },
              component: () => import('@/views/app-center/index.vue')
            },
            
          ]
        },
        {
          path: 'developer-center',
          name: 'DeveloperCenter',
          meta: { title:'开发者中心',icon: CodeOutlined },
          children: [
            {
              path: '/developer-center/my',
              name: 'MyApp',
              meta: { title:'我的应用',icon: '345' },
              component: () => import('@/views/developer-center/index.vue')
            },
            
          ]
        },
        {
          path: 'system',
          name: 'System',
          meta: { title:'系统管理',icon: SettingOutlined },
          children: [
            {
              path: '/system/user',
              name: 'User',
              meta: { title:'用户管理',icon: '345' },
              component: () => import('@/views/system/user/index.vue')
            },
            {
              path: '/system/role',
              name: 'Role',
              meta: { title:'角色管理',icon: '345' },
              component: () => import('@/views/system/role/index.vue')
            },
            {
              path: '/system/menu',
              name: 'Menu',
              meta: { title:'菜单管理',icon: '345' },
              component: () => import('@/views/system/menu/index.vue')
            }
          ]
        }
        
      ]
    }
  ]
})

export default router
