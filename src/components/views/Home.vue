<template>
  <v-container fluid grid-list-xl>
    home
    <recipes-list v-bind:recipesList="recipesObject"></recipes-list>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  import RecipesList from './../Receips/RecipesList';
  export default {
    components: {
      RecipesList,
    },
    comments: [
      RecipesList,
    ],
    computed: {
      ...mapState(['recipesObject']),
    },
  };
</script>

