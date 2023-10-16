<script lang="ts" setup>
import { ref, watch } from 'vue'
import { message } from 'ant-design-vue'

import { getRoleDetailApi, updateRoleApi } from '@/api/role'
import type { RoleDetailResult, UpdateRoleParam } from '@/api/role/models'

const props = defineProps({
  modalVisible: Boolean,
  roleId: Number
})

const formRef = ref()
const roleDetail = ref<RoleDetailResult>({
  id: 0,
  roleName: '',
  state: '',
  createdAt: ''
})
const updateRoleParam = ref<UpdateRoleParam>({
  id: 0,
  roleName: '',
  state: ''
})
watch(props, async () => {
  if (props.modalVisible) {
    const { data: res } = await getRoleDetailApi(props.roleId as number)
    roleDetail.value = res.data
    updateRoleParam.value.roleName = res.data.roleName
    updateRoleParam.value.state = res.data.state
  }
})

const handleSubmit = async () => {
  const { data: res } = await updateRoleApi(updateRoleParam.value)
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
    <a-form ref="formRef" :model="roleDetail" :label-col="{ span: 5 }" :wrapper-col="{ span: 15 }">
      <a-form-item label="用户名" name="rolename">
        <a-input v-model:value="updateRoleParam.roleName" />
      </a-form-item>
      <a-form-item label="状态" name="state">
        <a-switch
          v-model:checked="updateRoleParam.state"
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
