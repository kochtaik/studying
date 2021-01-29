<template>
  <li>
    <h2>{{ name }} {{isFavorite ? '(favorite)' : '' }}</h2>
    <button @click="toggleVisibility">{{ detailsAreVisible ? 'Hide' : 'Show'}} details</button>
    <button @click="toggleFavorite">Toggle favorite</button>
    <button @click="deleteContact">Delete contact</button>
    <ul v-if="detailsAreVisible">
      <li>{{ phone }}</li>
      <li>{{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['toggle-favorite', 'delete-contact'],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteContact() {
      this.$emit('delete-contact', this.id);
    },
  },
}
</script>