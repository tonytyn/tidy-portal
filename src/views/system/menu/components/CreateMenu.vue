<template>
  <PageWrapper>
    <a-form layout="inline" :model="createMenuParam">
      <a-form-item>
        <a-input v-model:value="createMenuParam.menuName" placeholder="menuName" />
      </a-form-item>
    </a-form>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { PageWrapper } from '/@/components/Page'
import { CreateMenuParam } from '/@/api/menu/models'
const createMenuParam = reactive<CreateMenuParam>({
  parentId: 0,
  menuName: '',
  menuCode: '',
  menuType: ''
})
</script>

<style lang="scss" scoped></style>
