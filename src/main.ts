import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assure-toi que le chemin est correct

const app = createApp(App);
app.use(router); // Intègre le routeur
app.mount('#app');
