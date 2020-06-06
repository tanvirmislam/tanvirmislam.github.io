<template>
  <v-container
    id="about-container"
    class="mt-5 wow fadeInUp"
    data-wow-duration="1.5s"
  >
    <v-row
      id="about-description-row"
      align="center"
      justify="space-around"
    >
      <v-col
        id="about-description-col"
        cols="12"
      >
        <v-list
          id="about-description"
          class="overflow-y-auto pt-6 pb-3 px-5"
          max-width="90vw"
        >
          <!-- Anchor: Start of description -->
          <span id="start-of-description" v-observe-visibility="descriptionScrolled" />

          <div class="quote mb-10">
            <p class="quote-sentence">
              " I would rather have questions that can't be answered than answers that can't be questioned. "
            </p>
            <p class="quote-writer">
              - Richard Feynman
            </p>
          </div>

          <div class="description">
            <p>
              Hello world, Welcome to my homepage. <span style="font-size: 0.9em;"> ♥ </span>
            </p>
            <p>
              I am a software developer, currently working in the FinTech industry.
            </p>
            <p>
              Developing data-driven, intelligent, and interactive software is something I am deeply passionate about.
            </p>
            <p>
              I love to articulate real world phenomena and visualize data and abstract concepts through code.
              So a lot of the personal projects include some sort of data visualization.
              I am always looking for ways to expand my knowledge on things such as creating scalable software systems,
              building robust infrastructures, or using data for machine learning and deep learning so solve real-world problems.
            </p>
            <p>
              In my free time, I find solace in playing guitar, travelling, hiking,
              or reading about space and astronomy.
            </p>
            <p>
              Feel free to reach out with any questions or comments.
            </p>
          </div>

          <!-- Anchor: End of description -->
          <span id="end-of-description" />
        </v-list>
      </v-col>
    </v-row>

    <!-- Scroll button -->
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <v-btn small text depressed class="mt-1 title" @click.stop="onScrollButtonClick()">
          <font-awesome-icon :icon="['fas', 'sort']" />
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      isStartOfDescriptionVisible: undefined
    }
  },

  mounted () {
    this.isStartOfDescriptionVisible = true
  },

  methods: {
    descriptionScrolled (isVisible, entry) {
      this.isStartOfDescriptionVisible = isVisible
    },

    onScrollButtonClick () {
      const descriptionElement = document.querySelector('#about-description')

      if (this.isStartOfDescriptionVisible) {
        // Go to bottom
        descriptionElement.scrollTop = descriptionElement.scrollHeight
      } else {
        // Go to top
        descriptionElement.scrollTop = 0
      }
    }
  }
}
</script>

<style>
#about-container {
  width: 100%;
  height: 80%;
  padding: 0;
}

#about-description-row {
  height: 95%;
  text-align: center;
}

#about-description-col {
  height: 100%;
}

#about-description {
  height: 100%;
  max-height: 100%;
  background-color: '#191919';
  margin: auto;
}

.quote {
  font-family: 'Bad Script', cursive;
  /* font-family: 'Patrick Hand', cursive; */
  font-size: 1.5em;
  text-align: right;
}

.description {
  /* font-family: 'Crimson text', 'serif'; */
  /* font-family: 'Dosis', sans-serif; */
  font-size: 1.5em;
  line-height: 1.6em;
  text-align: left;
}

.monospaced {
  font-family: 'Ubuntu Mono', monospace;
}
</style>
