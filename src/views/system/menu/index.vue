<script lang="ts">
export default {
  name: 'Menus'
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'
import type { MenuTreeResult } from '@/api/menu/models'
import { getMenuTreeApi } from '@/api/menu'
const columns = [
  {
    title: '菜单名称',
    dataIndex: 'menuName'
  },
  {
    title: '权限标识',
    dataIndex: 'permissionCode'
  },
  {
    title: '菜单类型',
    dataIndex: 'menuType'
  },
  {
    title: '开发者',
    dataIndex: 'developer'
  },
  {
    title: '完成时间',
    dataIndex: 'finishAt'
  }
]
const menuTree = ref<MenuTreeResult[]>([])

const initMenus = async ()=>{
  const {data:res} = await getMenuTreeApi()
  menuTree.value = res.data
}
initMenus()
</script>
<template>
  <div>
    <a-table rowKey="id" :columns="columns"  :data-source="menuTree" :pagination="false" />
  </div>
</template>

<style lang="scss" scoped></style>
