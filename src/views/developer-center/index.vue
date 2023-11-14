<template>
  <div>
    {{ msg }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const msg = ref('应用管理')
</script>
<style lang="less" scoped></style>
