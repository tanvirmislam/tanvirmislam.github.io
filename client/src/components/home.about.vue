<template>
  <v-container id="about-container">
    <v-row align="center" justify="space-around">
        <v-col id="rotatingcube-container" class="mt-5 mb-2" data-wow-duration="1s" cols="12" md="4">
          <rotatingcube />
        </v-col>

        <v-col id="about-description-container" class="py-10 mt-10" cols="12" md="6">
          <v-list id="about-description" class="overflow-y-auto pt-5 pb-2 px-5" max-width="90vw">
            <span id="start-of-description" v-observe-visibility="descriptionScrolled" />

            <div class="quote mb-2">
              <p class="quote-sentence">
                " Without data, you're just another person with an opinion "
              </p>
              <p class="quote-writer">
                W. Edwards Deming
              </p>
            </div>

            <div>
              <p>
                Hello world, welcome to my homepage.
              </p>
              <p>
                I am a software developer, working in the FinTech industry.
              </p>
              <p>
                Developing data-driven, intelligent, and interactive software is something I am deeply passionate about.
              </p>
              <p>
                I graduated with a Computer Science and Electrical Engineering degree from the University of Connecticut on 2019.
                During my undergraduate years, I conducted academic reserach on simulating superlattice structures for semiconductor devices and
                software defined radio (SDR) for ad-hoc wireless network systems.
                Eager to work and gain knowledge on crafting software solutions leveraging big datasets, I started my journey as a software engineer at FactSet Research Systems soon after my graduation.
              </p>
              <p>
                I love to articulate real world phenomena and visualize data and abstract concepts through code.
                As a result, a lot of the personal projects I work on include some sort of visualization.
                I am always looking for ways to expand my knowledge on things such as creating scalable software systems,
                building robust infrastructures, or using data for machine learning and deep learning.
              </p>
              <p>
                In my free time, I find solace in playing guitar, travelling, hiking,
                or just reading a good book with a warm cup of tea in front of me.
              </p>
              <p>
                Feel free to reach out with any question or comment.
              </p>
            </div>

            <span id="end-of-description" />
          </v-list>

          <v-btn small text depressed class="mt-1 title" @click="onScrollButtonClick()">
            <font-awesome-icon :icon="['fas', 'sort']" />
          </v-btn>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import rotatingcube from './rotatingcube'

export default {
  components: {
    rotatingcube
  },

  data () {
    return {
      isStartOfDescriptionVisible: undefined
    }
  },

  mounted () {
    const cubeContinerElement = document.querySelector('#rotatingcube-container')
    const descriptionContinerElement = document.querySelector('#about-description-container')
    const descriptionElement = document.querySelector('#about-description')

    if (['xl', 'lg', 'md'].includes(this.$vuetify.breakpoint.name)) {
      descriptionElement.style.maxHeight = '60vh'

      cubeContinerElement.classList.add('wow', 'slideInUp')
      descriptionContinerElement.classList.add('wow', 'slideInRight')
    } else {
      descriptionElement.style.maxHeight = '40vh'

      cubeContinerElement.classList.add('wow', 'fadeIn')
      descriptionContinerElement.classList.add('wow', 'slideInUp')
    }

    this.isStartOfDescriptionVisible = true
  },

  methods: {
    descriptionScrolled (isVisible, entry) {
      this.isStartOfDescriptionVisible = isVisible
    },

    onScrollButtonClick () {
      const descriptionElement = document.querySelector('#about-description')

      if (this.isStartOfDescriptionVisible) {
        descriptionElement.scrollTop = descriptionElement.scrollHeight
      } else {
        descriptionElement.scrollTop = 0
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Crimson+Text&family=Roboto:wght@100;300;400&display=swap&Ubuntu+Mono:ital@1&display=swap');

#about-container {
  width: 100%;
  padding: 0;
}

#rotatingcube-container {
  padding: 0;
}

#about-description-container {
  text-align: center;
}

#about-description {
  background-color: '#191919';
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.0em;
  text-align: left;
  margin: auto;
}

.quote {
  font-family: 'Bad Script', cursive;
  font-size: 1.2em;
  text-align: right;
  line-height: 1.0;
}

.monospaced {
  font-family: 'Ubuntu Mono', monospace;
}
</style>
