<template>
  <div>
    <div id="wrapD3Cube">
      <div id="D3Cube" v-on:click="flipCube()">
        <div id="side1"></div>
        <div id="side2"></div>
        <div id="side3"></div>
        <div id="side4"></div>
        <div id="side5"></div>
        <div id="side6"></div>
      </div>
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
    setInterval(() => this.turnRight(), 1500)
  },

  methods: {
    rotCube (degX, degY, degZ) {
      const segs = 'rotateX(' + degX % 360 + 'deg) rotateY(' + degY % 360 + 'deg) rotateZ(' + degZ % 360 + 'deg) translateX(0) translateY(0) translateZ(0)'
      document.querySelector('#D3Cube').style.transform = segs
    },

    rotate (variableName, degrees) {
      this[variableName] = this[variableName] + degrees
      this.rotCube(this.cubeX, this.cubeY, this.cubeZ)
    },

    turnRight () {
      this.rotate('cubeY', 90)
    },

    turnLeft () {
      this.rotate('cubeY', -90)
    },

    flipCube () {
      this.rotate('cubeZ', -180)
    }
  }
}
</script>

<style>
#wrapD3Cube {
  width: 250px;
  height: 213px;
  margin: 20px auto;
}
#D3Cube {
  width: 112px;
  height: 112px;
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
#D3Cube > div {
  position: absolute;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  width: 112px;
  height: 112px;
  float: left;
  overflow: hidden;
  opacity: 0.08;
}
#side1 {
  transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(56px);
  -moz-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(56px);
  -webkit-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(56px);
  background-color: #9d9d9d;
}
#side2 {
  transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(56px);
  -moz-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(56px);
  -webkit-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(56px);
  background-color: #545454;
}
#side3 {
  transform: translateX(0px) translateY(0px) translateZ(56px);
  -moz-transform: translateX(0px) translateY(0px) translateZ(56px);
  -webkit-transform: translateX(0px) translateY(0px) translateZ(56px);
  background-color: #dfdada;
}
#side4 {
  transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(56px);
  -moz-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(56px);
  -webkit-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(56px);
  background-color: #545454;
}
#side5 {
  transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(56px);
  -moz-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(56px);
  -webkit-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(56px);
  background-color: #dfdada;
}
#side6 {
  transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(56px);
  -moz-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(56px);
  -webkit-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(56px);
  background-color: #9d9d9d;
}
</style>
