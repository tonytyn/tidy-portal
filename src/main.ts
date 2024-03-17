import 'ant-design-vue/dist/reset.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupAntDesignVue } from './settings/ant-design-vue-setting'
import { setupProdMockServer } from './mockProdServer'; 

setupProdMockServer(); 

const app = createApp(App)

setupAntDesignVue(app)

app.use(router)

app.mount('#app')
