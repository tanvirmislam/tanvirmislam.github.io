<template>
  <v-container
    id="contact-container"
    class="pa-0"
    fluid
    align="center"
    justify="center"
    style="height: 100%;"
  >
    <v-row
      align="center"
      justify="space-around"
      style="height: 100%;"
    >
      <!-- Show cube on top for mobile view -->
      <v-col
        v-if="showAnimation && $vuetify.breakpoint.smAndDown"
        id="small-rotatingcube-container"
        class="py-0"
        cols="12"
        md="4"
      >
        <div
          class="wow pulse"
          data-wow-delay="1.0s"
          data-wow-duration="2.5s"
        >
          <rotatingcube />
        </div>
      </v-col>

      <!-- Show cube on the left for larger screens -->
      <v-col
        v-if="showAnimation && $vuetify.breakpoint.mdAndUp"
        id="rotatingcube-container"
        class="mt-10 mb-2"
        cols="12"
        md="4"
      >
        <div
          class="wow pulse"
          data-wow-delay="1.0s"
          data-wow-duration="2.5s"
        >
          <rotatingcube />
        </div>
      </v-col>

      <!-- Contact card -->
      <v-col
        id="contact-card-container"
        cols="12"
        md="6"
        align="center"
        justify="center"
      >
        <v-card
          id="contact-card"
          class="wow fadeInUp overflow-y-auto"
          data-wow-duration="1.5s"
          align="center"
          justify="center"
          :style="`width: ${cardDimensions.width}; height: ${cardDimensions.height}`"
        >
          <div> Contact me </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import rotatingcube from '../shared/animations/animation.rotatingcube.vue';

export default {
  components: {
    rotatingcube,
  },

  props: {
    showAnimation: Boolean,
  },

  data() {
    return {
      researchProjects: {
        SoftwareDefinedRadio: {
          title: 'Software Defined Radio',
          // eslint-disable-next-line max-len
          description: 'Real-time ad-hoc wireless communication system built using GNURadio (C++), Python, and USRP SDR devices',
          url: '#',
        },
        SuperlatticeStructures: {
          title: 'Buffer Layers for Semiconductor Devices',
          // eslint-disable-next-line max-len
          description: 'Simulate and analyze different growth platforms for InGaAs/GaAs semiconductor devices, and quantify their performances as dislocation filters using MATLAB',
          url: '#',
        },
      },
    };
  },

  computed: {
    cardDimensions() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let width;
      let height;

      if (this.$vuetify.breakpoint.mdAndUp) {
        width = '550px';
        height = '450px';
      } else {
        width = `${Math.min(500, windowWidth)}px`;
        height = `${windowHeight * 0.6}px`;
      }

      return {
        width,
        height,
      };
    },
  },
};
</script>

<style scoped>
#rotatingcube-container {
  --cube-side: 180px;
}

#small-rotatingcube-container {
  --cube-side: 120px;
}

.research-project-title {
  font-size: min(2.0em, 6vw);
}

.research-project-description {
  font-weight: lighter;
  font-size: min(1.3em, 4.5vw);
}

.v-btn.v-size--default {
  font-size: min(0.8em, 3.5vw);
}
</style>
