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

          <div class="timeline">
            <div class="timeline__vertical">
              <div class="timeline__point timeline__point__top" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date timeline__date">
                  June 2024
                </div>
              </div>
              <div class="timeline__component timeline__component__endentry timeline__component__bg">
                <div class="timeline__title">
                  Software Engineer at
                  <span class="google-logo-text">
                    <span class="letter-1">G</span>
                    <span class="letter-2">o</span>
                    <span class="letter-3">o</span>
                    <span class="letter-4">g</span>
                    <span class="letter-5">l</span>
                    <span class="letter-6">e</span>
                  </span>
                  BigQuery, Sunnyvale, CA
                </div>
                <p class="timeline__paragraph">
                  Working on BigQuery's open-format data lakehouse capabilities.
                </p>
              </div>
            </div>

            <div class="timeline__vertical">
              <div class="timeline__point" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date timeline__date">
                  July 2021
                </div>
              </div>
              <div class="timeline__component timeline__component__endentry timeline__component__bg">
                <div class="timeline__title">
                  Software Engineer at
                  <span class="google-logo-text">
                    <span class="letter-1">G</span>
                    <span class="letter-2">o</span>
                    <span class="letter-3">o</span>
                    <span class="letter-4">g</span>
                    <span class="letter-5">l</span>
                    <span class="letter-6">e</span>
                  </span>
                  Compute Engine, Sunnyvale, CA
                </div>
                <p class="timeline__paragraph">
                  Worked on distributed services responsible for managing compute and ML workloads.
                </p>
              </div>
            </div>

            <div class="timeline__vertical">
              <div class="timeline__point" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date timeline__date">
                  June 2021
                </div>
              </div>
              <div class="timeline__component timeline__component__endentry timeline__component__bg">
                <div class="timeline__title">
                  Software Development Engineer at
                  <span class="amazon-logo-text">
                    Amazon
                  </span>
                  , New York, NY
                </div>
                <p class="timeline__paragraph">
                  In my brief time, I worked with the Ads team to create SOP for quickly onboarding new ads sources.
                  Left job to move to the Bay Area 🌉
                </p>
              </div>
            </div>

            <div class="timeline__vertical">
              <div class="timeline__point" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date timeline__date">
                  December 2019
                </div>
              </div>
              <div class="timeline__component timeline__component__endentry timeline__component__bg">
                <div class="timeline__title">
                  Paper published in IJHSES
                </div>
                <p class="timeline__paragraph">
                  Pending paper from my undergraduate research with Dr. John E. Ayers got published:
                  <a
                    href="https://doi.org/10.1142/S0129156419400172"
                    target="_blank"
                  >
                    Threading Dislocation Behavior
                    in InGaAs/GaAs (001) Superlattice Buffer Layers
                  </a>
                </p>
              </div>
            </div>

            <div class="timeline__vertical">
              <div class="timeline__point" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date timeline__date">
                  July 2019
                </div>
              </div>
              <div class="timeline__component timeline__component__bg">
                <div class="timeline__title">
                  Software Engineer at
                  <span class="factset-logo-text">
                    FactSet Research Systems
                  </span>
                  , Norwalk, CT
                </div>
                <p class="timeline__paragraph">
                  Worked on data intensive fintech applications across full stack,
                  from database and data pipeline design to developing web user interfaces.
                </p>
              </div>
              <div class="timeline__component timeline__component__endentry timeline__component__bg">
                <div class="timeline__title">
                  Publised paper in ECS
                </div>
                <p class="timeline__paragraph">
                  Published a paper in ECS on my undergraduate reserach with Dr. John E. Ayers:
                  <a
                    href="https://doi.org/10.1149/09206.0031ecst"
                    target="_blank"
                  >
                    A Modeling Study of Dislocation Behavior in
                    InGaAs/GaAs (001) and InAlGaAs/GaAs (001) Heterostructures Utilizing Strained-Layer Superlattice
                  </a>
                </p>
              </div>
            </div>

            <div class="timeline__vertical">
              <div class="timeline__point" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date timeline__date">
                  May 2019
                </div>
              </div>
              <div class="timeline__component timeline__component__endentry timeline__component__bg">
                <div class="timeline__title">
                  Graduation
                </div>
                <p class="timeline__paragraph">
                  Graduated from the
                  <span class="uconn-logo-text">
                    University of Connecticut
                  </span>
                  🎉
                </p>
              </div>
            </div>

            <div class="timeline__vertical">
              <div class="timeline__point" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date timeline__date">
                  December 2018
                </div>
              </div>
              <div class="timeline__component timeline__component__endentry timeline__component__bg">
                <div class="timeline__title">
                  Paper published in IJHSES
                </div>
                <p class="timeline__paragraph">
                  Published a paper in IJHSES on my reserach with Dr. John E. Ayers:
                  <a
                    href="https://doi.org/10.1142/S0129156418400281"
                    target="_blank"
                  >
                    Threading Dislocations in Metamorphic Semiconductor Buffer Layers Containing
                    Chirped Superlattices
                  </a>
                </p>
              </div>
            </div>

            <div class="timeline__vertical">
              <div class="timeline__point" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date timeline__date">
                  June 2018
                </div>
              </div>
              <div class="timeline__component timeline__component__endentry timeline__component__bg">
                <div class="timeline__title">
                  Paper published in IJHSES
                </div>
                <p class="timeline__paragraph">
                  Published my first academic paper in IJHSES based on my reserach with Dr. John E. Ayers:
                  <a
                    href="https://doi.org/10.1142/S0129156418400098"
                    target="_blank"
                  >
                    Chirped Superlattices as Adjustable Strain Platform for Metamorphic Semiconductor Devices
                  </a>
                </p>
              </div>
            </div>

            <div class="timeline__vertical">
              <div class="timeline__point" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date timeline__date">
                  May 2018
                </div>
              </div>
              <div class="timeline__component timeline__component__endentry timeline__component__bg">
                <div class="timeline__title">
                  NSF funded Summer Researcher at
                  <span class="uconn-logo-text">
                    University of Connecticut
                  </span>
                  dept. of CSE
                </div>
                <p class="timeline__paragraph">
                  Worked as a NSF REU funded researcher with Dr. Shengli Zhou and Dr. Song Han to develop
                  real-time wireless communication systems using software-defined radio.
                </p>
              </div>
            </div>

            <div class="timeline__vertical">
              <div class="timeline__point" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date timeline__date">
                  September 2017
                </div>
              </div>
              <div class="timeline__component timeline__component__endentry timeline__component__bg">
                <div class="timeline__title">
                  Technical Support Specialist at the
                  <span class="uconn-logo-text">
                    University of Connecticut
                  </span>
                  SFA IT
                </div>
                <p class="timeline__paragraph">
                  Worked part-time as a technical support specialist at the School of Fine Arts IT dept.
                  until graduation. Designed and maintained websited for UConn SFA and Benton Museum.
                  Provided technical support to faculty, classrooms, and museum exhibitions.
                </p>
              </div>
            </div>

            <div class="timeline__vertical">
              <div class="timeline__point" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date timeline__date">
                  September 2016
                </div>
              </div>
              <div class="timeline__component timeline__component__endentry timeline__component__bg">
                <div class="timeline__title">
                  Undergraduate Research Assistant at the
                  <span class="uconn-logo-text">
                    University of Connecticut
                  </span>
                  dept. of ECE
                </div>
                <p class="timeline__paragraph">
                  Started working with Dr. John E. Ayers on novel growth platform for InGaAs/GaAs metamorphic
                  semiconductor devices, focusing simulating and researching buffer layers as dislocation filters.
                </p>
              </div>
            </div>

            <div class="timeline__vertical">
              <div class="timeline__point" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date timeline__date">
                  May 2015
                </div>
              </div>
              <div class="timeline__component timeline__component__endentry timeline__component__bg">
                <div class="timeline__title">
                  Tutor at the Sylvan Learning Center, West Hartford, CT
                </div>
                <p class="timeline__paragraph">
                  Tutored at the Sylvan learning center till the end of the year.
                  Taught math, physics, and chemistry to high school students.
                </p>
              </div>
            </div>

            <div class="timeline__vertical">
              <div class="timeline__point" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date timeline__date">
                  February 2015
                </div>
              </div>
              <div class="timeline__component timeline__component__endentry timeline__component__bg">
                <div class="timeline__title">
                  Tutor at the Quantitative Learning Center,
                  <span class="uconn-logo-text">
                    University of Connecticut
                  </span>
                  , West Hartford, CT
                </div>
                <p class="timeline__paragraph">
                  Tutored at the Q-Center for the spring semester.
                  Taught students programming, MATLAB, calculus, physics, and general chemistry.
                </p>
              </div>
            </div>

            <div class="timeline__vertical">
              <div class="timeline__point" />
              <div class="timeline__point timeline__point__bottom" />
            </div>
            <div>
              <div class="timeline__component timeline__component__date">
                <div class="timeline__date">
                  August 2014
                </div>
              </div>
              <div class="timeline__component timeline__component__bottommostentry timeline__component__bg">
                <div class="timeline__title">
                  Started College
                </div>
                <p class="timeline__paragraph">
                  Started undergraduate at the
                  <span class="uconn-logo-text">
                    University of Connecticut
                  </span>
                </p>
              </div>
            </div>
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

