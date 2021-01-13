const app = Vue.createApp({
  data() {
    return {
      goal: 'Finish the course!',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    printGoal() {
      const random = Math.random();
      return random > 0.5 ? 'Learn Vue!' : 'Master Vue!';
    },
  },
});

app.mount('#user-goal');
