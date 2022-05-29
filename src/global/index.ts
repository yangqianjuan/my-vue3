import {App} from 'vue'
import registerElement from './register-element'
export default function (app:App) {
  app.use(registerElement)

}
