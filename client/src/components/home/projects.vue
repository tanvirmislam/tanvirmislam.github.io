<template>
  <v-container
    id="projects-container"
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
          <font-awesome-icon :icon="['fas', 'project-diagram']" />
        </span>
        <span> Projects </span>
      </v-btn>
    </div>
    <v-row
      align="center"
      justify="space-around"
      style="height: 100%;"
    >
      <!-- Projects card -->
      <v-col
        id="projects-list-container"
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
          :width="cardDimensions.width"
          :height="cardDimensions.height"
          :inverse-scaling="1000"
          :space="500"
        >
          <slide
            v-for="(project, i) in projects"
            :key="i"
            :index="i"
          >
            <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
              <v-card
                id="project-card"
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
                    <span>{{ i+1 }} / {{ projects.length }}</span>
                  </div>

                  <!-- Links -->
                  <div align="start">
                    <!-- Link to app -->
                    <v-tooltip
                      v-if="project.appURL"
                      bottom
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          icon
                          fab
                          class="red--text text--lighten-1"
                          :href="project.appURL"
                          target="_blank"
                          v-on="on"
                        >
                          <v-icon class="display-1">
                            mdi-open-in-app
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Open App</span>
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

                  <!-- Content -->
                  <div class="mt-2">
                    <!-- Title -->
                    <div class="project-title">
                      {{ project.title }}
                    </div>

                    <!-- Description -->
                    <div class="project-description mt-2">
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

      projects: [
        {
          title: 'GitFiddle',
          description: 'Interactive visualization tool to learn git branching',
          repoURL: 'https://github.com/tanvirmislam/gitfiddle',
          appURL: 'http://gitfiddle.herokuapp.com/',
          tags: [
            'Node.js',
            'Vue.js',
            'Javascript',
            'REST API',
            'Data Structures',
            'Processing',
            'DevTools',
            'Visualization',
          ],
        },
        {
          title: 'Covid Athenaeum',
          description: 'Data visualization of COVID-19 pandemic',
          repoURL: 'https://github.com/tanvirmislam/covid-athenaeum',
          appURL: 'http://gitfiddle.covidathenaeum.com/',
          tags: [
            'Node.js',
            'MongoDB',
            'Nuxt.js',
            'D3.js',
            'Javascript',
            'API',
            'Data Scrubbing',
            'Visualization',
          ],
        },
        {
          title: 'Quickgrid Pathfinder',
          description: 'Pathfinding algorithm visualized using grids',
          repoURL: 'https://github.com/tanvirmislam/quickgrid-pathfinding',
          tags: [
            'C++',
            'Data Stuctures',
            'Algorithms',
            'Graph',
            'Command Line Tool',
          ],
        },
        {
          title: 'Checkers AI',
          description: 'Checkers AI implemented using fixed-depth Minimax algorithm',
          repoURL: 'https://github.com/tanvirmislam/checkers-ai',
          tags: [
            'C++',
            'Algorithms',
            'Game Theory',
            'Minimax',
          ],
        },
        {
          title: 'Maze Wanderer Robot',
          description: 'Maze solver bot using Microcontroller, ultrasound sensors, and optical encoders',
          repoURL: 'https://github.com/tanvirmislam/maze-wanderer-robot',
          tags: [
            'C',
            'Arduino',
            'Microcontroller',
            'Algorithms',
            'Sensors and Modules',
            'Circuits',
          ],
        },
      ],
    };
  },

  created() {
    window.addEventListener('resize', this.setProjectCardDimensions);
    this.setProjectCardDimensions();
  },

  destroyed() {
    window.removeEventListener('resize', this.setProjectCardDimensions);
  },

  methods: {
    setProjectCardDimensions() {
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
.project-title {
  font-size: max(1.2em, min(1.5em, 6vw));
}

.project-description {
  font-weight: lighter;
  font-size: max(1.0em, min(1.4em, 5vw));
}

.tag {
  padding: auto;
  margin: 4px 4px;
  margin-top: 5px;
  font-size: max(0.7em, min(0.9em, 3.5vw));
}
</style>
