<template>
  <div>
    <a-table :columns="columns" rowKey="id" :data-source="data" />
    <a-button type="primary"> 按钮 </a-button>
  </div>
</template>

<script lang="ts" setup>
// import { reactive } from 'vue'
// import { CreateMenuParam } from '/@/api/menu/models'
const columns = [
  {
    title: '菜单名称',
    dataIndex: 'menuName'
  },
  {
    title: '菜单编号',
    dataIndex: 'menuCode'
  },
  {
    title: '菜单类型',
    dataIndex: 'menuType'
  }
]
const data = [
  {
    id: 1,
    menuName: '系统管理',
    menuCode: 'system',
    menuType: 'module',
    children: [
      {
        id: 11,
        menuName: '菜单管理',
        menuCode: 'menu',
        menuType: 'page',
        children: [
          {
            id: 111,
            menuName: '创建菜单',
            menuCode: 'menu:create',
            menuType: 'button'
          }
        ]
      },
      {
        id: 12,
        menuName: '用户管理',
        menuCode: 'user',
        menuType: 'page',
        children: [
          {
            id: 121,
            menuName: '搜索用户',
            menuCode: 'user:search',
            menuType: 'button'
          },
          {
            id: 122,
            menuName: '创建用户',
            menuCode: 'user:create',
            menuType: 'button'
          },
          {
            id: 123,
            menuName: '编辑用户信息',
            menuCode: 'user:update',
            menuType: 'button'
          }
        ]
      }
    ]
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
]
</script>

<style lang="scss" scoped></style>
