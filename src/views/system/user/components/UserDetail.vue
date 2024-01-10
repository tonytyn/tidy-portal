<script lang="ts" setup>
import { ref, watch } from 'vue'

import type { UserDetailModel } from '@/api/user/models'

import { getUserDetailApi, getUserRoleIdsApi } from '@/api/user/actions'
import { searchRoleListApi } from '@/api/role/actions'

const props = defineProps({
  modalVisible: Boolean,
  userId: Number
})

const userDetail = ref<UserDetailModel>({
  id: 0,
  username: '',
  account: '',
  phone: '',
  state: '',
  createdAt: ''
})
const userRoleIds = ref<number[]>([])
const roleOptions = ref<Option[]>([])
watch(props, async () => {
  if (props.modalVisible) {
    const { data: res } = await getUserDetailApi(props.userId as number)
    userDetail.value = res.data
    const { data: res2 } = await searchRoleListApi()
    roleOptions.value = []
    res2.data.forEach((role) => {
      roleOptions.value.push({ label: role.roleName, value: role.id, disabled: true })
    })
    const { data: res3 } = await getUserRoleIdsApi(props.userId as number)
    userRoleIds.value = res3.data
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
      <a-form-item label="角色">
        <a-checkbox-group v-model:value="userRoleIds" :options="roleOptions" />
      </a-form-item>
      <a-form-item label="状态" name="state">
        <a-switch :checked="userDetail.state === '启用'" disabled />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<style lang="less" scoped></style>
