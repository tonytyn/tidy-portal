<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons-vue'

const selectedKeys = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)

const router = useRouter()

const menuList = router.getRoutes().find((route) => route.name === 'Main')?.children
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
            <component :is="menu.meta?.icon"/>
          </template>
          <a-menu-item v-for="page in menu.children" :key="page.name">
            <router-link :to="page.path">{{ page.meta?.title }}</router-link>
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
        <RouterView />
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
