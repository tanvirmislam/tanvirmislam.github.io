<template>
  <v-container
    class="pa-0 mt-10"
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
          id="about-content"
          class="overflow-y-auto py-5 px-7"
          width="90vw"
        >
          <!-- Anchor: Start of description -->
          <span
            id="start-of-content"
            v-observe-visibility="onStartOfContentVisibilityChange"
          />

          <div class="quote pl-3 pl-md-12 mb-12">
            <p class="ma-0">
              " I would rather have questions that can't be answered than answers that can't be questioned. "
            </p>
            <p class="ma-0">
              - Richard Feynman
            </p>
          </div>

          <div :class="'text enlarged' + ($vuetify.breakpoint.mdAndUp ? ' justify-text' : '')">
            <p>
              Hello world, welcome to my homepage <span class="title ml-1"> 🎉 </span>
            </p>
            <p>
              I am a software engineer, currently working in the FinTech industry.
            </p>
            <p>
              Developing data-driven, intelligent, and interactive software is something I am deeply passionate about.
            </p>
            <p>
              My philosophy is that we are all given a limited time on earth,
              so we must try our best to make a positive contribution to the society,
              no matter how small that is, and leave this world a better place
              than how we originally found it.
            </p>
            <p>
              I love articulating real world phenomena and visualizing data and abstract concepts through code.
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
              Feel free to reach out with any questions or comments!
            </p>
          </div>
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
      isStartOfContentVisible: true,
    };
  },

  methods: {
    onStartOfContentVisibilityChange(isVisible) {
      this.isStartOfContentVisible = isVisible;
    },

    onScrollButtonClick() {
      const aboutElement = document.querySelector('#about-content');

      if (this.isStartOfContentVisible) {
        // Go to bottom
        aboutElement.scrollTop = aboutElement.scrollHeight;
      } else {
        // Go to top
        aboutElement.scrollTop = 0;
      }
    },
  },
};
</script>

<style scoped>
#about-content {
  height: 100%;
  margin: auto;
}
</style>
