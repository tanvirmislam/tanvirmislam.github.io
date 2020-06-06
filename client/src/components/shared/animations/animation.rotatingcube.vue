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
      lastMovementType: undefined,
      autoRotationFunction: undefined
    }
  },

  mounted () {
    // Apply auto rotation of the cube
    this.$nextTick(() => {
      this.autoRotationFunction = setInterval(() => {
        if (document.querySelector('#cube-container')) {
          this.autoRotate()
        }
      }, 2500)
    })
  },

  beforeDestroy () {
    clearInterval(this.autoRotationFunction)
  },

  methods: {
    autoRotate () {
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
    },

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
      const containerId = 'cube-container'
      const animationClass = 'cube-animate-pulse'
      const animationTime = 500

      const cubeContainerElement = document.querySelector(`#${containerId}`)

      if (!cubeContainerElement.classList.contains(animationClass)) {
        cubeContainerElement.classList.add(animationClass)
        setTimeout(() => cubeContainerElement.classList.remove(animationClass), animationTime)
      }
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

  margin: auto;
  position: relative;

  transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;

  transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
  -moz-transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
  -webkit-transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);

  transition: all 1.5s ease-in-out;
  -webkit-transition: all 1.5s ease-in-out;
  -moz-transition: all 1.5s ease-in-out;
}

#cube > div {
  position: absolute;

  width: 180px;
  height: 180px;

  float: left;
  overflow: hidden;
  opacity: 0.08;

  transition: all 1.5s ease-in-out;
  -webkit-transition: all 1.5s ease-in-out;
  -moz-transition: all 1.5s ease-in-out;
}

#side1 {
  background-color: #9d9d9d;

  transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(90px);
  -moz-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(90px);
  -webkit-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(90px);
}

#side2 {
  background-color: #545454;

  transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(90px);
  -moz-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(90px);
  -webkit-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(90px);
}

#side3 {
  background-color: #dfdada;

  transform: translateX(0px) translateY(0px) translateZ(90px);
  -moz-transform: translateX(0px) translateY(0px) translateZ(90px);
  -webkit-transform: translateX(0px) translateY(0px) translateZ(90px);
}

#side4 {
  background-color: #545454;

  transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(90px);
  -moz-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(90px);
  -webkit-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(90px);
}

#side5 {
  background-color: #dfdada;

  transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(90px);
  -moz-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(90px);
  -webkit-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(90px);
}

#side6 {
  background-color: #9d9d9d;

  transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(90px);
  -moz-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(90px);
  -webkit-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(90px);
}

#side1:hover {
  background-color: #592222;
  opacity: 0.5;

  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
}

#side2:hover {
  background-color: #592222;
  opacity: 0.5;

  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
}

#side3:hover {
  background-color: #592222;
  opacity: 0.5;

  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
}

#side4:hover {
  background-color: #592222;
  opacity: 0.5;

  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
}

#side5:hover {
  background-color: #592222;
  opacity: 0.5;

  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
}

#side6:hover {
  background-color: #592222;
  opacity: 0.5;

  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
}

.cube-animate-pulse {
  animation-name: cubepulse;
  -webkit-animation-name: cubepulse;
  -moz-animation-name: cubepulse;

  animation-direction: alternate;
  -webkit-animation-direction: alternate;
  -moz-animation-direction: alternate;

  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -moz-animation-duration: 0.5s;

  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
  -moz-animation-iteration-count: 1;

  animation-play-state: running;
  -webkit-animation-play-state: running;
  -moz-animation-play-state: running;
}

@keyframes cubepulse {
   0% { transform: scale(1); }
   50% { transform: scale(1.15); }
   100% { transform: scale(1); }
}

@-webkit-keyframes cubepulse {
   0% { transform: scale(1); }
   50% { transform: scale(1.15); }
   100% { transform: scale(1); }
}

@-moz-keyframes cubepulse {
   0% { transform: scale(1); }
   50% { transform: scale(1.15); }
   100% { transform: scale(1); }
}
</style>
