<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title class="ml-1">
        Education
      </v-toolbar-title>

      <template #extension>
        <v-tabs
          v-model="tab"
          align-with-title
          color="white"
        >
          <v-tabs-slider color="white" />

          <v-tab
            v-for="item in items"
            :key="item"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-card-text>
      <div class="body-1 px-5 py-10">
        <div v-if="tab == 0">
          <p>
            <span class="institution">University of Connecticut</span>
            <br>
            <span class="degree">Bachelor of Science in Engineering</span>, May 2019
            <br>
            <span class="major">
              Major 1: Computer Science and Engineering
              <br>
              Major 2: Electrical Engineering
              <br>
              CGPA: 3.66 / 4.00
            </span>
          </p>
        </div>

        <div v-else>
          <v-container
            fluid
            class="pa-0"
          >
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <p>
                  <span class="semester">Fall 2014</span>
                  <br>
                  <ul class="mt-2">
                    <li>Intro to Computing for Engineers</li>
                    <li>Orientation to Engineering</li>
                    <li>General Chemistry</li>
                    <li>Intro to Academic Writing</li>
                    <li>Philosophy and Social Ethics</li>
                  </ul>
                </p>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <p>
                  <span class="semester">Spring 2015</span>
                  <br>
                  <ul class="mt-2">
                    <li>Object Oriented Design and Programming</li>
                    <li>Calculus II</li>
                    <li>Physics for Engineers I</li>
                    <li>Seminar in Academic Writing</li>
                  </ul>
                </p>
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <p>
                  <span class="semester">Fall 2015</span>
                  <br>
                  <ul class="mt-2">
                    <li>Data Structures and Introductory Algorithms</li>
                    <li>Electrical Circuits</li>
                    <li>Multivariable Calculus</li>
                    <li>Elementary Differential Equations</li>
                    <li>Physics for Engineers II</li>
                  </ul>
                </p>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <p>
                  <span class="semester">Sprint 2016</span>
                  <br>
                  <ul class="mt-2">
                    <li>C++ Programming</li>
                    <li>Introduction to Discrete Systems</li>
                    <li>Digital Logic Design</li>
                    <li>Electronic Circuit Design and Analysis</li>
                    <li>Signals and Systems</li>
                    <li>Applied Linear Algebra</li>
                  </ul>
                </p>
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <p>
                  <span class="semester">Fall 2016</span>
                  <br>
                  <ul class="mt-2">
                    <li>Algorithms and Complexity</li>
                    <li>Intro to Software Engineering</li>
                    <li>Intro to Computer Architecture</li>
                    <li>Systems Analysis</li>
                    <li>Probablity</li>
                  </ul>
                </p>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <p>
                  <span class="semester">Spring 2017</span>
                  <br>
                  <ul class="mt-2">
                    <li>Probabilistic Performance Analysis of Computer Systems</li>
                    <li>Contemporary Issues in CSE</li>
                    <li>Digital Systems Design</li>
                    <li>Power Electronics</li>
                    <li>Communication Systems</li>
                    <li>Electromagnetic Fields and Waves</li>
                  </ul>
                </p>
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <p>
                  <span class="semester">Fall 2017</span>
                  <br>
                  <ul class="mt-2">
                    <li>Systems Programming</li>
                    <li>Computer Organization and Architecture</li>
                    <li>Theory of Computation</li>
                    <li>Digital Integrated Circuits</li>
                    <li>Principles of Microeconomics</li>
                  </ul>
                </p>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <p>
                  <span class="semester">Spring 2018</span>
                  <br>
                  <ul class="mt-2">
                    <li>Operating Systems</li>
                    <li>Independant Study in CSE: Software Defined Radio</li>
                    <li>Microprocessor Applications Lab</li>
                    <li>Semiconductor Devices and Nanostructures</li>
                    <li>Independant Study in ECE: Academic Writing</li>
                    <li>Language and Mind</li>
                  </ul>
                </p>
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <p>
                  <span class="semester">Fall 2018</span>
                  <br>
                  <ul class="mt-2">
                    <li>Programming Language Translations</li>
                    <li>Principles of Databases</li>
                    <li>Digital Communication</li>
                    <li>Intro to Cultural Anthropology</li>
                    <li>Traditional Chinese Culture</li>
                    <li>Senior Design I</li>
                  </ul>
                </p>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <p>
                  <span class="semester">Spring 2019</span>
                  <br>
                  <ul class="mt-2">
                    <li>Big Data</li>
                    <li>Computer Security</li>
                    <li>VLSI Design and Simulation</li>
                    <li>Robotics</li>
                    <li>Modern Chinese Culture</li>
                    <li>Senior Design II</li>
                  </ul>
                </p>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </v-card-text>

    <v-card-actions class="justify-end">
      <v-btn
        text
        class="red--text text--lighten-1"
        @click="$emit('closedialog')"
      >
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        'Degree',
        'Classes',
      ],
      text: 'Lorem ipsum',
    };
  },
};
</script>

<style>
.institution {
  font-size: 1.1em;
  font-weight: 600;
  /* color: #a30d35; */
}

.degree {
  font-style: italic;
}

.semester {
  font-size: 1.1em;
  font-weight: 600;
  /*color: #a30d35;*/
}

.courses {
  font-size: 1.3em;
  font-weight: 600;
  text-align: center;
}
</style>
