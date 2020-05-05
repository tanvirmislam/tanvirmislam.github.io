<template>
  <div>
    <v-card id="titlecard" class="mx-auto px-2 py-2" max-width="550" color="rgb(54, 54, 54, 0.2)">
      <div class="wow fadeInUp" data-wow-duration="1.5s">
        <v-card-title id="titlecard-header" class="justify-center mb-8">
          <span v-if="titleText === ''"> {{ textEditorSign }} </span>
          <span v-else> {{ titleText }}{{ textEditorSign }} </span>
        </v-card-title>
      </div>

      <div class="wow fadeIn" data-wow-delay="1s" data-wow-duration="1.5s">
        <v-card-title id="titlecard-name" class="justify-center">
          <v-avatar class="mr-3" size="40">
            <img src="../../public/img/avatar.jpg" alt="Tanvir">
          </v-avatar>
          Tanvir Islam
        </v-card-title>
      </div>

      <v-card-actions id="explore">
        <v-spacer></v-spacer>
        <v-btn
          small
          depressed
          @click="showExploreOptions = !showExploreOptions"
          class="wow fadeIn red--text text--lighten-1"
          data-wow-duration="2s"
        >
          <span> Explore </span>
          <v-icon>{{ showExploreOptions ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="showExploreOptions">
          <v-divider></v-divider>

          <v-card-actions>
            <v-container id="explore-options-container">
              <v-row>
                <v-col>
                  <v-btn
                    small
                    depressed
                    class="mr-2 mb-2"
                    @click="showSnackbar()"
                  >
                    <span class="title-1 mr-2">
                      <font-awesome-icon :icon="['fas', 'project-diagram']" />
                    </span>
                    <span> Projects </span>
                  </v-btn>

                  <v-btn
                    small
                    depressed
                    class="mr-2 mb-2"
                    @click="showSnackbar()"
                  >
                    <span class="title-1 mr-2">
                      <font-awesome-icon :icon="['fas', 'flask']" />
                    </span>
                    <span> Research </span>
                  </v-btn>

                  <v-btn
                    small
                    depressed
                    class="mr-2 mb-2"
                    @click="showSnackbar()"
                  >
                    <span class="title-1 mr-2">
                      <font-awesome-icon :icon="['fas', 'brain']" />
                    </span>
                    <span> Problem Solving </span>
                  </v-btn>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-btn
                    small
                    depressed
                    class="mr-2 mb-2"
                    @click="$vuetify.goTo(aboutAnchor, options)"
                  >
                    <span class="title-1 mr-2">
                      <font-awesome-icon :icon="['fas', 'info-circle']" />
                    </span>
                    <span> About Me </span>
                  </v-btn>

                  <v-btn
                    small
                    depressed
                    class="mr-2 mb-2"
                    @click="showSnackbar()"
                  >
                    <span class="title-1 mr-2">
                      <font-awesome-icon :icon="['fas', 'file-alt']" />
                    </span>
                    <span> Resume </span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions>
        </div>
      </v-expand-transition>
    </v-card>

    <snackbar :is-snackbar-visible="showUnderDevelopmentSnackbar" :timeout="snackbarTimeout" />
  </div>
</template>

<script>
import snackbar from './snackbar.underdevelopment'

export default {
  props: {
    aboutAnchor: String
  },

  components: {
    snackbar
  },

  data () {
    return {
      titles: [
        'Develop',
        'Innovate',
        'Solve Problems',
        'Visualize',
        'Scale',
        'Secure'
      ],
      titleIndex: 0,
      titleCharIndex: 0,
      isTitleBeingWritten: true,
      titleText: '',
      textEditorSign: '|',
      isSleeping: false,

      showExploreOptions: false,

      anchorScroll: {
        duration: 1000,
        offset: 0,
        easing: 'easeInOutCubic'
      },

      showUnderDevelopmentSnackbar: false,
      snackbarTimeout: 1000
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
    // Title font size
    this.setTitleFontSize()
    window.addEventListener('resize', this.setTitleFontSize)

    // Title animation
    setInterval(() => this.updateTitleAnimation(), 150)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.setTitleFontSize)
  },

  methods: {
    setTitleFontSize () {
      // Set animated title's font size
      const cardElement = document.querySelector('#titlecard')
      const headerElement = document.querySelector('#titlecard-header')
      const originalFontEmSize = 4

      const windowWidth = window.innerWidth
      const cardWidth = parseInt(cardElement.style.maxWidth.slice(0, -2))

      if (windowWidth < cardWidth) {
        headerElement.style.fontSize = `${Math.max(1.5, ((originalFontEmSize / cardWidth) * windowWidth))}em`
      } else {
        headerElement.style.fontSize = `${originalFontEmSize}em`
      }
    },

    async updateTitleAnimation () {
      if (this.isSleeping) {
        return
      }

      if (this.isTitleBeingWritten && this.titleText === this.titles[this.titleIndex]) {
        this.isTitleBeingWritten = false
        this.textEditorSign = ''
        await this.sleep(1500)
        this.textEditorSign = '|'
      } else if (!this.isTitleBeingWritten && this.titleText.length === 0) {
        this.titleIndex = (this.titleIndex + 1) % this.titles.length
        this.isTitleBeingWritten = true
        this.titleCharIndex = 0
        await this.sleep(200)
      } else if (this.isTitleBeingWritten) {
        this.titleText += this.titles[this.titleIndex][this.titleCharIndex]
        this.titleCharIndex += 1
      } else {
        this.titleText = this.titleText.slice(0, -1)
        this.titleCharIndex -= Math.max(0, this.titleCharIndex - 1)
      }
    },

    showSnackbar () {
      this.showUnderDevelopmentSnackbar = true
      setTimeout(() => { this.showUnderDevelopmentSnackbar = false }, this.snackbarTimeout)
    }
  }
}
</script>

<style>
.col {
  padding: 2px;
}

.container {
  padding-bottom: 0px;
}

#titlecard-container {
  font-family: 'Roboto', sans-serif;
}

#titlecard-header {
  font-weight: 100;
}

#titlecard-name {
  font-weight: 300;
}

#explore {
  padding-top: 0;
}

#explore-options-container {
  text-align: center;
}
</style>
