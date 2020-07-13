<template>
  <div>
    <v-card
      id="titlecard"
      class="pa-1"
      :width="cardWidth"
      color="rgb(54, 54, 54, 0.2)"
    >
      <!-- Titles -->
      <div
        class="wow fadeInUp"
        data-wow-duration="1.5s"
      >
        <v-card-title
          id="titlecard-header"
          class="justify-center py-8"
        >
          <span v-if="titleText === ''"> {{ textEditorSign }} </span>
          <span v-else> {{ titleText }}{{ textEditorSign }} </span>
        </v-card-title>
      </div>

      <!-- Name -->
      <div
        class="wow fadeIn"
        data-wow-delay="1s"
        data-wow-duration="1.5s"
      >
        <v-card-title
          id="titlecard-name"
          class="justify-center"
        >
          <v-avatar
            class="mr-3"
            size="40"
          >
            <img
              src="../../../public/img/avatar.jpg"
              alt="Tanvir"
            >
          </v-avatar>
          Tanvir Islam
        </v-card-title>
      </div>

      <!-- Explore actions button -->
      <v-card-actions
        id="explore"
        class="pt-0"
      >
        <v-spacer />
        <v-btn
          small
          depressed
          class="wow fadeIn red--text text--lighten-1"
          data-wow-duration="2s"
          @click="showExploreOptions = !showExploreOptions"
        >
          <span> Explore </span>
          <v-icon>{{ showExploreOptions ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <!-- Actions -->
      <v-expand-transition>
        <div
          v-show="showExploreOptions"
          class="px-2 px-sm-10 px-md-12"
        >
          <v-divider />

          <v-card-actions>
            <v-container id="explore-options-container">
              <v-row>
                <v-col>
                  <v-btn
                    small
                    depressed
                    class="action-button mr-2 mb-2"
                    @click="$vuetify.goTo(projectsAnchor, options)"
                  >
                    <span class="title-1 mr-2">
                      <font-awesome-icon :icon="['fas', 'project-diagram']" />
                    </span>
                    <span> Projects </span>
                  </v-btn>

                  <v-btn
                    small
                    depressed
                    class="action-button mr-2 mb-2"
                    @click="$vuetify.goTo(researchAnchor, options)"
                  >
                    <span class="title-1 mr-2">
                      <font-awesome-icon :icon="['fas', 'flask']" />
                    </span>
                    <span> Research </span>
                  </v-btn>

                  <v-btn
                    small
                    depressed
                    class="action-button mr-2 mb-2"
                    @click="showSnackbar()"
                  >
                    <span class="title-1 mr-2">
                      <font-awesome-icon :icon="['fas', 'brain']" />
                    </span>
                    <span> Education </span>
                  </v-btn>

                  <v-btn
                    small
                    depressed
                    class="action-button mr-2 mb-2"
                    @click="$vuetify.goTo(aboutAnchor, options)"
                  >
                    <span class="title-1 mr-2">
                      <font-awesome-icon :icon="['fas', 'user-astronaut']" />
                    </span>
                    <span> About Me </span>
                  </v-btn>

                  <v-btn
                    small
                    depressed
                    class="action-button mr-2 mb-2"
                    @click="showSnackbar()"
                  >
                    <span class="title-1 mr-2">
                      <font-awesome-icon :icon="['fas', 'envelope']" />
                    </span>
                    <span> Contact </span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions>
        </div>
      </v-expand-transition>
    </v-card>

    <snackbar
      :is-snackbar-visible="showUnderDevelopmentSnackbar"
      :timeout="snackbarTimeout"
    />
  </div>
</template>

<script>
import { debounce } from 'debounce';
import snackbar from '../shared/snackbar.underdevelopment.vue';

export default {
  components: {
    snackbar,
  },

  props: {
    cardWidth: {
      type: Number,
      default: 550,
    },
    autoAdjustPosition: {
      type: Boolean,
      default: true,
    },
    projectsAnchor: {
      type: String,
      required: true,
    },
    researchAnchor: {
      type: String,
      required: true,
    },
    aboutAnchor: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      titles: [
        'Develop',
        'Innovate',
        'Problem Solve',
        'Visualize',
        'Scale',
        'Secure',
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
        easing: 'easeInOutCubic',
      },

      showUnderDevelopmentSnackbar: false,
      snackbarTimeout: 1000,
    };
  },

  computed: {
    options() {
      return {
        duration: this.anchorScroll.duration,
        offset: this.anchorScroll.offset,
        easing: this.anchorScroll.easing,
      };
    },

    debouncedWindowResizeHandler() {
      return debounce(this.onWindowResize, 200);
    },
  },

  mounted() {
    if (this.autoAdjustPosition) {
      this.adjustCardPosition();
    }

    // Titlecard position
    window.addEventListener('resize', this.debouncedWindowResizeHandler);
    // Title animation
    setInterval(() => this.updateTitleAnimation(), 150);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.debouncedWindowResizeHandler);
  },

  methods: {
    sleep(duration) {
      return new Promise(resolve => {
        this.isSleeping = true;
        setTimeout(() => {
          this.isSleeping = false;
          resolve();
        }, duration);
      });
    },

    async updateTitleAnimation() {
      if (this.isSleeping) {
        return;
      }

      if (this.isTitleBeingWritten && this.titleText === this.titles[this.titleIndex]) {
        // Just completed writing the current title text
        this.isTitleBeingWritten = false;
        this.textEditorSign = '';
        await this.sleep(1500);
        this.textEditorSign = '|';
      } else if (!this.isTitleBeingWritten && this.titleText.length === 0) {
        // Start of writing a new title text
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
        this.isTitleBeingWritten = true;
        this.titleCharIndex = 0;
        await this.sleep(200);
      } else if (this.isTitleBeingWritten) {
        // In the middle of writing the current title text
        this.titleText += this.titles[this.titleIndex][this.titleCharIndex];
        this.titleCharIndex += 1;
      } else {
        // After completing a title text
        this.titleText = this.titleText.slice(0, -1);
        this.titleCharIndex -= Math.max(0, this.titleCharIndex - 1);
      }
    },

    onWindowResize() {
      if (!this.autoAdjustPosition) {
        return;
      }
      this.adjustCardPosition();
    },

    adjustCardPosition() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const titlecardElement = document.querySelector('#titlecard');
      const cardHeight = titlecardElement.offsetHeight;

      const leftSpace = windowWidth > this.cardWidth ? ((windowWidth * 0.5) - (this.cardWidth * 0.5)) : 0;
      const topSpace = windowHeight > cardHeight ? ((windowHeight * 0.4) - (cardHeight * 0.5)) : 0;

      titlecardElement.style.left = `${leftSpace}px`;
      titlecardElement.style.top = `${topSpace}px`;
    },

    showSnackbar() {
      this.showUnderDevelopmentSnackbar = true;
      setTimeout(() => { this.showUnderDevelopmentSnackbar = false; }, this.snackbarTimeout);
    },
  },
};
</script>

<style scoped>
#titlecard {
  color: #ffffff;
  position: absolute;
}

#titlecard-header {
  font-weight: 100;
  font-size: max(1.0em, min(4.0em, 12vw));
}

#titlecard-name {
  font-weight: 300;
  font-size: max(1.0em, min(1.5em, 6vw));
}

#explore-options-container {
  text-align: center;
}
</style>
