<template>
  <div>
    <menubar title="Research Projects" />

    <v-container
      id="description-container"
      class="wow fadeInUp"
      align="center"
      justify="center"
    >
      <!-- Title -->
      <v-row>
        <v-col cols="12">
          <p>
            <span class="research-title-1">
              Software Defined Radio for Real-time Wireless Communication Systems
            </span>
            <br>
            <span class="research-subtitle">
              Funded by National Science Foundation
            </span>
          </p>
        </v-col>
      </v-row>

      <!-- Details -->
      <v-row>
        <v-col cols="12">
          <div class="research-description">
            <p>
              From the Internet of Things (IoT) used in a smart home to large-scale space shuttles, a
              secured and robust wireless communication system is one of the most basic requirements.
              Software Defined Radio (SDR) marks the transition between traditional hardware radios and
              digitally reprogrammable and robust wireless devices.
              In this platform, all the physical layer operations and some network layer operations of a network model
              are defined using software. With a high-speed processor, an antenna and a receiver being the only
              hardware peripherals of the system,  software defined radio provides the desired flexibility,
              configurability, and programmability in wireless communications by providing the functionality to change
              digital operations and modulation schemes on-the-fly.
            </p>
            <p>
              I worked under the supervision of
              <a
                href="http://engr.uconn.edu/~song/"
                target="_blank"
              >
                Dr. Song Han
              </a>
              and
              <a
                href="http://www.engr.uconn.edu/~shengli/"
                target="_blank"
              >
                Dr. Shengli Zhou
              </a>
              on using software defined radio to implement real-time wireless communication systems.
              During my research, I used GNURadio software framework to create SDR modules capable of
              real-time inter-computer message transmissions.
              Technologies used included C++ (Boost/SWIG) to create GNURadio signal-processing modules,
              Python to create the application layer of the network, and MATLAB / LabVIEW to test signal transmissions.
            </p>
          </div>

          <br>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MenubarComponent from '../shared/menubar.vue';

export default {
  components: {
    menubar: MenubarComponent,
  },
};
</script>

<style scoped>
#description-container {
  text-align: justify;
  text-justify: inter-word;
}

.research-title-1 {
  font-size: 1.6em;
}

.research-title-2 {
  font-size: 1.2em;
  font-weight: bold;
}

.research-subtitle {
  font-size: 1.2em;
  font-weight: lighter;
  font-style: italic;
}

.research-description {
  font-size: 1.1em;
}
</style>
