<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <router-view />
        </v-container>
      </v-content>

      <v-divider></v-divider>

      <v-footer dark padless>
        <app-footer />
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Footer from './shared/footer'

export default {
  components: {
    'app-footer': Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Crimson+Text&family=Roboto:wght@100;300;400&display=swap&Ubuntu+Mono:ital@1&display=swap&family=Shadows+Into+Light+Two&display=swap&family=Alegreya&display=swap&family=Dosis&display=swap&family=Patrick+Hand&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
}
</style>
