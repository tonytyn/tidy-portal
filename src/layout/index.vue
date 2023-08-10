<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRouter, type RouteRecordRaw } from 'vue-router'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'

const selectedKeys = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)

const router = useRouter()
const menuList = router.getRoutes().find((route) => route.name === 'Main')?.children
const paneList = ref<string[]>([])
const activeKey = ref()
const handleTabEdit = (targetKey: string | MouseEvent) => {
  paneList.value = paneList.value.filter((pane) => pane !== targetKey)
}
const handlePageChange = (route: RouteRecordRaw) => {
  activeKey.value = route.meta?.title as string
  if(!paneList.value.includes(route.meta?.title as string)){
    paneList.value.push(route.meta?.title as string)
  }
}
const handleTabChange = (activeKey: string)=>{
  console.log(activeKey);
  
}
</script>
<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo-container">
        <img src="/src/assets/logo.png" style="height: 100%" />
        <span :class="collapsed ? 'title-hidden' : 'title-show'">tidy-portal</span>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-sub-menu v-for="menu in menuList" :key="menu.name" :title="menu.meta?.title">
          <template #icon>
            <component :is="menu.meta?.icon" />
          </template>
          <a-menu-item v-for="page in menu.children" :key="page.name">
            <router-link :to="page.path" @click="handlePageChange(page)">{{
              page.meta?.title
            }}</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: white; margin-bottom: 2px; padding: 0 10px">
        <a-row justify="space-between">
          <a-col>
            <menu-unfold-outlined
              v-if="collapsed"
              class="collapse-trigger"
              @click="() => (collapsed = !collapsed)"
            />
            <menu-fold-outlined
              v-else
              class="collapse-trigger"
              @click="() => (collapsed = !collapsed)"
            />
          </a-col>
          <a-col>
            <a-avatar src="/src/assets/avatar.jpg" alt="没有头像" size="large" />
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content>
        <a-tabs type="editable-card" v-model:activeKey="activeKey" hideAdd @edit="handleTabEdit" @change="handleTabChange">
          <a-tab-pane v-for="pane in paneList" :key="pane" :tab="pane"> </a-tab-pane>
        </a-tabs>
        <router-view v-if="activeKey" v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
.collapse-trigger {
  cursor: pointer;
  transition: color 0.3s;
}

.collapse-trigger:hover {
  color: #1890ff;
}
.title-show {
  color: aliceblue;
  font-size: larger;
  font-weight: bold;
  display: inline;
  transition: visibility;
  transition-delay: 0.2s;
}

.title-hidden {
  visibility: hidden;
}

.logo-container {
  height: 64px;
  padding: 5px;
}
</style>
