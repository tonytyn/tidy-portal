import { createRouter, createWebHistory } from 'vue-router'

import {
  AppstoreAddOutlined,
  CodeOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'

import Layout from '@/layout/index.vue'
/**
 * 路由名称必不可少，且不可重复。在很多地方都需要通过路由名称去加载对应的组件，比如动态标签页的切换和keep-alive中组件的缓存
 * 组件名称需要跟路由名称一致，这样才能在keep-alive中缓存
 */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
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
              meta: { title:'应用管理',icon: '345' },
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
              name: 'Menus',
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
