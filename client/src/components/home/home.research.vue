<template>
  <v-container
    id="research-projects-container"
    class="pa-0"
    fluid
    align="center"
    justify="center"
    style="height: 100%;"
  >
    <v-row
      align="center"
      justify="space-around"
      style="height: 100%;"
    >
      <!-- Show cube on top for mobile view -->
      <v-col
        v-if="showAnimation && $vuetify.breakpoint.smAndDown"
        id="small-rotatingcube-container"
        class="py-0"
        cols="12"
        md="4"
      >
        <div
          class="wow pulse"
          data-wow-delay="1.0s"
          data-wow-duration="2.5s"
        >
          <rotatingcube />
        </div>
      </v-col>

      <!-- Research projects card -->
      <v-col
        id="research-projects-list-container"
        cols="12"
        md="6"
        align="center"
        justify="center"
      >
        <v-card
          id="research-project-card"
          class="wow fadeInUp overflow-y-auto"
          data-wow-duration="1.5s"
          align="center"
          justify="center"
          :style="`width: ${cardDimensions.width}; height: ${cardDimensions.height}`"
        >
          <v-carousel
            id="research-project-carousel"
            class="py-10"
            :continuous="true"
            :show-arrows="true"
            height="auto"
            delimiter-icon="mdi-minus"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            hide-delimiter-background
            hide-delimiters
          >
            <v-carousel-item
              v-for="(research, index) in researchProjects"
              :key="index"
              align="center"
              justify="center"
            >
              <v-sheet
                class="project-sheet"
                color="rgb(30, 30, 30)"
                tile
              >
                <!-- Content -->
                <div
                  class="research-project-text mx-12 px-5"
                  align="start"
                >
                  <!-- Title -->
                  <div class="research-project-title">
                    {{ research.title }}
                  </div>

                  <!-- Description -->
                  <div class="research-project-description mt-4">
                    {{ research.description }}
                  </div>

                  <!-- Learn more -->
                  <div class="mt-5">
                    <v-btn>
                      Learn More
                    </v-btn>
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>

      <!-- Show cube on the right for larger screens -->
      <v-col
        v-if="showAnimation && $vuetify.breakpoint.mdAndUp"
        id="rotatingcube-container"
        class="mt-10 mb-2"
        cols="12"
        md="4"
      >
        <div
          class="wow pulse"
          data-wow-delay="1.0s"
          data-wow-duration="2.5s"
        >
          <rotatingcube />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import rotatingcube from '../shared/animations/animation.rotatingcube.vue';

export default {
  components: {
    rotatingcube,
  },
  props: {
    showAnimation: Boolean,
  },

  data() {
    return {
      researchProjects: {
        SoftwareDefinedRadio: {
          title: 'Software Defined Radio',
          // eslint-disable-next-line max-len
          description: 'Real-time ad-hoc wireless communication system built using GNURadio (C++), Python, and USRP SDR devices',
          url: '#',
        },
        SuperlatticeStructures: {
          title: 'Buffer Layers for Semiconductor Devices',
          // eslint-disable-next-line max-len
          description: 'Simulate and analyze different growth platforms for InGaAs/GaAs semiconductor devices, and quantify their performances as dislocation filters using MATLAB',
          url: '#',
        },
      },
    };
  },

  computed: {
    cardDimensions() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let width;
      let height;

      if (this.$vuetify.breakpoint.mdAndUp) {
        width = '550px';
        height = '450px';
      } else {
        width = `${Math.min(500, windowWidth)}px`;
        height = `${windowHeight * 0.6}px`;
      }

      return {
        width,
        height,
      };
    },
  },
};
</script>

<style scoped>
#rotatingcube-container {
  --cube-side: 180px;
}

#small-rotatingcube-container {
  --cube-side: 120px;
}

.research-project-title {
  font-size: min(2.0em, 6vw);
}

.research-project-description {
  font-weight: lighter;
  font-size: min(1.3em, 4.5vw);
}

.v-btn.v-size--default {
  font-size: min(0.8em, 3.5vw);
}
</style>
