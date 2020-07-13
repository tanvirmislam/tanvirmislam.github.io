<template>
  <div>
    <menubar title="Research Projects" />

    <v-container
      class="wow fadeInUp mt-5 px-5 px-sm-10 px-md-12"
      :fluid="true"
      align="center"
      justify="center"
      style="text-align: justify; text-justify: inter-word;"
    >
      <!-- Title -->
      <v-row>
        <v-col cols="12">
          <p>
            <span class="h1">
              Software Defined Radio for Real-time Wireless Communication Systems
            </span>
            <br>
            <span class="subtitle-1">
              Funded by National Science Foundation
            </span>
          </p>
        </v-col>
      </v-row>

      <!-- Details -->
      <v-row>
        <v-col cols="12">
          <p>
            From the Internet of Things (IoT) used in a smart home to large-scale space shuttles,
            secured and robust wireless communication system in one of the most rudimentary requirements.
            Software Defined Radio (SDR) marks the transition between traditional hardware radios and
            digitally reprogrammable and robust wireless devices.
            In this platform, all the physical layer operations and some network layer operations of a network model
            are defined using software. With a high-speed processor, an antenna and a receiver being the only hardware
            peripherals of the system,  software defined radio provides the desired flexibility, configurability,
            and programmability in wireless communications by providing the functionality to change digital operations
            and modulation schemes on-the-fly.
          </p>
          <p>
            I worked under the supervision of <a href="http://engr.uconn.edu/~song/">Dr. Song Han</a>
            and <a href="http://www.engr.uconn.edu/~shengli/">Dr. Shengli Zhou</a>
            on using software defined radio to implement real-time wireless communication systems.
            During my research, I explored GNURadio software framework for software defined radio platform
            and used the framework to implement an ad hoc wireless network capable of inter-computer message transfer.
            I used a lot of C++ (Boost/SWIG), and a little bit of Python
            to code the signal processing blocks in GNURadio. I also experimented with IEEE 802.15.4 ZigBee
            implementation in GNURadio to better understand wireless data transfer
            in the software defined radio platform.
          </p>

          <br>

          <p class="title-1">
            GNURadio
          </p>

          <p>
            Compared to the other software frameworks available for software defined radio such as MATLAB
            or LabVIEW Communications, GNURadio stands out by providing transparency, the ability to demystify
            functions of the signal processing blocks in the library with the help of open-source codes, and
            the ability to create custom signal processing blocks that can perform any desired functionality.
            For my project on creating ad-hoc network, I used GNURadio signal processing blocks for running
            the PHY layer, and a mac layer was written on top of it using Python for establishing socket
            connections and controlling/triggering message transmissions. GNURadio’s packet encoder block was
            used to packetize the data in the physical layer. Along with creating a wireless ad hoc network,
            the project helped us understand how GNURadio performs signal processing, digital data transmissions,
            and packet transmission.
          </p>
          <p>
            As GNURadio is open-source, the codes for all the signal processing blocks are available on Github.
            Upon inspecting the codes related to the Packet Encoder block, we found that the block wraps the data
            into a packet of a given payload length with a preamble, access code, a header, and a tail.
            The final payload in the packet contains a checksum, typically a CRC value, which is used for validation
            of the packet contents. An 8 bit tail is added at the end for synchronization purpos.
          </p>
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
