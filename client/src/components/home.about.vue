<template>
  <v-container>
    <v-row align="center" justify="space-around">
        <v-col id="rotatingcube-container" class="mb-10 wow slideInUp" data-wow-duration="1s" cols="12" sm="4">
          <rotatingcube />
        </v-col>
        <v-col id="about-description-container" cols="12" sm="6">
          <div id="about-description">
            <p>
              Hello world!
              <v-icon class="ml-1 pb-1 title wow wobble" data-wow-duration="2.0s" data-wow-delay="1.0s" data-wow-iteration="10">
                {{ 'mdi-hand-left' }}
              </v-icon>
            </p>
          </div>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import rotatingcube from './rotatingcube'

export default {
  components: {
    rotatingcube
  }
}
</script>

<style>
#rotatingcube-container {
  padding: 0;
}

#about-description-container {
  text-align: center;
}

#about-description {
  text-align: left;
}
</style>
