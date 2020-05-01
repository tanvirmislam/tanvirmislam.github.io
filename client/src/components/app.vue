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
  },

  data: () => ({})
}
</script>
