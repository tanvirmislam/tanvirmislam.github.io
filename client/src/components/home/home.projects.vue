<template>
  <v-container
    id="projects-container"
    align="center"
    justify="center"
  >
    <v-row
      align="center"
      justify="space-around"
    >
      <v-col
        v-if="showAnimation"
        id="solarsystem-container"
        class="mt-10 mb-2"
        cols="12"
        md="4"
      >
        <div
          class="wow fadeIn"
        >
          <solarsystem
            :scale="solarsystemParams.scale"
            :centerTop="solarsystemParams.centerTop"
            :centerLeft="solarsystemParams.centerLeft"
          />
        </div>
      </v-col>

      <v-col
        id="projects-list-container"
        cols="12"
        md="6"
      >
        <v-card
          id="project-card"
          class="mx-auto my-auto wow fadeInUp"
          data-wow-duration="1.5s"
          max-width="500"
        >
          <v-carousel
            id="project-carousel"
            :continuous="true"
            :show-arrows="true"
            :progress="true"
            progress-color="rgb(46,46,72)"
            delimiter-icon="mdi-minus"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(project, index) in projects"
              :key="index"
              align="center"
              justify="center"
            >
              <v-sheet
                id="project-sheet"
                color="rgb(30, 30, 30)"
                tile
              >
                <v-row align="center" justify="center">
                  <div class="project-text mx-12 px-2 mt-10" align="start">
                    <div class="project-title">{{ project.title }}</div> <br/>
                    <div class="project-description">{{ project.description }}</div>

                    <br/>

                    <div
                      v-for="(tag, tagIndex) in project.tags"
                      :key="tagIndex"
                    >
                      <span class="tag"> {{ tag }} </span>
                    </div>
                  </div>
                </v-row>

                <v-row align="end" justify="end" class="mt-2">
                  <div v-if="project.appURL">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          icon
                          fab
                          dark
                          depressed
                          class="red--text text--lighten-1 mr-4"
                          v-on="on" :href="project.appURL"
                          target="_blank"
                        >
                          <v-icon dark class="display-1">mdi-open-in-app</v-icon>
                        </v-btn>
                      </template>
                      <span>Open App</span>
                    </v-tooltip>
                  </div>

                  <div>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          icon
                          fab
                          dark
                          depressed
                          class="red--text text--lighten-1 mr-4"
                          v-on="on" :href="project.repoURL"
                          target="_blank"
                        >
                          <v-icon dark class="display-1">mdi-github</v-icon>
                        </v-btn>
                      </template>
                      <span>View Repository</span>
                    </v-tooltip>
                  </div>

                  <span class="mr-5" />
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import solarsystem from '../shared/animations/animation.solarsystem'

export default {
  props: {
    showAnimation: Boolean
  },

  components: {
    solarsystem
  },

  data () {
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
            'Visualization'
          ]
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
            'Visualization'
          ]
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
            'Command Line Tool'
          ]
        },
        checkers: {
          title: 'Checkers AI',
          description: 'Checkers AI implemented using fixed-depth Minimax algorithm',
          repoURL: 'https://github.com/tanvirmislam/checkers-ai',
          tags: [
            'C++',
            'Algorithms',
            'Game Theory',
            'Minimax'
          ]
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
            'Circuits'
          ]
        }
      }
    }
  },

  computed: {
    solarsystemParams () {
      const centerTop = '50%'
      const centerLeft = '50%'
      let scale

      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          scale = 0.3
          break
        case 'sm':
          scale = 0.35
          break
        case 'md':
          scale = 0.4
          break
        default:
          scale = 0.5
          break
      }

      return { centerTop, centerLeft, scale }
    }
  },

  mounted () {
    this.adjustOnWindowResize()
    window.addEventListener('resize', this.adjustOnWindowResize)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.adjustOnWindowResize)
  },

  methods: {
    adjustOnWindowResize () {
      this.adjustCarouselDimensions()
    },

    adjustCarouselDimensions () {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const projectCarouselElement = document.querySelector('#project-carousel')

      projectCarouselElement.style.width = `${Math.min(windowWidth, 500)}px`
      projectCarouselElement.style.height = `${Math.min(500, windowHeight * 0.5)}px`
    }
  }
}
</script>

<style>
#projects-container {
  height: 100%;
}

#projects-container .row {
  height: 100%;
}

#project-sheet {
  height: 40%;
}

.project-title {
  font-size: min(2.0em, 6vw);
}

.project-description {
  font-weight: lighter;
  font-size: min(1.3em, 5vw);
}

.tag {
  float: left;
  border-radius: 25px;
  background: rgb(60, 60, 60, 0.8);
  padding: 2px 12px;
  margin: 2px 2px;
  margin-top: 4px;
  font-size: min(0.9em, 3.5vw);
}
</style>
