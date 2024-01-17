<script lang="ts">
export default {
  name: 'Introduction'
}
</script>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const title = ref<string>('TidyPortal-单点登录门户')

const router = useRouter()
const handleEnter = () => {
  router.push({ name: 'Login' })
}
</script>
<template>
  <a-typography style="padding: 20px">
    <a-typography-title> {{ title }} </a-typography-title>
    <a-divider />
    <a-typography-paragraph>
      本系统的目标是提供一个干净整洁的登陆门户，在企业内把所用到的办公系统管理起来。对企业提供以下能力
    </a-typography-paragraph>
    <a-typography-paragraph> 1.应用入驻 </a-typography-paragraph>
    <a-typography-paragraph> 2.应用流量监控 </a-typography-paragraph>
    <a-typography-paragraph> 3.统一身份认证 </a-typography-paragraph>
    <a-typography-paragraph> 剩下的还没想好，慢慢补充吧 </a-typography-paragraph>
    <a-button type="primary" @click="handleEnter">进入系统</a-button>
  </a-typography>
</template>
