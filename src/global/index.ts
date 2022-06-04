import { App } from 'vue'
import registerElement from './register-element'
export const globalRegister = function (app: App) {
  app.use(registerElement)
}
