import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'
export const globalRegister = function (app: App) {
  app.use(registerElement)
  app.use(registerProperties)
}
