<script lang="ts">
export default {
  name: 'AppList'
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { searchAppListApi } from '@/api/app/index'
import type { AppListResult } from '@/api/app/models'

const msg =
  '应用使用形式1：所有人无需申请即可使用2：用户自己申请，管理员同意后可以使用3：管理员邀请后可以使用'
const desc =
  '这里是应用的简要介绍，应该让用户简洁直观的了解应用的大致功能。文字不要太多，超出后会隐藏'

const activeNames = ref(['authorized'])
const appDetailVisible = ref(false)
const viewDetail = () => {
  appDetailVisible.value = true
}
const enter = () => {
  console.log('吃了吗')
}
const authorizedAppList = ref<AppListResult[]>([])
const unAuthorizedAppList = ref<AppListResult[]>([])
const searchApp = async () => {
  const { data: res } = await searchAppListApi()
  res.data.forEach((app) => {
    if (app.authorized) {
      authorizedAppList.value.push(app)
    } else {
      unAuthorizedAppList.value.push(app)
    }
  })
}
const initAppList = () => searchApp()
initAppList()
</script>
<template>
  <a-collapse v-model:activeKey="activeNames">
    <a-collapse-panel key="authorized" header="已授权">
      <a-flex wrap="wrap" gap="small" justify="start" align="center">
        <a-card
          hoverable
          v-for="app in authorizedAppList"
          :key="app.id"
          style="width: 180px"
          :body-style="{ minHeight: '180px' }"
          :title="app.appName"
        >
          <a-typography-paragraph :content="app.appBrief" :ellipsis="{ rows: 5 }">
          </a-typography-paragraph>
          <template #actions>
            <a-typography-text type="success" @click="viewDetail"> 详情</a-typography-text>
            <a-button type="primary" size="small" @click="enter">进入应用</a-button>
          </template>
        </a-card>
      </a-flex>
    </a-collapse-panel>
    <a-collapse-panel key="unauthorized" header="未授权">
      <a-flex wrap="wrap" gap="small" justify="start" align="center">
        <a-card
          hoverable
          v-for="app in unAuthorizedAppList"
          :key="app.id"
          style="width: 180px"
          :title="app.appName"
        >
          <a-typography-paragraph :content="app.appBrief" :ellipsis="{ rows: 3 }">
          </a-typography-paragraph>

          <template #actions>
            <a-typography-text type="success" @click="viewDetail"> 详情</a-typography-text>
            <a-button type="primary" size="small" @click="enter">申请使用</a-button>
          </template>
        </a-card>
      </a-flex>
    </a-collapse-panel>
  </a-collapse>
  <!-- </ContentWrap> -->
  <a-modal v-model:open="appDetailVisible" title="应用详情">
    <ul>
      <li>应用功能：人力资源部</li>
      <li>目标用户：集团所有正式员工</li>
      <li>创建人：张三</li>
      <li>负责部门：人力资源部</li>
      <li>联系方式：钉钉搜索12345677654321，电话：138888438</li>
      <li>{{ msg }}</li>
    </ul>
    <template #footer>
      <a-button @click="appDetailVisible = false"> 关闭</a-button>
    </template>
  </a-modal>
</template>
<style lang="less" scoped></style>
