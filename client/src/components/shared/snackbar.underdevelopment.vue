<template>
  <v-snackbar
    v-model="isSnackbarVisible"
    :timeout="timeout"
    color="#191919"
    class="custom-snackbar red--text text--lighten-1"
  >
    {{ text }}
  </v-snackbar>
</template>

<script>
export default {
  props: {
    isSnackbarVisible: {
      type: Boolean,
      required: true,
    },
    timeout: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      text: 'Currently under development',
    };
  },
};
</script>

<style>
.custom-snackbar {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

.v-snack__content {
  justify-content: center;
}
</style>
