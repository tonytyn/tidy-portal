import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

const noAttr = () => {
  return {
    name: 'no-attribute',
    transformIndexHtml(html: string) {
      return html.replace(`type="module" crossorigin`, '')
    }
  }
}
export default defineConfig(({ command }: ConfigEnv): UserConfig => {
  return {
    base: './',
    plugins: [
      vue(),
      noAttr(),
      viteMockServe({
        mockPath: 'mock',
        enable: command === 'serve',
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
