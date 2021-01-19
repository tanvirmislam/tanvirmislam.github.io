<template>
  <v-container
    id="research-projects-container"
    class="pa-0"
    fluid
    align="center"
    justify="center"
    style="height: 100%;"
  >
    <div
      class="mx-6 my-4"
      style="position: absolute;"
    >
      <v-btn
        small
        depressed
      >
        <span class="title-1 mr-2">
          <font-awesome-icon :icon="['fas', 'flask']" />
        </span>
        <span> Research </span>
      </v-btn>
    </div>
    <v-row
      align="center"
      justify="space-around"
      style="height: 100%;"
    >
      <!-- Research projects card -->
      <v-col
        id="research-projects-list-container"
        cols="12"
        align="center"
        justify="center"
      >
        <carousel-3d
          data-wow-duration="1.5s"
          class="wow fadeInUp overflow-y-auto"
          controls-visible
          border="0"
          animation-speed="850"
          bias="right"
          perspective="30"
          :width="cardDimensions.width"
          :height="cardDimensions.height"
          :inverse-scaling="500"
          :space="600"
        >
          <slide
            v-for="(project, i) in researchProjects"
            :key="i"
            :index="i"
          >
            <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
              <v-card
                id="research-project-card"
                tile
                align="center"
                justify="center"
                :data-index="index"
                :class="{
                  current: isCurrent,
                  onLeft: (leftIndex >= 0),
                  onRight: (rightIndex >= 0)
                } + ' overflow-y-auto'"
                style="width: 100%; height: 100%;"
              >
                <div class="px-sm-2">
                  <!-- Slide number -->
                  <div class="carousel-slide-number">
                    <span>{{ i+1 }} / {{ researchProjects.length }}</span>
                  </div>

                  <!-- Links -->
                  <div align="start">
                    <!-- Link to detailed description -->
                    <v-tooltip
                      v-if="project.learnMoreURL"
                      bottom
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          icon
                          fab
                          class="red--text text--lighten-1"
                          :to="project.learnMoreURL"
                          target="_blank"
                          v-on="on"
                        >
                          <v-icon class="display-1">
                            mdi-head-lightbulb
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Learn More</span>
                    </v-tooltip>

                    <!-- Link to github -->
                    <v-tooltip
                      v-if="project.repoURL"
                      bottom
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          icon
                          fab
                          class="red--text text--lighten-1"
                          :href="project.repoURL"
                          target="_blank"
                          v-on="on"
                        >
                          <v-icon class="display-1">
                            mdi-github
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>View Repository</span>
                    </v-tooltip>
                  </div>

                  <!-- Goolge scholar slide -->
                  <div
                    v-if="project.title === 'Google Scholar'"
                    align="center"
                    justify="center"
                    style="top: 80px; -ms-transform: translateY(80px); transform: translateY(80px);"
                  >
                    <div class="research-project-title">
                      Find my publications on
                      <br>
                      Google Scholar!
                    </div>

                    <div class="mt-2">
                      <v-btn
                        icon
                        fab
                        class="red--text text--lighten-1"
                        :href="project.URL"
                        target="_blank"
                      >
                        <v-icon class="display-1">
                          mdi-school
                        </v-icon>
                      </v-btn>
                    </div>
                  </div>

                  <!-- Content -->
                  <div
                    v-else
                    class="mt-2"
                  >
                    <!-- Title -->
                    <div class="research-project-title">
                      {{ project.title }}
                    </div>

                    <!-- Description -->
                    <div class="research-project-description mt-2">
                      {{ project.description }}
                    </div>

                    <!-- Tags -->
                    <div class="mt-4">
                      <v-chip
                        v-for="(tag, tagIndex) in project.tags"
                        :key="tagIndex"
                        class="tag"
                        small
                      >
                        {{ tag }}
                      </v-chip>
                    </div>
                  </div>
                </div>
              </v-card>
            </template>
          </slide>
        </carousel-3d>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  components: {
    Carousel3d,
    Slide,
  },

  props: {},

  data() {
    return {
      cardDimensions: {
        width: '0px',
        height: '0px',
      },

      researchProjects: [
        {
          title: 'Software Defined Radio',
          // eslint-disable-next-line max-len
          description: 'Real-time ad-hoc wireless communication system built using GNURadio (C++), Python, and USRP SDR devices',
          learnMoreURL: '/research/sdr',
          repoURL: 'https://github.com/tanvirmislam/tdma-gnuradio-sdr',
          tags: [
            'Linux',
            'GNURadio',
            'C++',
            'Boost',
            'SWIG',
            'Python',
            'LabVIEW',
            'Digital Communications',
            'Cryptography',
          ],
        },
        {
          title: 'Study of Buffer Layers for Semiconductor Devices',
          // eslint-disable-next-line max-len
          description: 'Simulate and analyze different growth platforms for InGaAs/GaAs semiconductor devices, and quantify their performances as dislocation filters using MATLAB',
          learnMoreURL: '/research/semiconductors',
          tags: [
            'MATLAB',
            'Python',
            'Semiconductor Physics',
            'Nanotechnology',
          ],
        },
        {
          title: 'Google Scholar',
          URL: 'https://scholar.google.com/citations?hl=en&user=VLMVgH4AAAAJ',
        },
      ],
    };
  },

  created() {
    window.addEventListener('resize', this.setResearchCardDimensions);
    this.setResearchCardDimensions();
  },

  destroyed() {
    window.removeEventListener('resize', this.setResearchCardDimensions);
  },

  methods: {
    setResearchCardDimensions() {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      let width;

      if (windowWidth < 500) {
        width = windowWidth;
      } else {
        width = '410px';
      }

      const height = `${Math.min(380, windowHeight * 0.65)}px`;

      this.cardDimensions.width = width;
      this.cardDimensions.height = height;
    },
  },
};
</script>

<style scoped>
.research-project-title {
  font-size: max(1.2em, min(1.5em, 6vw));
}

.research-project-description {
  font-weight: lighter;
  font-size: max(1.0em, min(1.3em, 5vw));
}

.tag {
  padding: auto;
  margin: 4px 4px;
  margin-top: 5px;
  font-size: max(0.7em, min(0.9em, 3.5vw));
}
</style>
