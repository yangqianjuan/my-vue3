import { App } from 'vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElContainer,
  ElSlider,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElTable,
  ElTableColumn
} from 'element-plus'
import 'element-plus/lib/theme-chalk/base.css'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElContainer,
  ElSlider,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElTable,
  ElTableColumn
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
