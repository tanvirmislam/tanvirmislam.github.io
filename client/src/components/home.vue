<template>
  <div>
    <vue-particles
      id="particles-js"
      color="#dedede"
      :particleOpacity="0.5"
      :particlesNumber="100"
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

    <div id="intro">
      <v-card
        class="mx-auto"
        max-width="500"
        color="rgb(54, 54, 54, 0.2)"
      >
        <v-card-title id="intro-header" class="justify-center mb-5" >
          <span v-if="subtitleText === ''"> {{ textEditorSign }} </span>
          <span v-else> {{ subtitleText }}{{ textEditorSign }} </span>
        </v-card-title>

        <v-card-title id="intro-name" class="justify-center">
          <v-avatar class="mr-3" size="40">
            <img src="../../public/images/avatar.jpg" alt="Tanvir">
          </v-avatar>
          Tanvir Islam
        </v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
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
      isSleeping: false
    }
  },

  mounted () {
    const particlesElement = document.querySelector('#particles-js')
    const introElement = document.querySelector('#intro')

    introElement.style.width = `${particlesElement.offsetWidth}px`
    introElement.style.textAlign = 'center'

    setInterval(() => this.updateSubtitle(), 150)
  },

  methods: {
    sleep (duration) {
      this.isSleeping = true
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isSleeping = false
          resolve()
        }, duration)
      })
    },

    async updateSubtitle () {
      if (this.isSleeping) {
        return
      }

      if (this.isSubtitleBeingWritten && this.subtitleText === this.subtitles[this.subtitleIndex]) {
        this.isSubtitleBeingWritten = false
        this.textEditorSign = ''
        await this.sleep(1200)
        this.textEditorSign = '|'
      } else if (!this.isSubtitleBeingWritten && this.subtitleText.length === 0) {
        this.subtitleIndex = (this.subtitleIndex + 1) % this.subtitles.length
        this.isSubtitleBeingWritten = true
        this.subtitleCharIndex = 0
        await this.sleep(200)
      } else if (this.isSubtitleBeingWritten) {
        this.subtitleText += this.subtitles[this.subtitleIndex][this.subtitleCharIndex]
        this.subtitleCharIndex += 1
      } else {
        this.subtitleText = this.subtitleText.slice(0, -1)
        this.subtitleCharIndex -= Math.max(0, this.subtitleCharIndex - 1)
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');

.container {
  max-width: 100%;
}

#particles-js {
  height: 100vh;
}

#intro {
  color: #ffffff;
  position: absolute;
  top: 40%;
  font-family: 'Roboto', sans-serif;
}

#intro-header {
  font-size: 3.5em;
  font-weight: lighter;
}

#intro-name {
  font-weight: 300;
}
</style>
