import type { App } from 'vue'
import { Layout,Tabs, Menu, Row, Col,Avatar, Breadcrumb, Table, Button, message } from 'ant-design-vue'

export const setupAntDesignVue = (app: App<Element>): void => {
  app.use(Layout)
  app.use(Tabs)
  app.use(Menu)
  app.use(Row)
  app.use(Col)
  app.use(Avatar)

  app.use(Breadcrumb)
  app.use(Table)
  app.use(Button)

  app.config.globalProperties.$message = message
}
