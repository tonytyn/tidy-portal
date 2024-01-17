<script lang="ts">
export default {
  name: 'Login'
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'

interface LoginParam {
  username: string
  password: string
}

const formState = ref<LoginParam>({
  username: '',
  password: ''
})

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>
<template>
  <a-flex
    gap="middle"
    justify="end"
    align="start"
    class="container"
  >
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      class="login-form"
    >
      <a-form-item
        label="账号"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </a-flex>
</template>
<style>
.container {
  background-image: url(/src/assets/login-background.jpg);
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;

}
.login-form {
  border: 1px solid #000;
  margin-top: 100px;
  margin-right: 50px;
}
</style>
