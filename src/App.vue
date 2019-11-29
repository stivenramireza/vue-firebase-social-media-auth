<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link :to="{ name: 'home' }">
          <span>Vue</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logout">
        <span class="mr-2">Sign Out</span>
        <v-icon>fas fa-address-book</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions(['logout'])
  }
};
</script>
