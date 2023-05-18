import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

// 从本地存储中读取之前保存的状态数据
const savedState = JSON.parse(localStorage.getItem('piniaState'))

// 创建 Pinia store 实例
const pinia = createPinia()

// 设置初始状态为读取的保存状态数据
pinia.state.value = savedState

const app = createApp(App)

app.use(pinia)
app.mount('#app')




watch(
    pinia.state,
    (state) => {
        // 每当状态发生变化时，将整个 state 持久化到本地存储。
        localStorage.setItem('piniaState', JSON.stringify(state))
    },
    { deep: true }
)
