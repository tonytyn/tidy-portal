<script lang="ts" setup>
import { ref, watch } from 'vue'

import { getUserDetailApi } from '@/api/user'
import type { UserDetailResult } from '@/api/user/models'

const props = defineProps({
  modalVisible: Boolean,
  userId: Number
})

const userDetail = ref<UserDetailResult>({
  id: 0,
  username: '',
  account: '',
  phone: '',
  state: '',
  createdAt: ''
})
watch(props, async () => {
  if (props.modalVisible) {
    const { data: res } = await getUserDetailApi(props.userId as number)
    userDetail.value = res.data
  }
})
const emit = defineEmits(['modalClose'])
const handleCancel = () => {
  emit('modalClose')
}
</script>
<template>
  <a-modal :open="modalVisible" title="用户详情" @cancel="handleCancel" :footer="null">
    <a-form ref="formRef" :model="userDetail" :label-col="{ span: 5 }" :wrapper-col="{ span: 15 }">
      <a-form-item label="用户名" name="username">
        <a-input :value="userDetail.username" disabled />
      </a-form-item>
      <a-form-item label="账号" name="account">
        <a-input :value="userDetail.account" disabled />
      </a-form-item>
      <a-form-item label="手机号" name="phone">
        <a-input :value="userDetail.phone" disabled />
      </a-form-item>
      <a-form-item label="状态" name="state">
        <a-switch :checked="userDetail.state === '启用'" disabled />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<style lang="scss" scoped></style>
