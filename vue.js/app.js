const app = Vue.createApp({
  data() {
    return {
      userName: 'Kanstantsin',
      userAge: 21,
      imageUrl: 'https://images.freeimages.com/images/large-previews/13f/natal-sofia-4-1431300.jpg',
    }
  },
  methods: {
    getRandomNum() {
      return Math.round(Math.random() * 10);
    }
  },
});

app.mount('#assignment');
