<template>
  <v-toolbar-items class="hidden-xs-only">
    <form @submit.prevent="getRosponse">
      <v-text-field
        flex
        prepend-icon="search"
        placeholder="Search Recipes"
        color="accent"
        single-line
        hide-details
        v-model="query"
      >
      </v-text-field>
    </form>
  </v-toolbar-items>
</template>

<script>
  import axios from "axios/index";
  import { mapActions, mapState } from 'vuex';
  import config from './../../static/config';
  export default {
    data: () => ({
      query: '',
    }),
    methods: {
      ...mapActions(['setRecipesToStore']), // wyciąganie metod ze store
      getRosponse() {
        const { proxy, address, key} = config;
        axios.get(`${proxy}${address}search?key=${key}&q=${this.query}&count=30`)
                .then(({ data }) => this.recipesObject = data)
                .catch(err => console.log(err))
      },
    },
    computed: {
      ...mapState(['recipesObject']), // wyciąganie wartości ze tore
      recipesObject: {
        get() {
          return this.recipesObject;
        },
        set(value) {
          this.setRecipesToStore(value)
        }
      },
    }
  };
</script>
