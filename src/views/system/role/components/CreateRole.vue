<script lang="ts" setup>
import { ref } from 'vue'
import { message } from 'ant-design-vue'

import { createRoleApi } from '@/api/role/actions'
import type { CreateRoleParam } from '@/api/role/models'

defineProps({
  modalVisible: Boolean
})
const emit = defineEmits(['modalClose'])

const formRef = ref()
const createRoleParam = ref<CreateRoleParam>({
  roleName: ''
})
const handleSubmit = async () => {
  const { data: res } = await createRoleApi(createRoleParam.value)
  if (res.code !== 0) {
    return message.error(res.msg)
  }
  message.success(res.msg)
  setTimeout(() => {
    formRef.value.resetFields()
    emit('modalClose')
  }, 1000)
}
const handleCancel = () => {
  emit('modalClose')
}
</script>
<template>
  <a-modal :open="modalVisible" title="创建角色" @cancel="handleCancel" :footer="null">
    <a-form
      ref="formRef"
      :model="createRoleParam"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 15 }"
    >
      <a-form-item label="角色名称" name="roleName">
        <a-input v-model:value="createRoleParam.roleName"> </a-input>
      </a-form-item>
      <div style="text-align: center">
        <a-button type="primary" @click="handleSubmit">提交</a-button>
      </div>
    </a-form>
  </a-modal>
</template>

<style lang="less" scoped></style>
