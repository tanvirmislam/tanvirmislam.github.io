<template>
  <div id="cube-container" v-on:click="onClick()">
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
      cubeZ: 0,
      lastMovementType: undefined
    }
  },

  mounted () {
    setInterval(() => {
      let movementType = Math.floor(Math.random() * (3 - 0) + 0)
      while (movementType === this.lastMovementType) {
        movementType = Math.floor(Math.random() * (3 - 0) + 0)
      }
      this.lastMovementType = movementType

      const movementAmount = Math.floor(Math.random() * (91 - 30) + 91)

      switch (movementType) {
        case 0:
          this.rotateRight(movementAmount)
          break
        case 1:
          this.rotateLeft(movementAmount)
          break
        case 2:
          this.flip(movementAmount)
          break
      }
    }, 2500)
  },

  methods: {
    applyRotations (degX, degY, degZ) {
      const movements = 'rotateX(' + degX % 180 + 'deg) rotateY(' + degY % 180 + 'deg) rotateZ(' + degZ % 180 + 'deg) translateX(0) translateY(0) translateZ(0)'
      document.querySelector('#cube').style.transform = movements
    },

    rotate (cubeAxis, degrees) {
      this[cubeAxis] = this[cubeAxis] + degrees
      this.applyRotations(this.cubeX, this.cubeY, this.cubeZ)
    },

    rotateRight (amount) {
      this.rotate('cubeY', amount)
    },

    rotateLeft (amount) {
      this.rotate('cubeY', -amount)
    },

    flip (amount) {
      this.rotate('cubeZ', -amount)
    },

    onClick () {
      document.querySelector('#cube-container').classList.add('click-animate-pulse')
      setTimeout(() => document.querySelector('#cube-container').classList.remove('click-animate-pulse'), 500)
    }
  }
}
</script>

<style>
/* CSS Credit: https://html-online.com/articles/css3-cube/ */

#cube-container {
  width: 250px;
  height: 250px;
  margin: auto;
}

#cube {
  width: 180px;
  height: 180px;
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
  -webkit-transition: all 1.5s ease-in-out;
  transition: all 1.5s ease-in-out;
  transform: '';
}

#cube > div {
  position: absolute;
  -webkit-transition: all 1.5s ease-in-out;
  transition: all 1.5s ease-in-out;
  width: 180px;
  height: 180px;
  float: left;
  overflow: hidden;
  opacity: 0.08;
}

#side1 {
  transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(90px);
  -moz-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(90px);
  -webkit-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(90px);
  background-color: #9d9d9d;
  /* background-image: url("../../public/img/avatar.jpg"); */
}

#side2 {
  transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(90px);
  -moz-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(90px);
  -webkit-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(90px);
  background-color: #545454;
}

#side3 {
  transform: translateX(0px) translateY(0px) translateZ(90px);
  -moz-transform: translateX(0px) translateY(0px) translateZ(90px);
  -webkit-transform: translateX(0px) translateY(0px) translateZ(90px);
  background-color: #dfdada;
}

#side4 {
  transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(90px);
  -moz-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(90px);
  -webkit-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(90px);
  background-color: #545454;
}

#side5 {
  transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(90px);
  -moz-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(90px);
  -webkit-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(90px);
  background-color: #dfdada;
}

#side6 {
  transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(90px);
  -moz-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(90px);
  -webkit-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(90px);
  background-color: #9d9d9d;
}

#side1:hover {
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
  background-color: #592222;
  opacity: 0.5;
}

#side2:hover {
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
  background-color: #592222;
  opacity: 0.5;
}

#side3:hover {
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
  background-color: #592222;
  opacity: 0.5;
}

#side4:hover {
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
  background-color: #592222;
  opacity: 0.5;
}
#side5:hover {
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease-out;
  background-color: #592222;
  opacity: 0.5;
}
#side6:hover {
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
  background-color: #592222;
  opacity: 0.5;
}

.click-animate-pulse {
  animation-name: pulse;
  animation-direction: alternate;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-play-state: running;
}

@keyframes pulse {
   0% { transform: scale(1); }
   50% { transform: scale(1.15); }
   100% { transform: scale(1); }
}
</style>
