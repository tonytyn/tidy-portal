<script setup lang="ts">
import { RouterView } from 'vue-router'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

const locale = zhCN
</script>
<template>
  <a-config-provider :locale="locale">
    <RouterView style="min-height: 100%" />
    <div style="text-align: center">
      <a href="https://beian.miit.gov.cn/" target="_blank">冀ICP备2024060140号</a>
    </div>
  </a-config-provider>
</template>
