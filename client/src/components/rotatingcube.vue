<template>
  <div id="cube-container" v-on:click="flip()">
    <div id="cube">
      <div id="side1"></div>
      <div id="side2"></div>
      <div id="side3"></div>
      <div id="side4"></div>
      <div id="side5"></div>
      <div id="side6"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cubeX: -50,
      cubeY: -38,
      cubeZ: 0
    }
  },

  mounted () {
    setInterval(() => this.rotateRight(), 1500)
  },

  methods: {
    applyRotations (degX, degY, degZ) {
      const segs = 'rotateX(' + degX % 360 + 'deg) rotateY(' + degY % 360 + 'deg) rotateZ(' + degZ % 360 + 'deg) translateX(0) translateY(0) translateZ(0)'
      document.querySelector('#cube').style.transform = segs
    },

    rotate (cubeAxis, degrees) {
      this[cubeAxis] = this[cubeAxis] + degrees
      this.applyRotations(this.cubeX, this.cubeY, this.cubeZ)
    },

    rotateRight () {
      this.rotate('cubeY', 90)
    },

    rotateLeft () {
      this.rotate('cubeY', -90)
    },

    flip () {
      this.rotate('cubeZ', -180)
    }
  }
}
</script>

<style>
#cube-container {
  width: 250px;
  height: 250px;
  margin: auto;
}

#cube {
  width: 150px;
  height: 150px;
  top: 50px;
  transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
  -moz-transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
  -webkit-transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
  margin: auto;
  position: relative;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  transform: '';
}

#cube > div {
  position: absolute;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  width: 150px;
  height: 150px;
  float: left;
  overflow: hidden;
  opacity: 0.08;
}

#side1 {
  transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(75px);
  -moz-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(75px);
  -webkit-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(75px);
  background-color: #9d9d9d;
}

#side2 {
  transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(75px);
  -moz-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(75px);
  -webkit-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(75px);
  background-color: #545454;
}

#side3 {
  transform: translateX(0px) translateY(0px) translateZ(75px);
  -moz-transform: translateX(0px) translateY(0px) translateZ(75px);
  -webkit-transform: translateX(0px) translateY(0px) translateZ(75px);
  background-color: #dfdada;
}

#side4 {
  transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(75px);
  -moz-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(75px);
  -webkit-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(75px);
  background-color: #545454;
}

#side5 {
  transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(75px);
  -moz-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(75px);
  -webkit-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(75px);
  background-color: #dfdada;
}

#side6 {
  transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(75px);
  -moz-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(75px);
  -webkit-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(75px);
  background-color: #9d9d9d;
}

#side1:hover {
  background-color: #592222;
  opacity: 0.5;
}

#side2:hover {
  background-color: #592222;
  opacity: 0.5;
}

#side3:hover {
  background-color: #592222;
  opacity: 0.5;
}

#side4:hover {
  background-color: #592222;
  opacity: 0.5;
}
#side5:hover {
  background-color: #592222;
  opacity: 0.5;
}
#side6:hover {
  background-color: #592222;
  opacity: 0.5;
}
</style>
