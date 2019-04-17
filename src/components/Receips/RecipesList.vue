<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        v-for="recipe in recipesList.recipes"
        :key="recipe.recipe_id"
      >
        <v-card hover>
          <v-img
            :src="recipe.image_url"
            height="30vh"
            lazy
          />
          <v-card-actions>
            <v-card-title primary>
              <div>
                <div class="headline" :href="recipe.source_url" target="_blank">
                  {{ recipe.title }}
                </div>
                <span class="grey--text"></span>
              </div>
            </v-card-title>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ["recipesList"]
  };
</script>
