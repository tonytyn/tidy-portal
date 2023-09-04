<script setup lang="ts">
import { RouterView } from 'vue-router'
import zhCN from 'ant-design-vue/es/locale/zh_CN';
const locale = zhCN
</script>
<template>
  <a-config-provider :locale="locale">
    <RouterView style="min-height: 100%" />
  </a-config-provider>
</template>
