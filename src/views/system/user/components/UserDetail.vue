<script lang="ts" setup>
import { ref } from 'vue'

import { getUserDetailApi } from '@/api/user'
import type { UserDetailResult } from '@/api/user/models'

const props = defineProps({
  modalVisible: Boolean,
  userId: Number
})

const formRef = ref()
const userDetail = ref<UserDetailResult>({
  id: 0,
  username: '',
  account: '',
  state: '',
  phone: '',
  createdAt: ''
})
const getUserDeatil = async () => {
  const { data: res } = await getUserDetailApi(props.userId as number)
  userDetail.value = res.data
}
if (props.modalVisible) {
  getUserDeatil()
}

const emit = defineEmits(['modalClose'])
const handleCancel = () => {
  emit('modalClose')
}
</script>
<template>
  <a-modal :open="modalVisible" title="用户详情" @cancel="handleCancel" :footer="null">
    <a-form ref="formRef" :model="userDetail" :label-col="{ span: 5 }" :wrapper-col="{ span: 15 }">
      <a-form-item label="用户名" name="username">
        <a-input v-model:value="userDetail.username"> </a-input>
      </a-form-item>
      <a-form-item label="账号" name="account">
        <a-input v-model:value="userDetail.account"> </a-input>
      </a-form-item>

      <a-form-item label="手机号" name="phone">
        <a-input v-model:value="userDetail.phone"> </a-input>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<style lang="scss" scoped></style>
