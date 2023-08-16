import { createApp } from 'vue'
import App from './App.vue'
import clickOutside from 'v3-click-outside'


const app = createApp(App)


app.use(clickOutside)
app.mount('#app')
