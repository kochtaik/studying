<template>
  <section>
    <header><h1>My friends</h1></header>
    <add-friend
      @set-friend-data="printFriend"
      ></add-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-contact="deleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'Serge',
          name: 'Serge',
          phone: '0123-45-67',
          email: 'serge@localhost.com',
          isFavorite: false,
        },
        {
          id: 'Di',
          name: 'Di',
          phone: '123-45-67',
          email: 'di@localhost.com',
          isFavorite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(identifier) {
      const identifiedFriend = this.friends.find((friend) => friend.id === identifier);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    printFriend(data) {
      data.id = data.name.toLowerCase();
      this.friends.push(data);
    },
    deleteFriend(id) {
      console.log(id)
      this.friends = this.friends.filter((contact) => contact.id !== id);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app input {
  margin: 0.5em;
}

#app input:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  border: 1px solid rgba(81, 203, 238, 1);
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
  text-align: center;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  margin: 0 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
