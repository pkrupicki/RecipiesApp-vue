<template>
  <v-app class="background">
    <main>
      <toolbar></toolbar>
      <v-container class="mt-4">
        <transition name="fade">
            <router-view/>
        </transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import Toolbar from './utilities/Toolbar';
  // Najlepiej abyś jak najwięcej przeniósł do STORE
  export default {
    components: {
      Toolbar,
    },
    created() {
      this.$store.dispatch('tryAutoLogin');
    },
  }
  // STYLE możesz wynieśc do osobnego pliku i tylko je tu importowac
</script>
<style scoped>
.background {
  background-image: linear-gradient(
    to right bottom,
   rgba(255,165,50, 0.8),
   rgba(255,192,111, 0.8)),
   url(../assets/798.jpg);
   background-size: cover;
   background-position: top;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
