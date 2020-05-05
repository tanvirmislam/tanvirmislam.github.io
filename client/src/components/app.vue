<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <router-view></router-view>
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
import Footer from './footer'

export default {
  components: {
    'app-footer': Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Crimson+Text&family=Roboto:wght@100;300;400&display=swap&Ubuntu+Mono:ital@1&display=swap');
</style>
