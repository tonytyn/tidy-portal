<script lang="ts" setup>
import { ref } from 'vue'
import { message } from 'ant-design-vue';

import { createUserApi } from '@/api/user'
import type { CreateUserParam } from '@/api/user/models'


defineProps({
  modalVisible: Boolean
})
const emit = defineEmits(['modalClose'])

const formRef = ref()
const createUserParam = ref<CreateUserParam>({
  username: '',
  account: '',
  password: '',
  phone: '',
})
const handleSubmit = async () => {
  const { data: res } = await createUserApi(createUserParam.value)
  if (res.code !== 0) {
    return message.error(res.msg)
  }
  message.success(res.msg)
  formRef.value.resetFields()
  emit('modalClose')
}
const handleCancel = () => {
  emit('modalClose')
}
</script>
<template>
  <a-modal
    :open="modalVisible"
    title="创建用户"
    @cancel="handleCancel"
    :footer="null"
  >
    <a-form
      ref="formRef"
      :model="createUserParam"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 15 }"
    >
      <a-form-item label="用户名" name="username">
        <a-input v-model:value="createUserParam.username"> </a-input>
      </a-form-item>
      <a-form-item label="账号" name="account">
        <a-input v-model:value="createUserParam.account"> </a-input>
      </a-form-item>
      <a-form-item label="密码" name="password">
        <a-input-password v-model:value="createUserParam.password"> </a-input-password>
      </a-form-item>
      <a-form-item label="手机号" name="phone">
        <a-input v-model:value="createUserParam.phone"> </a-input>
      </a-form-item>
      <div style="text-align: center">
        <a-button type="primary" @click="handleSubmit">提交</a-button>
      </div>
    </a-form>
  </a-modal>
</template>

<style lang="scss" scoped></style>
