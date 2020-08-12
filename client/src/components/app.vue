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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&family=Ubuntu+Mono&display=swap');

:root {
  --default-font-family: 'Roboto', sans-serif;
}

#app {
  font-family: var(--default-font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

.slide {
  /* Height set to slightly less than 100%, and extended with margin */
  /* in order to allow for better slide visibility detection */
  height: 98vh;
  margin-bottom: 4vh;
}

.header-1 {
  font-size: 1.6em;
  font-weight: 400;
  text-align: left;
}

.header-2 {
  font-size: 1.2em;
  font-weight: 500;
  text-align: left;
}

.text {
  font-size: 1.1em;
  font-weight: 300;
}

.text.enlarged {
  font-size: 1.5em;
  line-height: 1.6em;
}

.footnote-1 {
  font-size: 1.25em;
  font-weight: 100;
  font-style: italic;
}

.footnote-2 {
  font-size: 0.85em;
  font-weight: 300;
  font-style: italic;
  text-align: center;
  color: lightgray;
}

.quote {
  font-weight: 100;
  font-size: 1.4em;
  text-align: right;
}

.justify-text {
  text-align: justify;
  text-justify: inter-word;
}

.anchor {
  visibility: hidden;
}
</style>
