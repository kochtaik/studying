<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleVisibility">{{ detailsAreVisible ? 'Hide' : 'Show'}} details</button>
    <ul v-if="detailsAreVisible">
      <li>{{ friend.phone }}</li>
      <li>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'Serge',
        name: 'Serge',
        phone: '0123-45-67',
        email: 'serge@localhost.com',
      },
    };
  },
  methods: {
    toggleVisibility() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
}
</script>