<script setup lang="ts">
import { ref, reactive } from 'vue'
import { RouterView } from 'vue-router'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppstoreAddOutlined,
  CodeOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'
const selectedKeys = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)
const handleMenuClick = () => {
  console.log(selectedKeys.value)
}
</script>
<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo-container">
        <img src="/src/assets/logo.png" style="height: 100%" />
        <span :class="collapsed ? 'title-hidden' : 'title-show'">tidy-portal</span>
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        @click="handleMenuClick"
      >
        <a-sub-menu key="sub1" title="应用中心">
          <template #icon>
            <appstore-add-outlined />
          </template>
          <a-menu-item key="1">应用列表</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2" title="开发者中心">
          <template #icon>
            <code-outlined />
          </template>
          <a-menu-item key="2">
            <router-link to="/aaa">我的应用</router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3" title="系统管理">
          <template #icon>
            <setting-outlined />
          </template>
          <a-menu-item key="3">
            <router-link to="/system/menu">菜单管理</router-link>
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
