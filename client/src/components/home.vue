<template>
  <div>
    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="triangle"
        :particleSize="5"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="4"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
      >
    </vue-particles>

    <div class="intro">
      <p> Tanvir Islam </p>
      <p> Developer </p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style>
#particles-js{
  height: 100vh;
}

.intro {
  color: #ffffff;
  position: absolute;
  text-align: center;
  top: 40%;
  width: 100%;
}
</style>
