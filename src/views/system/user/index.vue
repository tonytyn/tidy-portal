<!-- 使用额外的标签定义组件name需要跟router中配置的name一致 -->
<script lang="ts">
export default {
  name: 'User'
}
</script>
<script lang="ts" setup>
import { h, ref, computed } from 'vue'
import { SearchOutlined, ReloadOutlined, UserAddOutlined } from '@ant-design/icons-vue'
const queryParam = ref({ username: '' })
const total = ref<number>(20)
const pageNum = ref<number>(1)
const pageSize = ref<number>(10)
const userList = ref([
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park'
  }
])
const columns = ref([
  {
    title: '序号',
    dataIndex: 'name'
  },
  {
    title: '用户名',
    dataIndex: 'money'
  },
  {
    title: '账号',
    dataIndex: 'address'
  }
])
const pagination = computed(() => ({
  position: ['bottomLeft'],
  current: pageNum.value,
  pageSize: pageSize.value,
  total: total.value,
  showTotal: () => `共 ${total.value} 条`,
  showSizeChanger: true
}))
</script>
<template>
  <a-form layout="inline" :model="queryParam">
    <a-form-item label="用户名">
      <a-input v-model:value="queryParam.username"> </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" :icon="h(SearchOutlined)"> 查询 </a-button>
    </a-form-item>
    <a-form-item>
      <a-button :icon="h(ReloadOutlined)"> 重置 </a-button>
    </a-form-item>
    <a-form-item>
      <a-button :icon="h(UserAddOutlined)"> 创建 </a-button>
    </a-form-item>
  </a-form>
  <a-divider></a-divider>
  <a-table :columns="columns" :data-source="userList" :pagination="pagination" bordered> </a-table>
</template>

<style lang="scss" scoped></style>
