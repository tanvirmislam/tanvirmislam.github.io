<template>
  <v-container
    id="research-container"
    align="center"
    justify="center"
  >
    <v-row
      align="center"
      justify="space-around"
    >
      <!-- Show cube on top for mobile view -->
      <v-col
        v-if="showCubeOnTop"
        id="solarsystem-container"
        class="mt-10 mb-2"
        cols="12" md="4"
      >
        <rotatingcubesmall />
      </v-col>

      <v-col
        id="research-list-container"
        cols="12"
        md="6"
      >
        <v-card
          id="research-card"
          class="mx-auto my-auto wow fadeInUp"
          data-wow-duration="1.5s"
          max-width="500"
        >
          <v-carousel
            id="research-carousel"
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
              v-for="(research, index) in researchProjects"
              :key="index"
              align="center"
              justify="center"
            >
              <v-sheet
                id="research-sheet"
                tile
                color="rgb(30, 30, 30)"
              >
                <v-row align="center" justify="center">
                  <div class="research-text mx-12 mt-10" align="start">
                    <div class="research-title">{{ research.title }}</div> <br/>
                    <div class="research-description">{{ research.description }}</div>
                    <br />
                    <v-btn
                      dark
                      depressed
                      class="red--text text--lighten-1 learn-more-button"
                      :href="research.url"
                    >
                      Learn More
                    </v-btn>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>

      <!-- Show cube on the right for desktop view -->
      <v-col
        v-if="!showCubeOnTop"
        id="solarsystem-container"
        cols="12" md="4"
      >
        <rotatingcube />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import rotatingcube from '../shared/animations/animation.rotatingcube'
import rotatingcubesmall from '../shared/animations/animation.rotatingcube.small'

export default {
  components: {
    rotatingcube,
    rotatingcubesmall
  },

  data () {
    return {
      researchProjects: {
        SoftwareDefinedRadio: {
          title: 'Software Defined Radio',
          description: 'Real-time wireless communication system using SDR',
          url: '#'
        },
        SuperlatticeStructures: {
          title: 'Buffer Layers for Semiconductor Devices',
          description: 'Simulate and analyze growth platforms for InGaAs/GaAs semiconductor devices',
          url: '#'
        }
      }
    }
  },

  computed: {
    showCubeOnTop () {
      return ['sm', 'xs'].includes(this.$vuetify.breakpoint.name)
    }
  },

  watch: {
    showCubeOnTop () {
      console.log(`Cube on top: ${this.showCubeOnTop}`)
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
      const researchCarouselElement = document.querySelector('#research-carousel')

      researchCarouselElement.style.width = `${Math.min(windowWidth, 500)}px`
      researchCarouselElement.style.height = `${windowHeight * 0.5}px`
    }
  }
}
</script>

<style>
#rotatingcube-container {
  padding: 0;
}

#research-container {
  height: 100%;
}

#research-container .row {
  height: 100%;
}

.research-title {
  font-size: min(2.0em, 6vw);
}

.research-description {
  font-weight: lighter;
  font-size: min(1.3em, 4.5vw);
}

.learn-more-button {
  float: right;
  /* border-radius: 25px; */
  background: rgb(60, 60, 60);
}

.v-btn.v-size--default {
  font-size: min(0.8em, 3.5vw);
}
</style>
