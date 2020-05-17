<template>
  <div>
    <span id="start-anchor" class="anchor"/>

    <div id="back-to-home-container" v-if="!isTitlecardVisible">
      <v-btn
        id="back-to-home"
        class="red--text text--lighten-1"
        fab depressed
        style="opacity: 0.8;"
        @click="$vuetify.goTo('#start-anchor', options)"
      >
        <v-icon class="display-1">{{ 'mdi-chevron-double-up' }}</v-icon>
        <span style="visibility: hidden"> {{ animteBackToHomeButton() }} </span>
      </v-btn>
    </div>

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

          <div id="titlecard-container" v-observe-visibility="titlecardVisibilityChanged">
            <titlecard about-anchor="#about-slide" projects-anchor="#projects-slide"/>
          </div>
        </v-col>
      </v-row>

      <v-row id="projects-slide" class="slide" align="center" justify="space-around">
        <projects />
      </v-row>

      <v-row id="about-slide" class="slide" align="center" justify="space-around">
        <about />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import titlecard from './home.titlecard'
import projects from './home.projects'
import about from './home.about'

export default {
  components: {
    titlecard,
    projects,
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

      showExploreOptions: false,

      isTitlecardVisible: true,

      anchorScroll: {
        duration: 1000,
        offset: 0,
        easing: 'easeInOutCubic'
      }
    }
  },

  computed: {
    options () {
      return {
        duration: this.anchorScroll.duration,
        offset: this.anchorScroll.offset,
        easing: this.anchorScroll.easing
      }
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
    },

    titlecardVisibilityChanged (isVisible, entity) {
      this.isTitlecardVisible = isVisible
    },

    animteBackToHomeButton () {
      setTimeout(() => {
        const element = document.querySelector('#back-to-home-container')
        if (!element) {
          this.animteButton()
        } else {
          element.classList.add('wow', 'rubberBand', 'animated')
        }
      }, 200)
    }
  }
}
</script>

<style>
.container {
  max-width: 100%;
}

.anchor {
  visibility: hidden;
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

#back-to-home-container {
  position: fixed;
  top: 1%;
  right: 4%;
}
</style>
