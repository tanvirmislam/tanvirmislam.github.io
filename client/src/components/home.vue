<template>
  <div>
    <v-container id="home">
      <v-row id="first-slide" class="slide" align="center" justify="center">
        <v-col>
          <vue-particles
            id="particles-js"
            color="#dedede"
            :particleOpacity="0.5"
            :particlesNumber="90"
            shapeType="triangle"
            :particleSize="5"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.1"
            :linesDistance="200"
            :moveSpeed="1"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="repulse"
          >
          </vue-particles>

          <div id="introcard-container">
            <introcard />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import introcard from './home-introcard'

export default {
  components: {
    introcard
  },

  data () {
    return {
      subtitles: [
        'Develop',
        'Innovate',
        'Solve Problems',
        'Visualize',
        'Scale',
        'Secure'
      ],
      subtitleIndex: 0,
      subtitleCharIndex: 0,
      isSubtitleBeingWritten: true,
      subtitleText: '',
      textEditorSign: '|',
      isSleeping: false,

      showExploreOptions: false
    }
  },

  mounted () {
    this.adjustCardPosition()
    window.addEventListener('resize', this.adjustCardPosition)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.adjustCardPosition)
  },

  methods: {
    adjustCardPosition () {
      const particlesElement = document.querySelector('#particles-js')
      const introcardElement = document.querySelector('#introcard-container')

      // Vertically position the card
      const windowHeight = window.innerHeight
      const cardHeight = introcardElement.offsetHeight
      const targetHeight = (windowHeight * 0.45) - (cardHeight * 0.5)

      introcardElement.style.top = `${targetHeight}px`

      // Horizontally center the card
      introcardElement.style.width = `${particlesElement.offsetWidth}px`
      introcardElement.style.textAlign = 'center'
    }
  }
}
</script>

<style>
.container {
  max-width: 100%;
}

#home {
  max-width: 100%;
  padding: 0px;
}

.slide {
  height: 100vh;
}

#particles-js {
  height: 100vh;
}

#introcard-container {
  color: #ffffff;
  position: absolute;
}
</style>
