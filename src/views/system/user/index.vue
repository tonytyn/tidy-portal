<!-- 使用额外的标签定义组件name需要跟router中配置的name一致 -->
<script lang="ts">
export default {
  name: 'User'
}
</script>
<script lang="ts" setup>
import { h, ref } from 'vue'
import { SearchOutlined, ReloadOutlined, UserAddOutlined } from '@ant-design/icons-vue'
const queryParam = ref({ username: '' })
const pageNum = ref<number>(1)
const pageSize = ref<number>(10)
const total = ref<number>(12)
const showTotal = () => `共 ${total.value} 条`
const handlePageChange = (page: number, size: number) => {
  console.log(page, '查询数据，更新table数据', size)
}

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
  },
  {
    key: '4',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '5',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '6',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '7',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '8',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '9',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '10',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '11',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '12',
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
  <a-table :columns="columns" :data-source="userList" :pagination="false" bordered> </a-table>
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
