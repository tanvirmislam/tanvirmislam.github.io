<template>
  <div>
    <span
      id="start-anchor"
      class="anchor"
    />

    <!-- Back to home button -->
    <div
      v-if="showBackToHomeButton"
      id="back-to-home-button-container"
      class="wow rubberBand"
    >
      <v-btn
        id="back-to-home-button"
        class="red--text text--lighten-1"
        fab
        depressed
        style="opacity: 0.8;"
        @click="$vuetify.goTo('#start-anchor', scrollOptions)"
      >
        <v-icon class="display-1">
          {{ 'mdi-chevron-double-up' }}
        </v-icon>
      </v-btn>
    </div>

    <!-- Home -->
    <v-container
      id="home-container"
      class="pa-0"
      fluid
    >
      <!-- Landing slide -->
      <v-row
        id="title-slide"
        class="slide"
        align="center"
        justify="center"
      >
        <v-col>
          <!-- Title card -->
          <titlecard
            v-observe-visibility="onTitleCardVisibilityChange"
            projects-anchor="#projects-slide"
            research-anchor="#research-slide"
            about-anchor="#about-slide"
          />

          <!-- Particle JS on the landing slide -->
          <vue-particles
            id="particles-js"
            color="#dedede"
            :particle-opacity="0.5"
            :particles-number="90"
            shape-type="triangle"
            :particle-size="5"
            lines-color="#dedede"
            :lines-width="1"
            :line-linked="true"
            :line-opacity="0.1"
            :lines-distance="200"
            :move-speed="1"
            :hover-effect="true"
            hover-mode="grab"
            :click-effect="true"
            click-mode="repulse"
          />
        </v-col>
      </v-row>

      <!-- Projects -->
      <v-row
        id="projects-slide"
        v-observe-visibility="onProjectsSlideVisibilityChange"
        class="slide"
        align="center"
        justify="space-around"
      >
        <projects :show-animation="isProjectsSlideVisible" />
      </v-row>

      <!-- Research -->
      <v-row
        id="research-slide"
        v-observe-visibility="onResearchSlideVisibilityChange"
        class="slide"
        align="center"
        justify="space-around"
      >
        <research :show-animation="isResearchSlideVisible" />
      </v-row>

      <!-- About -->
      <v-row
        id="about-slide"
        class="slide"
        align="center"
        justify="space-around"
      >
        <about />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import titlecard from './home.titlecard.vue';
import projects from './home.projects.vue';
import research from './home.research.vue';
import about from './home.about.vue';

export default {
  components: {
    titlecard,
    projects,
    research,
    about,
  },

  data() {
    return {
      isTitleCardVisible: true,
      isProjectsSlideVisible: false,
      isResearchSlideVisible: false,

      anchorScroll: {
        duration: 1000,
        offset: 0,
        easing: 'easeInOutCubic',
      },
    };
  },

  computed: {
    scrollOptions() {
      return {
        duration: this.anchorScroll.duration,
        offset: this.anchorScroll.offset,
        easing: this.anchorScroll.easing,
      };
    },

    showBackToHomeButton() {
      return !this.isTitleCardVisible;
    },
  },

  methods: {
    onTitleCardVisibilityChange(isVisible) {
      this.isTitleCardVisible = isVisible;
    },

    onProjectsSlideVisibilityChange(isVisible) {
      this.isProjectsSlideVisible = isVisible;
    },

    onResearchSlideVisibilityChange(isVisible) {
      this.isResearchSlideVisible = isVisible;
    },
  },
};
</script>

<style scoped>
.anchor {
  visibility: hidden;
}

.slide {
  height: 100vh;
}

#particles-js {
  height: 95vh;
}

#back-to-home-button-container {
  position: fixed;
  top: 1%;
  right: 4%;
  z-index: 9999;
}
</style>
