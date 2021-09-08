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
              Hello world, thanks for visiting my homepage <span class="title ml-1"> 🎉 </span>
            </p>
            <p>
              I'm a software engineer currently working at
              <a
                href="https://about.google/intl/en_us/"
                target="_blank"
                style="text-decoration: none"
              >
                <span class="google-logo-text">
                  <span id="letter-1">G</span>
                  <span id="letter-2">o</span>
                  <span id="letter-3">o</span>
                  <span id="letter-4">g</span>
                  <span id="letter-5">l</span>
                  <span id="letter-6">e</span>
                </span>
              </a>.
            </p>
            <p>
              Developing data-driven, intelligent, interactive, and accessible software
              is something I am deeply passionate about.
            </p>
            <p>
              My philosophy is that we are all here on earth for a very limited amount of time,
              so we must try our best to make a positive contribution to the society,
              no matter how small that is, and leave this world a better place
              than how we found it.
            </p>
            <p>
              I grew up in Sylhet, Bangladesh 🇧🇩 where I first developed my love for science and mathematics.
              Later on I immigrated to the United States and finished my undergraduate from the
              <a
                href="https://uconn.edu/"
                target="_blank"
                style="text-decoration: none"
              >
                <span id="uconn-logo-text">
                  University of Connecticut
                </span>
              </a>
              with a double major in Computer Science and Electrical Engineering.
              I began my professional career at
              <a
                href="https://www.factset.com/"
                target="_blank"
                style="text-decoration: none"
              >
                <span id="factset-logo-text">
                  FactSet
                </span>
              </a>
              after my graduation
              where I got to work on developing and optimizing their financial data content platform.
              After a couple of years, I moved on to join
              <a
                href="https://advertising.amazon.com/"
                target="_blank"
                style="text-decoration: none"
              >
                <span id="amazon-logo-text">
                  Amazon
                </span>
              </a>
              where I was a part of their awesome Ads Exchange team, but soon after that I found my place at
              <span class="google-logo-text">
                <span id="letter-1">G</span>
                <span id="letter-2">o</span>
                <span id="letter-3">o</span>
                <span id="letter-4">g</span>
                <span id="letter-5">l</span>
                <span id="letter-6">e</span>
              </span>
              where I now work as a back-end engineer to build planet-scale systems.
            </p>
            <p>
              I love articulating real world phenomena and visualizing data and abstract concepts through code.
              So a lot of the personal projects include some sort of data visualization.
              I'm always looking for ways to expand my knowledge on things such as creating scalable software systems,
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

.google-logo-text {
  font-weight: bolder;
}
.google-logo-text #letter-1 {
  color: #4285F4;
}
.google-logo-text #letter-2 {
  color: #DB4437;
}
.google-logo-text #letter-3 {
  color: #F4B400;
}
.google-logo-text #letter-4 {
  color: #4285F4;
}
.google-logo-text #letter-5 {
  color: #0F9D58;
}
.google-logo-text #letter-6 {
  color: #DB4437;
}

#uconn-logo-text {
  font-weight: bolder;
  color: #516bbe;
}

#factset-logo-text {
  font-weight: bolder;
  color: #00a5e8;
}

#amazon-logo-text {
  font-weight: bolder;
  color: #ff8c27;
}
</style>
