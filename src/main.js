import { createApp } from 'vue'
import { router } from './routers'
import App from './App.vue'
import "./assets/main.scss"

createApp(App).use(router).mount("#app")