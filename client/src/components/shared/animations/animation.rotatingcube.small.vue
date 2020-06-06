<template>
  <div id="small-cube-container" v-on:click="onClick()">
    <div id="small-cube">
      <div id="small-side1"></div>
      <div id="small-side2"></div>
      <div id="small-side3"></div>
      <div id="small-side4"></div>
      <div id="small-side5"></div>
      <div id="small-side6"></div>
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
        if (document.querySelector('#small-cube-container')) {
          this.autoRotate()
        }
      }, 2000)
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
      document.querySelector('#small-cube').style.transform = movements
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
      const containerId = 'small-cube-container'
      const animationClass = 'small-cube-animate-pulse'
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

#small-cube-container {
  width: 250px;
  height: 250px;
  margin: auto;
}

#small-cube {
  width: 150px;
  height: 150px;
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

#small-cube > div {
  position: absolute;

  width: 150px;
  height: 150px;

  float: left;
  overflow: hidden;
  opacity: 0.08;

  transition: all 1.5s ease-in-out;
  -webkit-transition: all 1.5s ease-in-out;
  -moz-transition: all 1.5s ease-in-out;
}

#small-side1 {
  background-color: #9d9d9d;

  transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(75px);
  -moz-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(75px);
  -webkit-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(75px);
}

#small-side2 {
  background-color: #545454;

  transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(75px);
  -moz-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(75px);
  -webkit-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(75px);
}

#small-side3 {
  background-color: #dfdada;

  transform: translateX(0px) translateY(0px) translateZ(75px);
  -moz-transform: translateX(0px) translateY(0px) translateZ(75px);
  -webkit-transform: translateX(0px) translateY(0px) translateZ(75px);
}

#small-side4 {
  background-color: #545454;

  transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(75px);
  -moz-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(75px);
  -webkit-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(75px);
}

#small-side5 {
  background-color: #dfdada;

  transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(75px);
  -moz-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(75px);
  -webkit-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(75px);
}

#small-side6 {
  background-color: #9d9d9d;

  transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(75px);
  -moz-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(75px);
  -webkit-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(75px);
}

#small-side1:hover {
  background-color: #592222;
  opacity: 0.5;

  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
}

#small-side2:hover {
  background-color: #592222;
  opacity: 0.5;

  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
}

#small-side3:hover {
  background-color: #592222;
  opacity: 0.5;

  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
}

#small-side4:hover {
  background-color: #592222;
  opacity: 0.5;

  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
}

#small-side5:hover {
  background-color: #592222;
  opacity: 0.5;

  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
}

#small-side6:hover {
  background-color: #592222;
  opacity: 0.5;

  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
}

.small-cube-animate-pulse {
  animation-name: smallcubepulse;
  -webkit-animation-name: smallcubepulse;
  -moz-animation-name: smallcubepulse;

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

@keyframes smallcubepulse {
   0% { transform: scale(1); }
   50% { transform: scale(1.15); }
   100% { transform: scale(1); }
}

@-webkit-keyframes smallcubepulse {
   0% { transform: scale(1); }
   50% { transform: scale(1.15); }
   100% { transform: scale(1); }
}

@-moz-keyframes smallcubepulse {
   0% { transform: scale(1); }
   50% { transform: scale(1.15); }
   100% { transform: scale(1); }
}
</style>
