<template>
  <v-container
    id="projects-container"
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
      <!-- Solar system animation -->
      <v-col
        v-if="showAnimation"
        id="solarsystem-container"
        :class="$vuetify.breakpoint.smAndDown ? 'my-12 py-12' : ''"
        cols="12"
        md="4"
      >
        <div
          class="wow pulse"
          data-wow-delay="1.0s"
          data-wow-duration="2.5s"
        >
          <solarsystem
            :scale="solarsystemParams.scale"
            :center-top="solarsystemParams.centerTop"
            :center-left="solarsystemParams.centerLeft"
          />
        </div>
      </v-col>

      <!-- Projects card -->
      <v-col
        id="projects-list-container"
        cols="12"
        md="6"
        align="center"
        justify="center"
      >
        <v-card
          id="project-card"
          class="wow fadeInUp overflow-y-auto"
          data-wow-duration="1.5s"
          align="center"
          justify="center"
          :style="`width: ${cardDimensions.width}; height: ${cardDimensions.height}`"
        >
          <v-carousel
            id="project-carousel"
            class="pt-5 pb-10"
            :continuous="true"
            :show-arrows="true"
            height="auto"
            delimiter-icon="mdi-minus"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            align="center"
            justify="center"
            hide-delimiter-background
            hide-delimiters
          >
            <v-carousel-item
              v-for="(project, index) in projects"
              :key="index"
              align="center"
              justify="center"
            >
              <v-sheet
                color="rgb(30, 30, 30)"
                tile
              >
                <!-- Links -->
                <div align="end">
                  <!-- Link to app -->
                  <v-tooltip
                    v-if="project.appURL"
                    bottom
                  >
                    <template v-slot:activator="{ on }">
                      <v-btn
                        icon
                        fab
                        class="red--text text--lighten-1 mr-4"
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
                        class="red--text text--lighten-1 mr-4"
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
                <div
                  class="project-text mx-12 px-5"
                  align="start"
                >
                  <!-- Title -->
                  <div class="project-title">
                    {{ project.title }}
                  </div>

                  <!-- Description -->
                  <div class="project-description mt-4">
                    {{ project.description }}
                  </div>

                  <!-- Tags -->
                  <div class="mt-5">
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
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SolarSystemComponent from '../shared/animations/animation.solarsystem.vue';

export default {
  components: {
    solarsystem: SolarSystemComponent,
  },
  props: {
    showAnimation: Boolean,
  },

  data() {
    return {
      projects: {
        gitfiddle: {
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
        covidathenaeum: {
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
        cpppathfinding: {
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
        checkers: {
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
        mazewanderer: {
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
      },
    };
  },

  computed: {
    solarsystemParams() {
      const centerTop = '50%';
      const centerLeft = '50%';
      let scale;

      if (this.$vuetify.breakpoint.smAndDown) {
        scale = 0.35;
      } else if (this.$vuetify.breakpoint.mdOnly) {
        scale = 0.4;
      } else {
        scale = 0.5;
      }

      return {
        centerTop,
        centerLeft,
        scale,
      };
    },

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
.project-title {
  font-size: min(2.0em, 6vw);
}

.project-description {
  font-weight: lighter;
  font-size: min(1.3em, 5vw);
}

.tag {
  padding: 2px 12px;
  margin: 2px 2px;
  margin-top: 4px;
  font-size: min(0.9em, 3.5vw);
}
</style>
