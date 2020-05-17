<template>
  <v-container id="projects-container" align="center" justify="center">
    <v-row align="center" justify="space-around">
      <v-col id="solarsystem-container" class="mt-10 mb-2" data-wow-duration="1s" cols="12" md="4">
        <solarsystem :scale="solarsystemParams.scale" :centerTop="solarsystemParams.centerTop" :centerLeft="solarsystemParams.centerLeft"/>
      </v-col>

      <v-col id="projects-list-container" cols="12" md="6">
        <v-card id="project-card" class="mx-auto my-auto" max-width="500">
          <v-carousel
            id="project-carousel"
            :continuous="true"
            :show-arrows="true"
            :progress="true"
            progress-color="rgb(46,46,72)"
            delimiter-icon="mdi-deathly-hallows"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(project, index) in projects" :key="index" align="center" justify="center">
              <v-sheet id="project-sheet" color="rgb(30, 30, 30)" tile>
                <v-row align="center" justify="center">
                  <div class="project-text mx-12 px-5 mt-10" align="start">
                    <div class="project-title">{{ project.title }}</div> <br/>
                    <div class="project-description">{{ project.description }}</div> <br/>
                  </div>
                </v-row>

                <v-row align="end" justify="end" class="mt-2">
                  <div>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn icon fab dark depressed class="red--text text--lighten-1 mr-4" v-on="on" :href="project.repoURL" target="_blank">
                          <v-icon dark class="display-1">mdi-code-tags</v-icon>
                        </v-btn>
                      </template>
                      <span>View Repository</span>
                    </v-tooltip>
                  </div>

                  <div v-if="project.appURL">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn icon fab dark depressed class="red--text text--lighten-1 mr-4" v-on="on" :href="project.appURL" target="_blank">
                          <v-icon dark class="display-1">mdi-open-in-app</v-icon>
                        </v-btn>
                      </template>
                      <span>Open App</span>
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
import solarsystem from './animation.solarsystem'

export default {
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
          appURL: 'http://gitfiddle.herokuapp.com/'
        },
        covidathenaeum: {
          title: 'Covid Athenaeum',
          description: 'Data visualization of COVID-19 pandemic',
          repoURL: 'https://github.com/tanvirmislam/covid-athenaeum',
          appURL: 'http://gitfiddle.covidathenaeum.com/'
        },
        cpppathfinding: {
          title: 'Quickgrid Pathfinder',
          description: 'Pathfinding algorithms simply visualized right at the terminal using grids',
          repoURL: 'https://github.com/tanvirmislam/quickgrid-pathfinding'
        },
        checkers: {
          title: 'Checkers AI',
          description: 'Checkers AI implemented using fixed-depth Minimax algorithm',
          repoURL: 'https://github.com/tanvirmislam/checkers-ai'
        },
        mazewanderer: {
          title: 'Maze Wanderer Bot',
          description: 'Maze wanderer solver robot made using Arduino, Driver, ultrasound sensors and optical encoders',
          repoURL: 'https://github.com/tanvirmislam/maze-wanderer-robot'
        }
      }
    }
  },

  computed: {
    solarsystemParams () {
      const centerTop = '50%'
      const centerLeft = '50%'
      let scale

      if (['xs', 'sm'].includes(this.$vuetify.breakpoint.name)) {
        scale = 0.4
      } else {
        scale = 0.5
      }

      return { centerTop, centerLeft, scale }
    }
  },

  mounted () {
    this.isMounted = true
    this.adjustDimensions()
    window.addEventListener('resize', this.adjustDimensions)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.adjustDimensions)
  },

  methods: {
    adjustDimensions () {
      this.adjustCarouselDimensions()
    },

    adjustCarouselDimensions () {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const projectCarouselElement = document.querySelector('#project-carousel')

      projectCarouselElement.style.width = `${Math.min(windowWidth, 500)}px`
      projectCarouselElement.style.height = `${windowHeight * 0.5}px`
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

.project-title {
  font-size: min(2.0em, 6vw);
}

.project-description {
  font-weight: lighter;
  font-size: min(1.5em, 5vw);
}
</style>
