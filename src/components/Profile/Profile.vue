<template>
  <v-container>
    <h1>Profile</h1>
    <p v-if="email">Your email address: {{ email }}</p>
  </v-container>
</template>

<script>
  import axios from "axios";

  export default {
    computed: {
      email() {
        return !this.$store.getters.user
          ? false
          : this.$store.getters.user.email;
      }
    },
    created() {
      this.$store.dispatch("fetchUser");
    }
  };
</script>
