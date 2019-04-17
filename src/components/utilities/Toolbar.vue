<template>
    <span>
        <v-navigation-drawer app temporary fixed v-model="sideNav">
          <v-toolbar color="accent" dark flat>
            <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
              <router-link to="/" tag="span" style="cursor: pointer">
                <h1 class="title pl-3">Recipes</h1>
              </router-link>
          </v-toolbar>

          <v-list>
            <v-list-tile ripple v-for="item in sideNavItems" :key="item.title" :to="item.link">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                {{ item.title }}
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed color="primary" dark>
            <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
            <v-toolbar-title class="hidden-xs-only">
                <router-link to="/" tag="span" style="cursor: pointer">
                    Recipes
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only" v-if="auth">
                <search></search>
            </v-toolbar-items>
          <v-spacer></v-spacer>

          <v-toolbar-items class="hidden-xs-only">
            <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
              <v-icon class="hidden-sm-only" left>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
            <v-btn flat @click="onLogout" v-if="auth">
              <v-icon left dark>exit_to_app</v-icon>
              Logout</v-btn>
          </v-toolbar-items>
        </v-toolbar>
    </span>
</template>
<script>
    // Ten Komponent też mozesz pociąć na jeszcze mniejsze elementy
    import { mapActions } from 'vuex';
    import Search from './../Search/Search';
    export default {
        data: () => ({
            query: '',
            sideNav: false,
        }),
        components: {
            Search,
        },
        methods: {
            ...mapActions(['clearRecipesStore']), // to lepszy sposób wyciągania metod ze STORE
            toggleSideNav() {
                this.sideNav = !this.sideNav;
            },
            onLogout() {
                this.$store.dispatch('logout');
                this.clearRecipesStore();
                this.$router.push('/signin');
            },
        },
        computed: {
            horizontalNavItems() {
                let horizontalNavItems =
                    [
                        { icon: 'lock_open', title: 'Sign In', link: '/signin' },
                        { icon: 'create', title: 'Sign Up', link: '/signup' }
                    ];
                if (this.auth) {
                    horizontalNavItems = [{ icon: 'move_to_inbox', title: 'Profile', link: '/profile' }]
                }
                return horizontalNavItems;
            },
            sideNavItems() {
                let sideNavItems =
                    [
                        { icon: 'lock_open', title: 'Sign In', link: '/signin' },
                        { icon: 'create', title: 'Sign Up', link: '/signup' }
                    ];
                if (this.auth) {
                    sideNavItems = [{ icon: 'move_to_inbox', title: 'Profile', link: '/profile' },
                        { icon: 'exit_to_app', title: 'Logout', link: '/signin' }
                    ];
                }
                return sideNavItems;
            },
            auth() {
                return this.$store.getters.isAuthenticated;
            }
        }
    }
</script>


// testoweKonto2@konto.com
// Promenada1!!
