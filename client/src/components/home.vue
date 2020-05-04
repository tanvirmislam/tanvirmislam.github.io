<template>
  <div>
    <v-container id="home">
      <v-row id="titlecard-slide" class="slide" align="center" justify="center">
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

          <div id="titlecard-container">
            <titlecard about-anchor="#about-slide" />
          </div>
        </v-col>
      </v-row>

      <v-row id="about-slide" class="slide" align="center" justify="space-around">
        <about />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import titlecard from './home.titlecard'
import about from './home.about'

export default {
  components: {
    titlecard,
    about
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
      const titlecardElement = document.querySelector('#titlecard')
      const titlecardContainerElement = document.querySelector('#titlecard-container')

      // Vertically position the card
      const windowHeight = window.innerHeight
      const cardHeight = titlecardElement.offsetHeight
      let topSpace

      if (windowHeight > cardHeight) {
        topSpace = (windowHeight * 0.45) - (cardHeight * 0.5)
      } else {
        topSpace = 0
      }

      titlecardContainerElement.style.top = `${topSpace}px`

      // Horizontally position the card
      const windowWidth = window.innerWidth
      const cardWidth = 550
      let leftSpace

      if (windowWidth > cardWidth) {
        leftSpace = (windowWidth * 0.5) - (cardWidth * 0.5)
        titlecardContainerElement.style.width = `${cardWidth}px`
      } else {
        leftSpace = 0
        titlecardContainerElement.style.width = `${windowWidth}px`
      }

      titlecardContainerElement.style.left = `${leftSpace}px`
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

#titlecard-container {
  color: #ffffff;
  position: absolute;
}
</style>
