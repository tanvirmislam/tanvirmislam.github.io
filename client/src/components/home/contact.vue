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
          <div>
            <!-- Links -->
            <div
              align="end"
              class="mr-3 mt-1"
            >
              <!-- Link to Linked In -->
              <v-btn
                icon
                fab
                class="red--text text--lighten-1"
                href="https://www.linkedin.com/in/tanvirmislam/"
                target="_blank"
              >
                <v-icon class="display-1">
                  mdi-linkedin
                </v-icon>
              </v-btn>

              <!-- Link to email -->
              <v-btn
                icon
                fab
                class="red--text text--lighten-1"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tanvirmislam.cs@gmail.com"
                target="_blank"
              >
                <v-icon class="display-1">
                  mdi-gmail
                </v-icon>
              </v-btn>
            </div>

            <div
              class="contact-form mx-12 px-5"
              align="start"
            >
              <!-- Title -->
              <div class="contact-title">
                Contact Me
              </div>

              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                class="mt-5"
              >
                <v-text-field
                  v-model="name"
                  :counter="50"
                  :rules="nameRules"
                  label="Name"
                  required
                  autocomplete="new-password"
                />

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                />

                <v-text-field
                  v-model="subject"
                  :rules="subjectRules"
                  label="Subject"
                  required
                  autocomplete="new-password"
                />

                <v-textarea
                  v-model="body"
                  :rules="bodyRules"
                  label="Body"
                  auto-grow
                  autocomplete="new-password"
                />

                <div
                  align="end"
                  class="my-6"
                >
                  <v-btn
                    color="error"
                    class="mr-4"
                    @click="resetForm"
                  >
                    Clear
                  </v-btn>

                  <v-btn
                    color="success"
                    class="mr-4"
                    @click="sendEmail"
                  >
                    Send
                  </v-btn>
                </div>
              </v-form>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RotatingcubeComponent from '../shared/rotatingcube.vue';

export default {
  components: {
    rotatingcube: RotatingcubeComponent,
  },

  props: {
    showAnimation: Boolean,
  },

  data() {
    return {
      cardDimensions: {
        width: '0px',
        height: '0px',
      },

      valid: false,

      name: '',
      nameRules: [
        x => !!x || 'Name is required',
        x => (x && x.length <= 50) || 'Name must be less than 50 characters',
      ],

      email: '',
      emailRules: [
        x => !!x || 'E-mail is required',
        x => /.+@.+\..+/.test(x) || 'Invalid e-mail address',
      ],

      subject: '',
      subjectRules: [
        x => !!x || 'Subject is required',
        x => (x && x.length <= 100) || 'Subject must be less than 100 characters',
      ],

      body: '',
      bodyRules: [
        x => !!x || 'Body is required',
      ],
    };
  },

  created() {
    window.addEventListener('resize', this.setContactCardDimensions);
    this.setContactCardDimensions();
  },

  destroyed() {
    window.removeEventListener('resize', this.setContactCardDimensions);
  },

  methods: {
    setContactCardDimensions() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let width;

      if (this.$vuetify.breakpoint.mdAndUp) {
        width = '550px';
      } else {
        width = `${Math.min(500, windowWidth)}px`;
      }

      const height = `${Math.min(450, windowHeight * 0.6)}px`;

      this.cardDimensions.width = width;
      this.cardDimensions.height = height;
    },

    sendEmail() {
      this.valid = this.$refs.form.validate();

      if (this.valid) {
        // Proceed to send email
        this.body = `${this.body}`
          + '\n\n--------------------------------------------------------------------\n'
          + 'Sent from tanvirmislam.github.io\n'
          + `Sender Name: ${this.name}\nSender Email: ${this.email}\n`
          + '--------------------------------------------------------------------';

        window.open(`mailto:tanvirislam.cs@gmail.com?subject=${encodeURI(this.subject)}&body=${encodeURI(this.body)}`);
      }
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    },

    resetForm() {
      this.$refs.form.reset();
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

.contact-title {
  font-size: max(1.2em, min(1.5em, 6vw));
}

.contact-description {
  font-weight: lighter;
  font-size: max(1.0em, min(1.3em, 5vw));
}
</style>
