<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider width="50%">
      <div class="sider-content">
        <!-- Left Content (Image) -->
        <img :src="carUrl" alt="Login Image" class="login-image" />
      </div>
    </a-layout-sider>
    <a-layout-content>
      <div class="login-form-container">
        <!-- Right Content (Login Form) -->
        <a-form
          ref="loginForm"
          :form="form"
          @finish="handleSubmit"
          :class="{ 'login-form': true, 'login-form-finished': formFinished }"
        >
          <a-form-item name="username">
            <a-input v-model:value="username" placeholder="Username"></a-input>
          </a-form-item>
          <a-form-item name="password">
            <a-input-password v-model:value="password" placeholder="Password"></a-input-password>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="handleSubmit" :loading="loading">Log in</a-button>
          </a-form-item>
        </a-form>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import carUrl from '@/assets/login-background.jpg'

const router = useRouter()

// Form Ref
const form = ref<any>({})

// Form State
const formFinished = ref(false)
const username = ref('')
const password = ref('')
const loading = ref(false)

// Form Submission
const handleSubmit = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    formFinished.value = true // Assume login is successful for demo purpose
    router.push({name:'AppList'})
    // Redirect or perform necessary actions upon successful login
  }, 2000) // Simulating API request delay
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
  /* Add box shadow to create hover effect */
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
