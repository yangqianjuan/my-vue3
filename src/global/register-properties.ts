import { App } from 'vue'
import { formartUtcDate } from '@/utils/index'
export default function (app: App) {
  app.config.globalProperties.$filter = {
    formartUtcDate: (date: string) => {
      return formartUtcDate(date, 'YYYY-MM-DD HH:mm:ss')
    }
  }
}
