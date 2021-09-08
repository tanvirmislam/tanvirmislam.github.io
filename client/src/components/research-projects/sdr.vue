<template>
  <div>
    <menubar title="Research Project - Software Defined Radio" />

    <v-container
      id="description-container"
      align="center"
      justify="center"
    >
      <!-- Title -->
      <v-row id="title">
        <v-col cols="12">
          <p>
            <span class="header-1">
              Software Defined Radio for Real-time Wireless Communication Systems
            </span>
            <br>
            <span class="footnote-1">
              Funded by National Science Foundation | UTRC
            </span>
          </p>
        </v-col>
      </v-row>

      <!-- Details -->
      <v-row>
        <v-col cols="12">
          <div class="text justify-text">
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
                href="https://cps.cse.uconn.edu/"
                target="_blank"
              >
                Dr. Song Han
              </a>
              and
              <a
                href="https://www.ee.uconn.edu/shengli-zhou/"
                target="_blank"
              >
                Dr. Shengli Zhou
              </a>
              on using software defined radio to implement real-time wireless communication systems.
              The research work started as a summer
              <a
                href="https://cacc.uconn.edu/home/_services/reu/2018"
                target="_blank"
              >
                NSF REU program
              </a>
              , and continued to become my senior year design project in UConn.
              During my research, I primarily used GNURadio software framework to create SDR modules capable of
              real-time inter-computer message transmissions.
              Technologies used included C++ (Boost/SWIG) to create GNURadio signal-processing modules,
              Python to create the application layer of the network, and MATLAB / LabVIEW to test signal transmissions.
              I continued on with this project after the NSF funded summer research program, and used it as my
              undergraduate senior design project.
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="img">
            <v-img
              :src="getMediaObject('reu-team').src"
              aspect-ratio="1.5"
              max-width="600"
              @click="() => { showLightboxImage('reu-team'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('reu-team').caption }}
            </span>
          </div>
        </v-col>

        <v-col>
          <div class="img">
            <v-img
              :src="getMediaObject('senior-design-team').src"
              aspect-ratio="1.5"
              max-width="600"
              @click="() => { showLightboxImage('senior-design-team'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('senior-design-team').caption }}
            </span>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="header-2 mt-10 mb-4">
            Background
          </div>

          <div class="text justify-text">
            <p>
              The generic SDR hardware unit used in this project was the Universal Software Radio Peripheral (USRP)
              manufactured by National Instruments. The USRP functions using an FPGA, and consists of transmitter (Tx)
              and receiver (Rx) antennas that are used to send and receive signals. These hardware units also include
              several subsystems such as a clocks, ADCs, and DACs needed for data conversion.
            </p>
            <p>
              The implementation of the ad-hoc wireless communication system consisted of a PHY layer that uses
              Offset Quadrature Phase Shift Keying (O-QPSK) modulation/demodulation scheme, operating at 2.4 GHz
              frequency. On top of the PHY layer lies the MAC layer. The MAC Layer works with MAC Frames, a
              standardized sequence of bytes for structured data handling. Time-division Multiple Access (TDMA)
              method was implemented in the MAC layer. TDMA divides a time frame into slots, assigning a specific
              slot to a device. Device are only allowed to communicate during their specified slots in order to
              avoid packate collisions. Encryptions of the payloads were added in the MAC layer using
              AES CBC block cipher.
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="img">
            <v-img
              :src="getMediaObject('impl-overview').src"
              aspect-ratio="2.0"
              max-width="600"
              @click="() => { showLightboxImage('impl-overview'); }"
            />

            <span class="footnote-2">
              {{ getMediaObject('impl-overview').caption }}
            </span>
          </div>
        </v-col>

        <v-col>
          <div class="img">
            <v-img
              :src="getMediaObject('full-lab-setup').src"
              aspect-ratio="2.0"
              max-width="600"
              @click="() => { showLightboxImage('full-lab-setup'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('full-lab-setup').caption }}
            </span>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="header-2 mt-5 mb-4">
            Physical Layer
          </div>

          <div class="text justify-text">
            <p>
              The PHY layer of the system follows IEEE 802.15.4 standards in order to perform modulation - demodulation.
              GNURadio block arrangements to implement the standardized PHY layer operations was taken from
              <a
                href="https://www.wime-project.net/"
                target="_blank"
              >
                Wireless Measurement and Experimentation (WIME)
              </a>
              project's 802.15.4 (Zigbee) transceiver.
            </p>
            <p>
              The IEEE 802.15.4 physical layer works by adding additional header and paddings to the barebone signal.
              Each byte of the signal is then divided into symbols of 4 bits, and each symbol mapped to one out of the
              16 pseudo-random sequences defined in the standard, 32 chips each.
            </p>
            <p>
              The modulation format is O-QPSK with half-sine chip shaping.
              Each of the mapped chip is a half-sine pulse, transmitted alternately in two
              channels with a half-chip period offset, as seen in figure.
            </p>
          </div>

          <div class="img">
            <v-img
              :src="getMediaObject('phy-steps').src"
              aspect-ratio="11.0"
              max-width="600"
              @click="() => { showLightboxImage('phy-steps'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('phy-steps').caption }}
            </span>
          </div>

          <div class="text justify-text">
            <p>
              The modulation format is O-QPSK with half-sine chip shaping.
              Each of the mapped chip is half-sine pulse, transmitted alternately in two
              channels with a half-chip period offset, as seen in figure.
            </p>
          </div>

          <div class="img">
            <v-img
              :src="getMediaObject('phy-oqpsk').src"
              aspect-ratio="3.5"
              max-width="600"
              @click="() => { showLightboxImage('phy-oqpsk'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('phy-oqpsk').caption }}
            </span>
          </div>

          <div class="text justify-text">
            <p>
              Combining all of these steps together, the PHY transmitter implementation in GNURadio
              is as follows:
            </p>
          </div>

          <div class="img">
            <v-img
              :src="getMediaObject('phy-gnuradio-transmitter').src"
              aspect-ratio="2.5"
              max-width="600"
              @click="() => { showLightboxImage('phy-gnuradio-transmitter'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('phy-gnuradio-transmitter').caption }}
            </span>
          </div>

          <div class="text justify-text">
            <p>
              On the receiver side, the steps are followed in a reversed order to demodulate
              and retrieve the signal that was originally sent. An IIR (Infinite Impulse Response)
              filter is added after the demodulator, and GNURadio’s Clock Recovery MM (Muller and Müller)
              block was used to recover samples from signal with the same frequency and phase as those
              used by the transmitted. This is necessary, for instance, when extracting symbols from an
              asynchronous digital signal. It allows to synchronize the receiver with centers of
              ones and zeros present in the signal.
            </p>
          </div>

          <div class="img">
            <v-img
              :src="getMediaObject('phy-gnuradio-receiver').src"
              aspect-ratio="10.0"
              max-width="600"
              @click="() => { showLightboxImage('phy-gnuradio-receiver'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('phy-gnuradio-receiver').caption }}
            </span>
          </div>

          <div class="header-2 mt-5 mb-4">
            MAC Layer
          </div>

          <div class="text justify-text">
            <p>
              The MAC layer formatting of payloads follows the IEEE 802.15.4 standard for most part.
              When a payload arrives at the MAC layer, it is formatted with a header that consists of
              an FCF (Frame Control Format) number, a sequence number, and source/destination addresses.
              The payload is then padded with a CRC which is later on used to detect errors and corruptions
              in the packet in the receiver end.
            </p>
          </div>

          <div class="img">
            <v-img
              :src="getMediaObject('mac-packet-struct').src"
              aspect-ratio="7.5"
              max-width="600"
              @click="() => { showLightboxImage('mac-packet-struct'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('mac-packet-struct').caption }}
            </span>
          </div>

          <div class="text justify-text">
            <p>
              The IEEE 802.15.4 standard supports but does not require collision detection
              and avoidance between packets. In order to implement scheduled transmissions
              of packets throughout different senders, Time-Division Multiple Access (TDMA)
              protocol was used. TDMA is a channel access method that allows several devices
              to communicate on the same frequency without causing too much of an interference
              or collision of the packets in air. This increases the throughput of the network
              by coordinating all transmitters and allowing them to transmit seamlessly on the
              same frequency. TDMA achieves this by taking a selected period of time and dividing
              it into several slots. The collection of these slots is called a “superframe”.
            </p>
          </div>

          <div class="img">
            <v-img
              :src="getMediaObject('mac-superframe-struct').src"
              aspect-ratio="4.5"
              max-width="600"
              @click="() => { showLightboxImage('mac-superframe-struct'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('mac-superframe-struct').caption }}
            </span>
          </div>

          <div class="text justify-text">
            <p>
              The superframe format was designed to be 1.28 seconds long and was divided
              into 128 slots, each slot being 10 milliseconds long.
            </p>
            <p>
              A coordinator node in the network plays the role of maintaining a universal clock
              and assigning time-slots to the senders. The coordinator achieves it by broadcasting
              a beacon at the start of each of superframe in order to establish the synchronization
              between multiple senders. This universal time is maintained in the GNURadio beacon module
              with a POSIX thread that runs throughout the lifespan of the coordinator node.
            </p>
            <p>
              When a new sender module in the network receives this beacon message, it would have the
              next six time slots of the superframe to send a join request, essentially asking the coordinator
              to assign it a time-slot. This lets the coordinator know that a new transmitter wants to join the
              network and needs a slot, so at the seventh superframe slot, the coordinator will send that transmitter
              an association message. The message contains the slot number,
              starting from 8 and going all the way to 127, in which the sender is allowed to transmit its data.
            </p>
            <p>
              That sender now listens for the next beacon. Upon receiving a beacon at the beginning of a superframe,
              it makes note of the time the beacon was sent and calculates at what time it has to transmit
              its own message. When the slot arrives, the sender then can then transmit
              its data without worrying about collisions with other senders.
            </p>
          </div>

          <div class="text justify-text">
            <p>
              The functions of the <strong>coordinator</strong> for this system can be
              summarized with three distinct duties:
            </p>
            <ul>
              <li>Transmit a beacon at the beginning of each superframe</li>
              <li>Listen for join requests from new senders</li>
              <li>Appropriately send slot-associations to the senders</li>
            </ul>
          </div>

          <div class="img">
            <v-img
              :src="getMediaObject('mac-gnuradio-coordinator').src"
              aspect-ratio="2.6"
              max-width="600"
              @click="() => { showLightboxImage('mac-gnuradio-coordinator'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('mac-gnuradio-coordinator').caption }}
            </span>
          </div>

          <div class="text justify-text">
            <p>
              The <strong>sender</strong> for this system performs the
              following tasks
            </p>
            <ul>
              <li>Newly joined sender sends a join request upon receiving the beacon</li>
              <li>Listens for an association from the coordinator</li>
              <li>
                After getting an assigned time-slot, it can transmit messages to the
                receiver at the appropriate time
              </li>
            </ul>
          </div>

          <div class="img">
            <v-img
              :src="getMediaObject('mac-gnuradio-sender').src"
              aspect-ratio="2.7"
              max-width="600"
              @click="() => { showLightboxImage('mac-gnuradio-sender'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('mac-gnuradio-sender').caption }}
            </span>
          </div>

          <div class="text justify-text">
            <p>
              Lastly, the implementation of the <strong>receiver</strong> is fairly straightforward.
              It listens for messages coming into the USRP Rx, passes it to the physical layer for
              demodulation upon receiving, and analyzes the message in the MAC_Receiver block.
            </p>
          </div>

          <div class="img">
            <v-img
              :src="getMediaObject('mac-gnuradio-receiver').src"
              aspect-ratio="2.3"
              max-width="600"
              @click="() => { showLightboxImage('mac-gnuradio-receiver'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('mac-gnuradio-receiver').caption }}
            </span>
          </div>

          <div class="text justify-text">
            <p>
              Each of the MAC blocks also checks the destination and source of the received
              signal, and checks the FCF to confirm the type of the message. The MAC blocks
              also perform the CRC check on the received signals, and incorporates the code
              to encrypt the payloads of the sent messages and decrypt the payload of the
              received messages.
            </p>
          </div>

          <div class="header-2 mt-5 mb-4">
            Observations
          </div>

          <div class="text justify-text">
            <p>
              In order to test the distance vs. packet loss ratio (PLR) of the system,
              a python script was used to connect to GNURadio via sockets.
              The script transmitted 1000 messages via the transmitter,
              and on the receiver side the script maintained a count of
              how many messages were successfully received.
              The transmitter and receiver distance were then gradually increased
              to map out how the PLR gets affected based on the distance.
            </p>
          </div>

          <div class="img">
            <v-img
              :src="getMediaObject('distance-vs-packet-loss-ratio-plot').src"
              aspect-ratio="1.55"
              max-width="600"
              @click="() => { showLightboxImage('distance-vs-packet-loss-ratio-plot'); }"
            />

            <span class="footnote-2">
              {{ getMediaObject('distance-vs-packet-loss-ratio-plot').caption }}
            </span>
          </div>

          <div class="text justify-text">
            <p>
              From the data, it can be seen that up until 15 ft. of distance between the sender and receiver,
              the PLR remained fairly low, and from there on it kept on increasing exponentially.
              Note that no power amplifier was used in the test, which is one of the main reasons
              why the PLR was affected so much after a distance on 15 ft.
            </p>

            <p>
              The next test calculated PLR against the number of senders present in the network with two differen
              MAC protocols: a barebone IEEE 802.15.4 MAC with no particular scheduling scheme,
              and the TDMA MAC discussed above that incorporated a coordinator-sender synchronization to routinely
              send messages. For one sender and one receiver setting, the system with TDMA enabled performed about
              the same as the barebone IEEE 802.15.4 MAC. However, for two and three sender scenarios,
              the TDMA performed almost twice as much better, as they had half PLR compared the system with no
              scheduling schemes.
            </p>
          </div>

          <div class="img">
            <v-img
              :src="getMediaObject('tdma-packet-loss-ratio-plot').src"
              aspect-ratio="1.65"
              max-width="600"
              @click="() => { showLightboxImage('tdma-packet-loss-ratio-plot'); }"
            />

            <span class="footnote-2">
              {{ getMediaObject('tdma-packet-loss-ratio-plot').caption }}
            </span>
          </div>
        </v-col>
      </v-row>

      <lightbox
        ref="lightbox"
        :media="media"
        :show-light-box="false"
        :show-caption="false"
        disable-scroll
        show-thumbs
      />
    </v-container>
  </div>
