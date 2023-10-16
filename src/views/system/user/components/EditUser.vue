<script lang="ts" setup>
import { ref, watch } from 'vue'
import { message } from 'ant-design-vue';

import { getUserDetailApi,updateUserApi } from '@/api/user'
import type { UserDetailResult,UpdateUserParam } from '@/api/user/models'

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
const updateUserParam = ref<UpdateUserParam>({
  id: 0,
  username: '',
  account: '',
  state: '',
  phone: '',
})
watch(props, async () => {
  if (props.modalVisible) {
    const { data: res } = await getUserDetailApi(props.userId as number)
    userDetail.value = res.data
    updateUserParam.value.username = res.data.username
    updateUserParam.value.account = res.data.account
    updateUserParam.value.phone = res.data.phone
    updateUserParam.value.state = res.data.state
  }
})

const handleSubmit = async () => {
  const { data: res } = await updateUserApi(updateUserParam.value)
  if (res.code !== 0) {
    return message.error(res.msg)
  }
  message.success(res.msg)
  formRef.value.resetFields()
  emit('modalClose')
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
        <a-input v-model:value="updateUserParam.username"/> 
      </a-form-item>
      <a-form-item label="账号" name="account">
        <a-input :value="userDetail.account" disabled/> 
      </a-form-item>

      <a-form-item label="手机号" name="phone">
        <a-input v-model:value="updateUserParam.phone"/> 
      </a-form-item>
      <a-form-item label="状态" name="state">
        <a-switch
          v-model:checked="updateUserParam.state"
          :checkedValue="'启用'"
          :unCheckedValue="'停用'"
        />
      </a-form-item>
      <div style="text-align: center">
        <a-button type="primary" @click="handleSubmit">提交</a-button>
      </div>
    </a-form>
  </a-modal>
</template>

<style lang="scss" scoped></style>
