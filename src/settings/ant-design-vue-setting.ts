import type { App } from 'vue'
import {
  Layout,
  Tabs,
  Menu,
  Row,
  Col,
  Avatar,
  Breadcrumb,
  Table,
  Button,
  Input,
  message,
  Divider,
  Form,
  Pagination,
  ConfigProvider,
  Space

} from 'ant-design-vue'

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
  app.use(Input)
  app.use(Divider)
  app.use(Form)
  app.use(Pagination)
  app.use(ConfigProvider)
  app.use(Space)


  app.config.globalProperties.$message = message
}
