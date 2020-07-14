<template>
  <v-container
    class="pa-0 mt-10 wow fadeInUp"
    data-wow-duration="1.5s"
    fluid
    align="center"
    justify="center"
    style="height: 85%;"
  >
    <v-row
      align="center"
      justify="space-around"
      style="height: 95%;"
    >
      <v-col
        cols="12"
        style="height: 100%;"
      >
        <v-card
          id="about-description"
          class="overflow-y-auto py-5 px-7"
          width="90vw"
        >
          <!-- Anchor: Start of description -->
          <span
            id="start-of-description"
            v-observe-visibility="descriptionScrolled"
          />

          <div class="quote pl-3 pl-mb-12 mb-5">
            <p class="ma-0">
              " I would rather have questions that can't be answered than answers that can't be questioned. "
            </p>
            <p class="ma-0">
              - Richard Feynman
            </p>
          </div>

          <div class="description">
            <p>
              Hello world, Welcome to my homepage <span class="title ml-1"> 🎉 </span>
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
              building robust infrastructures, or using data for machine learning and deep learning
              to solve real-world problems.
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
        </v-card>
      </v-col>
    </v-row>

    <!-- Scroll button -->
    <v-row>
      <v-col
        class="ma-0 pa-0"
        align="center"
      >
        <v-btn
          small
          text
          depressed
          class="mt-1 title"
          @click.stop="onScrollButtonClick()"
        >
          <font-awesome-icon :icon="['fas', 'sort']" />
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isStartOfDescriptionVisible: undefined,
    };
  },

  mounted() {
    this.isStartOfDescriptionVisible = true;
  },

  methods: {
    descriptionScrolled(isVisible) {
      this.isStartOfDescriptionVisible = isVisible;
    },

    onScrollButtonClick() {
      const descriptionElement = document.querySelector('#about-description');

      if (this.isStartOfDescriptionVisible) {
        // Go to bottom
        descriptionElement.scrollTop = descriptionElement.scrollHeight;
      } else {
        // Go to top
        descriptionElement.scrollTop = 0;
      }
    },
  },
};
</script>

<style scoped>
#about-description {
  height: 100%;
  margin: auto;
}

.quote {
  /* font-family: 'Bad Script', cursive; */
  font-weight: lighter;
  font-size: 1.4em;
  text-align: right;
}

.description {
  font-size: 1.5em;
  line-height: 1.6em;
  text-align: left;
}
</style>
