<template>
  <div>
    {{ msg }}
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const msg = ref('用户管理')
</script>
<style lang="scss" scoped></style>