<!-- 使用额外的标签定义组件name需要跟router中配置的name一致 -->
<script lang="ts">
export default {
  name: 'User'
}
</script>
<script lang="ts" setup>
import { h, ref } from 'vue'
// import { message } from 'ant-design-vue'

import { SearchOutlined, ReloadOutlined, UserAddOutlined } from '@ant-design/icons-vue'
import type { SearchUserParam, UserListModel } from '@/api/user/models'
import { searchUserList, deleteUser } from '@/api/user/actions'
import CreateUser from './components/CreateUser.vue'
import UserDetail from './components/UserDetail.vue'
import EditUser from './components/EditUser.vue'
import { message } from 'ant-design-vue'

// 搜索
const searchUserParam = ref<SearchUserParam>({ username: '', pageNum: 1, pageSize: 10 })
const userList = ref<UserListModel[]>([])
const columns = [
  {
    key: 'index',
    title: '序号',
    width: 80,
    align: 'center'
  },
  {
    title: '用户名',
    dataIndex: 'username',
    align: 'center'
  },
  {
    title: '账号',
    dataIndex: 'account',
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
const total = ref<number>(0)
const searchUser = async () => {
  const { data: res } = await searchUserList(searchUserParam.value)
  userList.value = res.data.list
  total.value = res.data.total
}
const showTotal = () => `共 ${total.value} 条`
const handlePageChange = (page: number, size: number) => {
  console.log(page, '查询数据，更新table数据', size)
}
// 重置
const reset = () => {
  searchUserParam.value.username = ''
  searchUserParam.value.pageNum = 1
  searchUserParam.value.pageSize = 10
  searchUser()
}

// 创建
const createModalVisible = ref(false)
const openCreateModal = () => {
  createModalVisible.value = true
}
const handleCreateModalClose = () => {
  createModalVisible.value = false
}
// 详情
const selectedUserId = ref(0)
const detailModalVisible = ref(false)
const openDetail = (userId: number) => {
  selectedUserId.value = userId
  detailModalVisible.value = true
}
const handleDetailModalClose = () => {
  detailModalVisible.value = false
}
// 编辑
const editModalVisible = ref(false)
const openEdit = (userId: number) => {
  selectedUserId.value = userId
  editModalVisible.value = true
}
const handleEditModalClose = () => {
  editModalVisible.value = false
}
// 删除
const handleDelete = async (userId: number) => {
  const { data: res } = await deleteUser(userId)
  message.success(res.msg)
}
searchUser()
</script>
<template>
  <a-form layout="inline" :model="searchUserParam">
    <a-form-item label="用户名">
      <a-input v-model:value="searchUserParam.username"> </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" :icon="h(SearchOutlined)" @click="searchUser"> 查询 </a-button>
    </a-form-item>
    <a-form-item>
      <a-button :icon="h(ReloadOutlined)" @click="reset"> 重置 </a-button>
    </a-form-item>
    <a-form-item>
      <a-button :icon="h(UserAddOutlined)" @click="openCreateModal"> 创建 </a-button>
    </a-form-item>
  </a-form>
  <a-divider></a-divider>
  <a-table :columns="columns" :data-source="userList" :pagination="false" rowKey="id" bordered>
    <template #bodyCell="{ index, record, column }">
      <template v-if="column.key === 'index'">
        {{ index + 1 }}
      </template>
      <template v-if="column.key === 'state'">
        <a-tag :color="record.state === '启用' ? 'success' : 'error'">{{ record.state }}</a-tag>
      </template>
      <template v-if="column.key === 'operation'">
        <a-space>
          <a-button type="primary" size="small" @click="openDetail(record.id)">详情</a-button>
          <a-button type="primary" size="small" @click="openEdit(record.id)">编辑</a-button>
          <a-popconfirm
            title="确定要删除这个账号吗？"
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
  <a-pagination
    v-model:current="searchUserParam.pageNum"
    v-model:page-size="searchUserParam.pageSize"
    v-model:total="total"
    :show-total="showTotal"
    show-size-changer
    @change="handlePageChange"
    class="pagination"
  >
  </a-pagination>
  <CreateUser :modalVisible="createModalVisible" @modalClose="handleCreateModalClose"></CreateUser>
  <UserDetail
    :modalVisible="detailModalVisible"
    :userId="selectedUserId"
    @modalClose="handleDetailModalClose"
  ></UserDetail>
  <EditUser
    :modalVisible="editModalVisible"
    :userId="selectedUserId"
    @modalClose="handleEditModalClose"
  ></EditUser>
</template>

<style lang="less" scoped>
.pagination {
  text-align: left; // 默认值left，如果要放在右边就改成right
}
</style>
