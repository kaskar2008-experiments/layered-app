import { createSSRApp } from 'vue'
import App from '@/features/app/App.vue'
import { createRouter } from '@/domain/routing/business';

export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  return { app, router }
}
