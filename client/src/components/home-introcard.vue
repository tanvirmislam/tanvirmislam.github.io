<template>
  <div>
    <v-card id="introcard" class="mx-auto px-2 py-2" max-width="550" color="rgb(54, 54, 54, 0.2)">
      <div class="wow fadeInUp" data-wow-duration="1.5s">
        <v-card-title id="intro-header" class="justify-center mb-8">
          <span v-if="titleText === ''"> {{ textEditorSign }} </span>
          <span v-else> {{ titleText }}{{ textEditorSign }} </span>
        </v-card-title>
      </div>

      <div class="wow fadeIn" data-wow-delay="1s" data-wow-duration="1.5s">
        <v-card-title id="intro-name" class="justify-center">
          <v-avatar class="mr-3" size="40">
            <img src="../../public/images/avatar.jpg" alt="Tanvir">
          </v-avatar>
          Tanvir Islam
        </v-card-title>
      </div>

      <v-card-actions>
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
            <v-container>
              <v-row>
                <v-col>
                  <v-btn
                    small
                    depressed
                    class="mr-2 mb-2"
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
  </div>
</template>

<script>
export default {
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

      showExploreOptions: false
    }
  },

  mounted () {
    // Set animated title's font size
    const cardElement = document.querySelector('#introcard')
    const headerElement = document.querySelector('#intro-header')
    const originalFontEmSize = 4

    const windowWidth = window.innerWidth
    const cardWidth = parseInt(cardElement.style.maxWidth.slice(0, -2))

    if (windowWidth < cardWidth) {
      headerElement.style.fontSize = `${(originalFontEmSize / cardWidth) * windowWidth}em`
    } else {
      headerElement.style.fontSize = `${originalFontEmSize}em`
    }

    setInterval(() => this.updateTitleAnimation(), 150)
  },

  methods: {
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
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');

#intro-header {
  /* font-size: 4em; */
  font-weight: lighter;
}

#intro-name {
  font-weight: 300;
}

.col {
  padding: 2px;
}

.container {
  padding-bottom: 0px;
}
</style>
