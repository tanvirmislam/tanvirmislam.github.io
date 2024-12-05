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
        v-observe-visibility="status => { onSlideVisibilityChange('titlecard', status); }"
        class="slide"
        align="center"
        justify="center"
      >
        <v-col>
          <!-- Title card -->
          <titlecard
            :scroll-options="scrollOptions"
            :animate-title-text="slideVisibility.titlecard"
            projects-anchor="#projects-slide"
            research-anchor="#research-slide"
            about-anchor="#about-slide"
            contact-anchor="#contact-slide"
          />

          <!-- Particle JS on the landing slide -->
          <vue-particles
            v-if="showParticles"
            id="particles-js"
            color="#dedede"
            :particle-opacity="0.5"
            :particles-number="80"
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

      <!-- About -->
      <v-row
        id="about-slide"
        v-observe-visibility="status => { onSlideVisibilityChange('about', status); }"
        class="slide"
        align="center"
        justify="space-around"
      >
        <about />
      </v-row>

      <!-- Research -->
      <v-row
        id="research-slide"
        v-observe-visibility="status => { onSlideVisibilityChange('research', status); }"
        class="slide"
        align="center"
        justify="space-around"
      >
        <research />
      </v-row>

      <!-- Projects -->
      <v-row
        id="projects-slide"
        v-observe-visibility="status => { onSlideVisibilityChange('projects', status); }"
        class="slide"
        align="center"
        justify="space-around"
      >
        <projects />
      </v-row>

      <!-- Contact -->
      <v-row
        id="contact-slide"
        v-observe-visibility="status => { onSlideVisibilityChange('contact', status); }"
        class="slide"
        align="center"
        justify="space-around"
      >
        <contact :show-animation="slideVisibility.contact" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { debounce } from 'debounce';
import TitlecardComponent from './titlecard.vue';
import ProjectsComponent from './projects.vue';
import ResearchComponent from './research.vue';
import AboutComponent from './about.vue';
import ContactComponent from './contact.vue';

export default {
  components: {
    titlecard: TitlecardComponent,
    projects: ProjectsComponent,
    research: ResearchComponent,
    about: AboutComponent,
    contact: ContactComponent,
  },

  data() {
    return {
      slideVisibility: {
        titlecard: false,
        about: false,
        research: false,
        projects: false,
        contact: false,
      },

      scrollOptions: {
        duration: 1000,
        offset: 0,
        easing: 'easeInOutCubic',
      },

      showBackToHomeButton: false,
      showParticles: true,
      scrollDebounceMs: 200,
    };
  },

  mounted() {
    this.$vuetify.goTo('#start-anchor');
    window.onscroll = debounce(this.onScroll, this.particlesMoveSpeed);
  },

  methods: {
    onSlideVisibilityChange(slideName, status) {
      this.slideVisibility[slideName] = status;
    },

    onScroll() {
      const top = (
        (window.scrollY || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
      );
      if (top > 0) {
        this.showBackToHomeButton = true;
        this.showParticles = (top <= window.innerHeight);
      } else {
        this.showBackToHomeButton = false;
        this.showParticles = true;
      }
    },
  },
};
</script>

<style scoped>
#particles-js {
  height: 95vh;
}

#back-to-home-button-container {
  position: fixed;
  top: 1.5%;
  right: 15px;
  z-index: 9999;
}
</style>
