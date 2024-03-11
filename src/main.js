import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/index.css';
import '../node_modules/flowbite-vue/dist/index.css';

import App from './App.vue';
import router from './router/index.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
