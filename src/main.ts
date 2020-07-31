import { createApp } from 'vue';
import App from './App.vue'
import router from './router'

import '@/assets/styles/main.scss';

// @ts-ignore
createApp(App).use(router).mount('#app')
