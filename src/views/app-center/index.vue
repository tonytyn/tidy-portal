<script lang="ts">
export default {
  name: 'AppList'
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { searchAppList, getAppDetail } from '@/api/app/actions'
import type { AppListModel, AppDetailModel } from '@/api/app/models'

const activeNames = ref(['authorized'])
const appDetailVisible = ref(false)
const appDetail = ref<AppDetailModel>()
const viewDetail = async (id: number) => {
  const { data: res } = await getAppDetail(id)
  appDetail.value = res.data
  appDetailVisible.value = true
}
const enter = () => {
  window.open('https://antdv.com/')
}
const authorizedAppList = ref<AppListModel[]>([])
const unAuthorizedAppList = ref<AppListModel[]>([])
const searchApp = async () => {
  const { data: res } = await searchAppList()
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
            <a-typography-text type="success" @click="viewDetail(app.id)"> 详情</a-typography-text>
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
            <a-typography-text type="success" @click="viewDetail(app.id)"> 详情</a-typography-text>
            <a-button type="primary" size="small" @click="enter">申请使用</a-button>
          </template>
        </a-card>
      </a-flex>
    </a-collapse-panel>
  </a-collapse>
  <!-- </ContentWrap> -->
  <a-modal v-model:open="appDetailVisible" title="应用详情">
    <ul>
      <li>目标用户：{{ appDetail?.targetUser }}</li>
      <li>负责部门：{{ appDetail?.responseDept }}</li>
      <li>创建人：{{ appDetail?.creator }}</li>
      <li>联系方式：{{ appDetail?.contactWay }}</li>
      <li>{{ appDetail?.msg }}</li>
    </ul>
    <template #footer>
      <a-button @click="appDetailVisible = false"> 关闭</a-button>
    </template>
  </a-modal>
</template>
<style lang="less" scoped></style>