</template>

<script>
import LightBoxComponent from 'vue-image-lightbox';
import MenubarComponent from '../shared/menubar.vue';

export default {
  components: {
    lightbox: LightBoxComponent,
    menubar: MenubarComponent,
  },

  data() {
    return {
      media: [
        {
          index: 0,
          name: 'reu-team',
          thumb: '/assets/research/sdr/reu-team.jpeg',
          src: '/assets/research/sdr/reu-team.jpeg',
          caption: 'UConn NSF REU Researchers, 2018',
        },
        {
          index: 1,
          name: 'senior-design-team',
          thumb: '/assets/research/sdr/senior-design-team.jpeg',
          src: '/assets/research/sdr/senior-design-team.jpeg',
          caption: 'UConn SDR Senior Design Team, 2019',
        },
        {
          index: 2,
          name: 'impl-overview',
          thumb: '/assets/research/sdr/impl-overview.png',
          src: '/assets/research/sdr/impl-overview.png',
          caption: 'Implementation overview',
        },
        {
          index: 3,
          name: 'full-lab-setup',
          thumb: '/assets/research/sdr/lab-setup.png',
          src: '/assets/research/sdr/lab-setup.png',
          caption: 'Experimentation setup',
        },
        {
          index: 4,
          name: 'phy-steps',
          thumb: '/assets/research/sdr/phy-steps.png',
          src: '/assets/research/sdr/phy-steps.png',
          caption: 'PHY layer modulation steps',
        },
        {
          index: 5,
          name: 'phy-oqpsk',
          thumb: '/assets/research/sdr/phy-oqpsk.png',
          src: '/assets/research/sdr/phy-oqpsk.png',
          caption: 'OQPSK modulation',
        },
        {
          index: 6,
          name: 'phy-gnuradio-transmitter',
          thumb: '/assets/research/sdr/phy-gnuradio-transmitter.png',
          src: '/assets/research/sdr/phy-gnuradio-transmitter.png',
          caption: 'GNURadio PHY layer transmitter arrangement',
        },
        {
          index: 7,
          name: 'phy-gnuradio-receiver',
          thumb: '/assets/research/sdr/phy-gnuradio-receiver.png',
          src: '/assets/research/sdr/phy-gnuradio-receiver.png',
          caption: 'GNURadio PHY layer receiver arrangement',
        },
        {
          index: 8,
          name: 'mac-packet-struct',
          thumb: '/assets/research/sdr/mac-packet-struct.png',
          src: '/assets/research/sdr/mac-packet-struct.png',
          caption: 'MAC packet header and padding structure',
        },
        {
          index: 9,
          name: 'mac-superframe-struct',
          thumb: '/assets/research/sdr/mac-superframe-struct.png',
          src: '/assets/research/sdr/mac-superframe-struct.png',
          caption: 'TDMA superframe structure',
        },
        {
          index: 10,
          name: 'mac-gnuradio-coordinator',
          thumb: '/assets/research/sdr/mac-gnuradio-coordinator.png',
          src: '/assets/research/sdr/mac-gnuradio-coordinator.png',
          caption: 'Coordinator in GNURadio using custom blocks',
        },
        {
          index: 11,
          name: 'mac-gnuradio-sender',
          thumb: '/assets/research/sdr/mac-gnuradio-sender.png',
          src: '/assets/research/sdr/mac-gnuradio-sender.png',
          caption: 'Sender in GNURadio using custom blocks',
        },
        {
          index: 12,
          name: 'mac-gnuradio-receiver',
          thumb: '/assets/research/sdr/mac-gnuradio-receiver.png',
          src: '/assets/research/sdr/mac-gnuradio-receiver.png',
          caption: 'Receiver in GNURadio using custom blocks',
        },
        {
          index: 13,
          name: 'distance-vs-packet-loss-ratio-plot',
          thumb: '/assets/research/sdr/distance-vs-packet-loss-ratio-plot.png',
          src: '/assets/research/sdr/distance-vs-packet-loss-ratio-plot.png',
          caption: 'Distance vs. packet loss ratio',
        },
        {
          index: 14,
          name: 'distance-vs-packet-loss-ratio-setup',
          thumb: '/assets/research/sdr/distance-vs-packet-loss-ratio-setup.png',
          src: '/assets/research/sdr/distance-vs-packet-loss-ratio-setup.png',
          caption: 'Experimentation setup',
        },
        {
          index: 15,
          name: 'tdma-packet-loss-ratio-plot',
          thumb: '/assets/research/sdr/tdma-packet-loss-ratio-plot.png',
          src: '/assets/research/sdr/tdma-packet-loss-ratio-plot.png',
          caption: 'TDMA active | inactive vs. packet loss ratio',
        },
        {
          index: 16,
          name: 'tdma-packet-loss-ratio-setup',
          thumb: '/assets/research/sdr/tdma-packet-loss-ratio-setup.png',
          src: '/assets/research/sdr/tdma-packet-loss-ratio-setup.png',
          caption: 'Experimentation setup',
        },
      ],
    };
  },

  methods: {
    getMediaObject(name) {
      return this.media.find(x => x.name === name);
    },

    showLightboxImage(name) {
      this.$refs.lightbox.showImage(this.getMediaObject(name).index);
    },
  },
};
</script>
