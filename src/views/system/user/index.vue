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
import type { SearchUserParam, UserListResult } from '@/api/user/models'
import { searchUserListApi } from '@/api/user'
import CreateUser from './components/CreateUser.vue'

const searchUserParam = ref<SearchUserParam>({ username: '', pageNum: 1, pageSize: 10 })

const userList = ref<UserListResult[]>([])

const searchUser = async () => {
  const { data: res } = await searchUserListApi(searchUserParam.value)
  userList.value = res.data.list
  total.value = res.data.total
}
const reset = ()=>{
  searchUserParam.value.username = ''
  searchUserParam.value.pageNum = 1
  searchUserParam.value.pageSize = 10
  searchUser()
}

const total = ref<number>(0)
const showTotal = () => `共 ${total.value} 条`
const handlePageChange = (page: number, size: number) => {
  console.log(page, '查询数据，更新table数据', size)
}
const modalVisible = ref(false)
const openCreateModal = () => {
  modalVisible.value = true
}
const handleModalClose = () => {
  modalVisible.value = false
}
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

const openDetail = (userId: number) => {
  console.log(userId)
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
          <a-button type="primary" size="small" @click="openDetail(record.id)">编辑</a-button>
          <a-button type="primary" size="small" @click="openDetail(record.id)">删除</a-button>
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
  <CreateUser :modalVisible="modalVisible" @modalClose="handleModalClose"></CreateUser>
</template>

<style lang="less" scoped>
.pagination {
  text-align: left; // 默认值left，如果要放在右边就改成right
}
</style>
