<template>
  <v-toolbar>
    <!-- Back to home button -->
    <v-tooltip bottom>
      <template #activator="{ on }">
        <v-btn
          icon
          fab
          class="red--text text--lighten-1 mr-2"
          to="/"
          v-on="on"
        >
          <v-icon>
            mdi-home-import-outline
          </v-icon>
        </v-btn>
      </template>
      <span> Back to Home </span>
    </v-tooltip>

    <v-toolbar-title>
      {{ title }}
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
