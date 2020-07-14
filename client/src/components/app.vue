<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container
          class="pa-0"
          fluid
        >
          <router-view />
        </v-container>
      </v-content>

      <v-divider />

      <v-footer
        dark
        padless
      >
        <app-footer />
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Footer from './shared/footer.vue';

export default {
  components: {
    'app-footer': Footer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Crimson+Text&family=PT+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&family=Ubuntu+Mono&display=swap');

:root {
  --default-font-family: 'Roboto', sans-serif;
}

#app {
  font-family: var(--default-font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
</style>
