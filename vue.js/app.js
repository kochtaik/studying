const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    selectBoxA() {
      this.boxASelected = !this.boxASelected;
    },

    selectBoxB() {
      this.boxBSelected = !this.boxBSelected;
    },

    selectBoxC() {
      this.boxCSelected = !this.boxCSelected;
    },
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
});

app.mount('#styling');