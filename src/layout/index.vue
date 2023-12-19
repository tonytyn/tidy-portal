<!-- 使用额外的标签定义组件name需要跟router中配置的name一致 -->
<script lang="ts">
export default {
  name: 'Layout'
}
</script>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRouter, type RouteRecordRaw, useRoute } from 'vue-router'
import { message } from 'ant-design-vue'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import type { Pane } from '@/api/base-models'


const selectedPages = ref<string[]>([])
const collapsed = ref<boolean>(false)

const router = useRouter()
const menuList = router.getRoutes().find((route) => route.name === 'Main')?.children
const paneList = ref<Pane[]>([])
const orderedKeyList = ref<string[]>([])
const activeKey = ref<string>('')

// 点击左侧菜单栏中的页面
const handlePageChange = (route: RouteRecordRaw) => {
  router.push(route)
}
// tab标签切换
const handleTabChange = (activeKey: string) => {
  router.push({ name: activeKey })
}
// 关闭tab标签
const handleTabClose = (targetKey: string) => {
  if (orderedKeyList.value.length === 1) {
    return message.info('别关啦，再关啥也看不着啦！')
  }
  paneList.value = paneList.value.filter((pane) => pane.key !== targetKey)
  orderedKeyList.value = orderedKeyList.value.filter((pane) => pane !== targetKey)
  if (activeKey.value === targetKey) {
    const newKey = orderedKeyList.value[orderedKeyList.value.length - 1]
    router.push({ name: newKey })
  }
}
// 监听路由
const route = useRoute()
watch(
  route,
  (newValue) => {
    const routeName = newValue.name as string
    activeKey.value = routeName
    selectedPages.value = [routeName]
    if (orderedKeyList.value.includes(routeName)) {
      orderedKeyList.value = orderedKeyList.value.filter(key => key !== routeName)
    } else {
      const pane = { key: routeName, title: newValue.meta.title as string }
      paneList.value.push(pane)
    }
    orderedKeyList.value.push(routeName)
  },
  { immediate: true }
)
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
          v-model:activeKey="activeKey"
          hideAdd
          @edit="handleTabClose"
          @change="handleTabChange"
        >
          <a-tab-pane v-for="pane in paneList" :key="pane.key" :tab="pane.title">
          </a-tab-pane>
        </a-tabs>
        <div class="pane-content">
          <router-view v-if="activeKey" v-slot="{ Component }">
            <keep-alive :include="orderedKeyList">
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
  margin-top: -15px;
}
</style>
