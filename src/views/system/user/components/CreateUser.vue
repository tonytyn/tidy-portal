<script lang="ts" setup>
import { ref } from 'vue'
defineProps({
  modalVisible: Boolean
})
const emit = defineEmits(['modalClose'])

const formRef = ref()
const createUserParams = ref({
  username: ''
})
const handleSubmit = () => {
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
    cancelText="false"
    
    @cancel="handleCancel"
    :destroyOnClose="true"
  >
    <a-form ref="formRef" layout="inline" :model="createUserParams">
      <a-form-item label="用户名" name="username">
        <a-input v-model:value="createUserParams.username"> </a-input>
      </a-form-item>
    </a-form>
    <template #footer>
      <a-button type="primary" @click="handleSubmit">提交</a-button>
    </template>
  </a-modal>
</template>

<style lang="scss" scoped></style>
