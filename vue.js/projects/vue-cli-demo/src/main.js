import { createApp } from 'vue';

import App from './App.vue';

// components
import friendContact from './components/friend-contact.vue';
import addFriend from './components/add-friend.vue';

const app = createApp(App);
app.component('friend-contact', friendContact);
app.component('add-friend', addFriend);
app.mount('#app');
