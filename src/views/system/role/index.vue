<!-- 使用额外的标签定义组件name需要跟router中配置的name一致 -->
<script lang="ts">
export default {
  name: 'Role'
}
</script>
<script lang="ts" setup>
import { h, ref } from 'vue'

import { UserAddOutlined } from '@ant-design/icons-vue'
import type { RoleListResult } from '@/api/role/models'
import { searchRoleListApi, deleteRoleApi } from '@/api/role'
import CreateRole from './components/CreateRole.vue'
import EditRole from './components/EditRole.vue'
import { message } from 'ant-design-vue'

// 搜索
const roleList = ref<RoleListResult[]>([])
const columns = [
  
  {
    title: '角色名称',
    dataIndex: 'roleName',
    align: 'center'
  },
  {
    key: 'state',
    title: '状态',
    dataIndex: 'state',
    align: 'center'
  },
  {
    key: 'createdAt',
    title: '创建日期',
    dataIndex: 'createdAt',
    align: 'center'
  },
  {
    key: 'operation',
    title: '操作',
    align: 'center'
  }
]
const searchRole = async () => {
  const { data: res } = await searchRoleListApi()
  roleList.value = res.data
}

// 创建
const createModalVisible = ref(false)
const openCreateModal = () => {
  createModalVisible.value = true
}
const handleCreateModalClose = () => {
  createModalVisible.value = false
}

// 编辑
const selectedRoleId = ref(0)
const editModalVisible = ref(false)
const openEdit = (roleId: number) => {
  selectedRoleId.value = roleId
  editModalVisible.value = true
}
const handleEditModalClose = () => {
  editModalVisible.value = false
}
// 删除
const handleDelete = async (roleId: number) => {
  const { data: res } = await deleteRoleApi(roleId)
  message.success(res.msg)
}
searchRole()
</script>
<template>
  <a-button type="primary" :icon="h(UserAddOutlined)" @click="openCreateModal"> 创建角色 </a-button>
  <a-divider></a-divider>
  <a-table :columns="columns" :data-source="roleList" :pagination="false" rowKey="id" bordered>
    <template #bodyCell="{ index, record, column }">
      <template v-if="column.key === 'index'">
        {{ index + 1 }}
      </template>
      <template v-if="column.key === 'state'">
        <a-tag :color="record.state === '启用' ? 'success' : 'error'">{{ record.state }}</a-tag>
      </template>
      <template v-if="column.key === 'operation'">
        <a-space>
          <a-button type="primary" size="small" @click="openEdit(record.id)">编辑</a-button>
          <a-popconfirm
            title="确定要删除这个角色吗？"
            ok-text="是的"
            cancel-text="我再想想"
            @confirm="handleDelete(record.id)"
          >
            <a-button type="primary" size="small">删除</a-button>
          </a-popconfirm>
        </a-space>
      </template>
    </template>
  </a-table>
  <CreateRole :modalVisible="createModalVisible" @modalClose="handleCreateModalClose"></CreateRole>
  <EditRole
    :modalVisible="editModalVisible"
    :roleId="selectedRoleId"
    @modalClose="handleEditModalClose"
  ></EditRole>
</template>

<style lang="less" scoped>
.pagination {
  text-align: left; // 默认值left，如果要放在右边就改成right
}
</style>
