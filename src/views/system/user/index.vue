<!-- 使用额外的标签定义组件name需要跟router中配置的name一致 -->
<script lang="ts">
export default {
  name: 'User'
}
</script>
<script lang="ts" setup>
import { h, ref } from 'vue'
import { SearchOutlined, ReloadOutlined, UserAddOutlined } from '@ant-design/icons-vue'
import type { UserListResult } from '@/api/user/models'
import { searchUserListApi } from '@/api/user'

const userList = ref<UserListResult[]>([])

const searchUser = async () => {
  const { data: res } = await searchUserListApi(searchParam.value.username)
  console.log(res)
  userList.value = res?.list
}
const searchParam = ref({ username: '' })
const pageNum = ref<number>(1)
const pageSize = ref<number>(10)
const total = ref<number>(12)
const showTotal = () => `共 ${total.value} 条`
const handlePageChange = (page: number, size: number) => {
  console.log(page, '查询数据，更新table数据', size)
}

const columns = ref([
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
    title: '状态',
    dataIndex: 'state',
    align: 'center'
  },
  {
    key: 'operation',
    title: '操作',
    align: 'center'
  }
])

const openDetail = (userId: number) => {
  console.log(userId)
}
</script>
<template>
  <a-form layout="inline" :model="searchParam">
    <a-form-item label="用户名">
      <a-input v-model:value="searchParam.username"> </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" :icon="h(SearchOutlined)" @click="searchUser"> 查询 </a-button>
    </a-form-item>
    <a-form-item>
      <a-button :icon="h(ReloadOutlined)"> 重置 </a-button>
    </a-form-item>
    <a-form-item>
      <a-button :icon="h(UserAddOutlined)"> 创建 </a-button>
    </a-form-item>
  </a-form>
  <a-divider></a-divider>
  <a-table :columns="columns" :data-source="userList" :pagination="false" rowKey="id" bordered>
    <template #bodyCell="{ index, record, column }">
      <template v-if="column.key === 'index'">
        {{ index + 1 }}
      </template>
      <template v-if="column.key === 'operation'">
        <a-space>
          <a-button type="primary" size="small" @click="openDetail(record.id)">详情</a-button>
        </a-space>
      </template>
    </template>
  </a-table>
  <a-pagination
    v-model:current="pageNum"
    v-model:page-size="pageSize"
    v-model:total="total"
    :show-total="showTotal"
    show-size-changer
    @change="handlePageChange"
    class="pagination"
  >
  </a-pagination>
</template>

<style lang="less" scoped>
.pagination {
  text-align: left; // 默认值left，如果要放在右边就改成right
}
</style>
