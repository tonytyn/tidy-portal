<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider width="50%">
      <div class="sider-content">
        <img :src="carUrl" alt="Login Image" class="login-image" />
      </div>
    </a-layout-sider>
    <a-layout-content>
      <div class="login-form-container">
        <a-form
          :model="loginForm"
          @finish="handleLogin"
          :class="{ 'login-form': true, 'login-form-finished': formFinished }"
        >
          <a-form-item name="account" :rules="[{ required: true }]">
            <a-input v-model:value="loginForm.account" placeholder="账号"></a-input>
          </a-form-item>
          <a-form-item name="password" :rules="[{ required: true }]">
            <a-input-password
              v-model:value="loginForm.password"
              placeholder="密码"
            ></a-input-password>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" :loading="loading">Log in</a-button>
          </a-form-item>
        </a-form>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'

import type { LoginParam } from '@/api/system/models'
import { login } from '@/api/system/actions'
import carUrl from '@/assets/login-background.jpg'

const router = useRouter()
// 定义登录参数类型，因为没有别的地方

const loginForm = ref<LoginParam>({
  account: 'test',
  password: 'goodgood123'
})

const formFinished = ref(false)
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  const { data: res } = await login(loginForm.value)
  if (res.code !== 0) {
    loading.value = false
    return message.error(res.msg)
  }

  loading.value = false
  formFinished.value = true 
  router.push({ name: 'AppList' })

  
}
</script>

<style scoped>
.sider-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.login-image {
  max-width: 100%;
  max-height: 100%;
}

.login-form-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Initial box shadow */
}
.login-form-container:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Hover box shadow */
}
.login-form {
  width: 300px;
  padding: 20px; /* Add padding for better appearance */
  border: 1px solid #ccc; /* Add border to the form */
  border-radius: 5px; /* Optional: Add border radius for rounded corners */
}

.login-form-finished {
  opacity: 0.5; /* Dim the form upon submission for visual feedback */
}
</style>
