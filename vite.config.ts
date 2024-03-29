import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command }: ConfigEnv): UserConfig => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        enable: true,
        watchFiles: false
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
