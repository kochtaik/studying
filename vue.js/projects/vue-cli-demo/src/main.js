import { createApp } from 'vue';

import App from './App.vue';
import friendContact from './components/friend-contact.vue';

const app = createApp(App);
app.component('friend-contact', friendContact);
app.mount('#app');
