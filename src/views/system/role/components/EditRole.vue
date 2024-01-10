<script lang="ts" setup>
import { ref, watch } from 'vue'
import { message } from 'ant-design-vue'

import type { MenuTreeModel } from '@/api/menu/models'
import type { RoleDetailModel, UpdateRoleParam } from '@/api/role/models'
import { getRoleDetail, getRoleMenus, updateRole } from '@/api/role/actions'
import { getMenuTree } from '@/api/menu/actions'

const props = defineProps({
  modalVisible: Boolean,
  roleId: Number
})

const formRef = ref()
const roleDetail = ref<RoleDetailModel>({
  id: 0,
  roleName: '',
  state: '',
  createdAt: ''
})
const updateRoleParam = ref<UpdateRoleParam>({
  id: 0,
  roleName: '',
  state: '',
  menuIds: []
})
const menuTree = ref<MenuTreeModel[]>([])
const checkedKeys = ref<number[]>([])
const leafNodes = ref<number[]>([])
watch(props, async () => {
  if (props.modalVisible) {
    const { data: res } = await getRoleDetail(props.roleId as number)
    roleDetail.value = res.data
    updateRoleParam.value.roleName = res.data.roleName
    updateRoleParam.value.state = res.data.state
    const { data: res2 } = await getMenuTree()
    menuTree.value = res2.data
    leafNodes.value = filterLeafNode(menuTree.value, new Array<number>())
    const { data: res3 } = await getRoleMenus(props.roleId as number)
    checkedKeys.value = res3.data.filter((element) => leafNodes.value.includes(element))
  }
})
// 回显选中的节点时要过把叶子节点过滤出来，不然该节点就会变成全选状态。
// TODO 后续这个方法应该抽取出公共的方法来复用，定义好泛型
const filterLeafNode = (menuTree: MenuTreeModel[], leafNodes: number[]) => {
  menuTree.forEach((element) => {
    if (element?.children?.length) {
      filterLeafNode(element.children, leafNodes)
    } else {
      leafNodes.push(element.key)
    }
  })
  return leafNodes
}

const handleSubmit = async () => {
  updateRoleParam.value.menuIds = checkedKeys.value.filter((element) =>
    leafNodes.value.includes(element)
  )
  const { data: res } = await updateRole(updateRoleParam.value)
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
  <a-modal :open="modalVisible" title="角色详情" @cancel="handleCancel" :footer="null">
    <a-form ref="formRef" :model="roleDetail" :label-col="{ span: 5 }" :wrapper-col="{ span: 15 }">
      <a-form-item label="角色名称" name="roleName">
        <a-input v-model:value="updateRoleParam.roleName" />
      </a-form-item>
      <a-form-item label="绑定菜单" name="menus">
        <a-tree
          v-model:checkedKeys="checkedKeys"
          checkable
          :selectable="false"
          :tree-data="menuTree"
        >
          <template #title="{ title, key }">
            <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
            <template v-else>{{ title }}</template>
          </template>
        </a-tree>
      </a-form-item>
      <a-form-item label="状态" name="state">
        <a-switch
          v-model:checked="updateRoleParam.state"
          :checkedValue="'启用'"
          :unCheckedValue="'停用'"
        />
      </a-form-item>
    </a-form>
    <div style="text-align: center">
      <a-button type="primary" @click="handleSubmit">提交</a-button>
    </div>
  </a-modal>
</template>

<style lang="less" scoped></style>
