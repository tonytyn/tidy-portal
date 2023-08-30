<template>
  <div>
    {{ msg }}
    <a-button type="primary" @click="add">按钮</a-button>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const msg = ref<number>(0)
  const add = ()=>{
    msg.value++
  }
</script>
<script lang='ts'>
 export default {
    name:"AppList"
 }
</script>
<style lang="scss" scoped></style>
