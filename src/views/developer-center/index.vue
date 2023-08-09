<template>
  <div>
    {{ msg }}
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const msg = ref('我的应用')
</script>
<style lang="scss" scoped></style>