#about-content a {
  color: rgb(184, 190, 231);
  text-decoration: none;
}

.timeline {
  margin: 0 auto;
  max-width: 950px;
  padding: 20px;
  display: grid;
  grid-template-columns: 2px 1fr;
}

.timeline__component__bg {
  padding: 1.5em;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}

.timeline__component {
  margin: 0px 20px 10px 20px;
}

.timeline__component__date {
  margin-bottom: 10px;
}

.timeline__component__endentry {
  margin-bottom: 60px;
}

.timeline__component__bottommostentry {
  margin-bottom: 0;
}

.timeline__vertical {
  position: relative;
  background: rgba(255, 255, 255, 0.85);
}

.timeline__point {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 1.0);
}

.timeline__point__top {
  top: 0;
  bottom: initial;
}

.timeline__point__bottom {
  top: initial;
  bottom: 0;
}

.timeline__date {
  font-size: max(1.0em, min(1.3em, 5vw));
}

.timeline__title {
  margin: 0;
  font-size: max(1.0em, min(1.3em, 5vw));
}

.timeline__paragraph {
  font-weight: lighter;
  font-size: max(1.0em, min(1.0em, 5vw));
  margin-bottom: 0px;
}

.google-logo-text {
  font-weight: normal;
}
.google-logo-text .letter-1 {
  color: #4285F4;
}
.google-logo-text .letter-2 {
  color: #DB4437;
}
.google-logo-text .letter-3 {
  color: #F4B400;
}
.google-logo-text .letter-4 {
  color: #4285F4;
}
.google-logo-text .letter-5 {
  color: #0F9D58;
}
.google-logo-text .letter-6 {
  color: #DB4437;
}

.amazon-logo-text {
  font-weight: normal;
  color: #ff8c27;
}

.factset-logo-text {
  font-weight: normal;
  color: #00a5e8;
}

.uconn-logo-text {
  font-weight: normal;
  color: #516bbe;
}
</style>
