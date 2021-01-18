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
      <v-row id="title">
        <v-col cols="12">
          <p>
            <span class="header-1">
              Simulation and Comparison of Buffer Layers for Metamorphic Semiconductors Devices
            </span>
            <br>
            <span class="footnote-1">
              University of Connecticut Department of Electrical and Computer Engineering
            </span>
          </p>
        </v-col>
      </v-row>

      <!-- Details -->
      <v-row>
        <v-col cols="12">
          <div class="text justify-text">
            <p>
              Metamorphic realization of mismatched semiconductor devices
              such as high electron mobility transistors (HEMTs), light-emitting diodes (LEDs),
              and multi-junction solar cells is of great interest due to the flexibility it affords in designing
              layer compositions and thicknesses. A drawback of metamorphic growth is the inherent incorporation
              of misfit dislocations and their associated threading defects,
              which can degrade device performance. It is possible to minimize these effects by using a suitable
              buffer layer grown between the device and its mismatched substrate, and the linearly-graded buffer
              has been the moststudied approach.
            </p>
            <p>
              I collaborated with
              <a
                href="https://www.ee.uconn.edu/john-e-ayers/"
                target="_blank"
              >
                Dr. John E. Ayers
              </a>
              to conduct research on buffer layers for metamorphic semiconductor devices.
              In my work, I simulated and analyzed novel growth platforms for InGaAs/GaAs semiconductor
              devices and researched their impacts on various aspects, such as, surface strain,
              threading dislocation density, lattice mismatch accomodations, etc.
              I used MATLAB to implement optimized algorithms to simulate chirped and unchirped superlattice
              structures and quantified their performances using theories from Numerical Energy Minimizatin Model,
              Electric Circuit Model for Strained Layer Epitaxy, and Matthews, Mader, and Light approach.
            </p>
            <p>
              Throughout our research we evaluated properties, such as, the average and surface strain as well as the
              surface in-plane lattice constant for four types of superlattices. Type I is compositionally chirped and
              type II is thickness chirped while types III and IV are unchirped superlattices
              with two different average compositions, as shown in the figure below.
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="img">
            <v-img
              :src="getMediaObject('superlattice-types').src"
              aspect-ratio="3.0"
              max-width="600"
              @click="() => { showLightboxImage('superlattice-types'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('superlattice-types').caption }}
            </span>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="8"
        >
          <div class="text justify-text">
            <p>
              From our study, we saw that variations of the top composition allows a wider variation
              of indium equivalent than variation of the total thickness. Superlattices of type I, III, or IV
              provide a wide variation of indium equivalent from approximately 2% to 45%, whereas type II superlattices
              provide a much narrower range of surface lattice constant.
            </p>
            <p>
              We also found that compositionally-chirped superlattices allow a wide range of surface in-plane
              lattice constant for the growth of devices while incorporating alternating local strains
              to enable dislocation filtering.
            </p>
            <p>
              Based on our findings, I authored a paper titled
              <a
                href="https://www.worldscientific.com/doi/abs/10.1142/S0129156418400098?journalCode=ijhses"
                target="_blank"
              >
                Chirped Superlattices as Adjustable Strain Platforms for Metamorphic Semiconductor Devices
              </a>
              , and carried out poster presentations at places such as, Massachusetts Institute of Technology (MIT),
              Connecticut Symposium on Microelectronics and Optoelectronics (CMOC), and
              Electrochemical Society (ECS).
            </p>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <div class="img pa-0 ma-0 mt-2">
            <v-img
              :src="getMediaObject('mit-presentation').src"
              aspect-ratio="1.0"
              max-width="600"
              @click="() => { showLightboxImage('mit-presentation'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('mit-presentation').caption }}
            </span>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="text justify-text">
            <p>
              During my last undergraduate year I continued the research work by analyzing
              the threading dislocation denisities (TDD) of the metamorphic structures using
              different calculation models, such as, Dodson &amp; Tsao/ Kujofsa &amp; Ayers (DTKA)
              and Matthews, Mader, and Light (MML). We evaluated that
              Type I (compositionally modulated) and Type II (thickness modulated)
              superlattice buffer layers exhibit very different TDD behavior, and
              Type II superlattices allow complete compensation of the dislocations if all defects are glissile.
            </p>
            <p>
              Based on our findings on threading dislocation densities, I authored another paper titled
              <a
                href="
                  https://www.worldscientific.com/doi/10.1142/S0129156418400281
                  ?utm_source=TrendMD&utm_medium=cpc&
                  utm_campaign=International_Journal_of_High_Speed_Electronics_and_Systems_TrendMD_0
                "
                target="_blank"
              >
                Threading Dislocations in Metamorphic Semiconductor Buffer Layers Containing Chirped Superlattices
              </a>
              , and conducted poster presentations at the 2019 Connecticut Symposium on Microelectronics and
              Optoelectronics (CMOC) where we won the best undergraduate poster presentation award.
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="img">
            <v-img
              :src="getMediaObject('cmoc-poster-2019').src"
              aspect-ratio="0.65"
              max-width="600"
              @click="() => { showLightboxImage('cmoc-poster-2019'); }"
            />
            <span class="footnote-2">
              {{ getMediaObject('cmoc-poster-2019').caption }}
            </span>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="text justify-text">
            <p>
              For a full list of publications done related to this research, please
              <a
                href="https://scholar.google.com/citations?hl=en&user=VLMVgH4AAAAJ"
                target="_blank"
              >
                visit my Google Scholar page
              </a>
              !
            </p>
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
          name: 'superlattice-types',
          thumb: '/assets/research/semiconductors/superlattice-types.jpg',
          src: '/assets/research/semiconductors/superlattice-types.jpg',
          caption: 'Four different types of superlattice structures simulated in the study',
        },
        {
          index: 1,
          name: 'mit-presentation',
          thumb: '/assets/research/semiconductors/mit-presentation.jpg',
          src: '/assets/research/semiconductors/mit-presentation.jpg',
          caption: 'Poster presentation at Massachusetts Institute of Technology (Xinkang Chen and Tanvir Islam)',
        },
        {
          index: 2,
          name: 'cmoc-poster-2019',
          thumb: '/assets/research/semiconductors/cmoc-poster-2019.png',
          src: '/assets/research/semiconductors/cmoc-poster-2019.png',
          caption: 'Poster presented at the 2019 Connecticut Symposium on Microelectronics and Optoelectronics (CMOC)',
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
