<template>
  <h2>Add friend</h2>
  <form @submit.prevent="setFriendContact">
    <div>
      <label>Name:</label> <input v-model="friendContact.name" type="text">
    </div>
    <div>
      <label>Phone:</label> <input v-model="friendContact.phone" type="tel">
    </div>
    <div>
      <label>Email:</label> <input v-model="friendContact.email" type="email">
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['set-friend-data'], 
  data() {
    return {
      friendContact: {
        name: '',
        email: '',
        phone: '',
        isFavorite: false,
      },
    };
  },
  methods: {
    setFriendContact() {
      this.$emit('set-friend-data', this.friendContact);
    }
  }
}
</script>