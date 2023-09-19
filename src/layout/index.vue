<!-- 使用额外的标签定义组件name需要跟router中配置的name一致 -->
<script lang="ts">
export default {
  name: 'Layout'
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRouter, type RouteRecordRaw } from 'vue-router'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'

const selectedPages = ref<string[]>([])
const collapsed = ref<boolean>(false)

const router = useRouter()
const menuList = router.getRoutes().find((route) => route.name === 'Main')?.children
const paneList = ref<RouteRecordRaw[]>([])
const orderedPaneList = ref<string[]>([])
const activePane = ref<string>('')

// 点击左侧菜单栏中的页面
const handlePageChange = (route: RouteRecordRaw) => {
  if (!paneList.value.find((r) => r.name === route.name)) {
    paneList.value.push(route)
    orderedPaneList.value.push(route.name as string)
  }
  activePane.value = route.name as string
}
// tab标签切换
const handleTabChange = (activeKey: string) => {
  selectedPages.value = []
  selectedPages.value.push(activeKey)

  const route = router.getRoutes().find((route) => route.name === activeKey)
  router.push(route?.path as string)
  orderedPaneList.value = orderedPaneList.value.filter((pane) => pane !== activeKey)
  orderedPaneList.value.push(activeKey)
  activePane.value = activeKey
}
// 关闭tab标签
const handleTabClose = (targetKey: string | MouseEvent) => {
  paneList.value = paneList.value.filter((pane) => pane.name !== targetKey)
  orderedPaneList.value = orderedPaneList.value.filter((pane) => pane !== targetKey)
  if (activePane.value === targetKey) {
    if (orderedPaneList.value.length > 0) {
      activePane.value = orderedPaneList.value[paneList.value.length - 1]
      const route = router.getRoutes().find((route) => route.name === activePane.value)
      router.push(route?.path as string)
    } else {
      activePane.value = ''
      const route = router.getRoutes().find((route) => route.name === 'Main')
      router.push(route?.path as string)
    }
  }
}
</script>

<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible style="height: auto">
      <div class="logo-container">
        <img src="/src/assets/logo.png" style="height: 100%" />
        <span :class="collapsed ? 'title-hidden' : 'title-show'">tidy-portal</span>
      </div>
      <a-menu v-model:selectedKeys="selectedPages" theme="dark" mode="inline">
        <a-sub-menu v-for="menu in menuList" :key="menu.name" :title="menu.meta?.title">
          <template #icon>
            <component :is="menu.meta?.icon" />
          </template>
          <a-menu-item v-for="page in menu.children" :key="page.name">
            <router-link :to="page.path" @click="handlePageChange(page)">
              {{ page.meta?.title }}
            </router-link>
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
        <a-tabs
          type="editable-card"
          v-model:activeKey="activePane"
          hideAdd
          @edit="handleTabClose"
          @change="handleTabChange"
        >
          <a-tab-pane v-for="pane in paneList" :key="pane.name" :tab="pane.meta?.title">
          </a-tab-pane>
        </a-tabs>
        <div class="pane-content">
          <router-view v-if="activePane" v-slot="{ Component }">
            <keep-alive :include="orderedPaneList">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style lang="less" scoped>
.title-show {
  color: aliceblue;
  font-size: larger;
  font-weight: bold;
  display: inline;
  transition: visibility;
  transition-delay: 0.2s;
}
.logo-container {
  height: 64px;
  padding: 5px;
}
.title-hidden {
  visibility: hidden;
}
.collapse-trigger {
  cursor: pointer;
  transition: color 0.3s;
}

.collapse-trigger:hover {
  color: #1890ff;
}
.pane-content {
  padding: 10px;
}
</style>
