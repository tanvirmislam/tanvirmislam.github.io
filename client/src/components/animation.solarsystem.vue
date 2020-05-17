<template>
  <div id="solarsystem">
    <div class="star">
      <div id="sun" class="circle-filled" style="--radius: 50px; --top: 50%; --left: 50%; --color: yellow" @mouseover="onMouseOver(element)" />
    </div>

    <div id="mercury-orbit" class="orbit">
      <div id="mercury" class="planet" />
    </div>

    <div id="venus-orbit" class="orbit">
      <div id="venus" class="planet" />
    </div>

    <div id="earth-orbit" class="orbit">
      <div id="earth" class="planet" />
    </div>

    <div id="mars-orbit" class="orbit">
      <div id="mars" class="planet" />
    </div>

    <div id="jupiter-orbit" class="orbit">
      <div id="jupiter" class="planet" />
    </div>

    <div id="saturn-orbit" class="orbit">
      <div id="saturn" class="planet ringed-planet">
        <hr class="ring">
      </div>
    </div>

    <div id="uranus-orbit" class="orbit">
      <div id="uranus" class="planet" />
    </div>

    <div id="neptune-orbit" class="orbit">
      <div id="neptune" class="planet" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scale: Number,
    centerTop: String,
    centerLeft: String
  },

  data () {
    return {
      sun: {
        x: undefined,
        y: undefined,
        radius: undefined,
        initialRadius: 25,
        color: 'yellow',
        earthProportions: {
          radius: 109
        }
      },

      planets: {
        mercury: {
          color: 'rgb(159, 141, 212)',
          sunProportions: {
            radius: 0.0036101083
          },
          earthProportions: {
            radius: 0.38,
            orbitalRadius: 0.32,
            orbitalDuration: 0.2
          },
          factors: {
            radius: 38.0,
            orbitalRadius: 1.1,
            orbitalDuration: 1.0
          }
        },
        venus: {
          color: 'rgb(176, 82, 45)',
          sunProportions: {
            radius: 0.00884955752
          },
          earthProportions: {
            radius: 0.95,
            orbitalRadius: 0.7,
            orbitalDuration: 0.6
          },
          factors: {
            radius: 24.0,
            orbitalRadius: 0.65,
            orbitalDuration: 1.0
          }
        },
        earth: {
          color: 'rgb(45, 113, 199)',
          radius: 10,
          orbitalRadius: 100,
          orbitalDuration: 8,
          sunProportions: {
            radius: 0.00925925925
          },
          earthProportions: {
            radius: 1.0,
            orbitalRadius: 1.0,
            orbitalDuration: 1.0
          },
          factors: {
            radius: 25.0,
            orbitalRadius: 0.63,
            orbitalDuration: 1.0
          }
        },
        mars: {
          color: 'rgb(185, 110, 90)',
          sunProportions: {
            radius: 0.0048076923
          },
          earthProportions: {
            radius: 0.53,
            orbitalRadius: 1.5,
            orbitalDuration: 1.9
          },
          factors: {
            radius: 30.0,
            orbitalRadius: 0.57,
            orbitalDuration: 1.0
          }
        },
        jupiter: {
          color: 'rgb(210, 160, 105)',
          sunProportions: {
            radius: 0.1030927835
          },
          earthProportions: {
            radius: 11.19,
            orbitalRadius: 5.2,
            orbitalDuration: 11.9
          },
          factors: {
            radius: 5.0,
            orbitalRadius: 0.22,
            orbitalDuration: 0.5
          }
        },
        saturn: {
          color: 'rgb(232, 215, 134)',
          sunProportions: {
            radius: 0.08771929824
          },
          earthProportions: {
            radius: 9.40,
            orbitalRadius: 9.6,
            orbitalDuration: 29.5
          },
          factors: {
            radius: 5.0,
            orbitalRadius: 0.155,
            orbitalDuration: 0.4
          }
        },
        uranus: {
          color: 'rgb(160, 206, 212)',
          sunProportions: {
            radius: 0.03731343283
          },
          earthProportions: {
            radius: 4.04,
            orbitalRadius: 19.2,
            orbitalDuration: 84
          },
          factors: {
            radius: 9.0,
            orbitalRadius: 0.105,
            orbitalDuration: 0.3
          }
        },
        neptune: {
          color: 'rgb(45, 79, 160)',
          sunProportions: {
            radius: 0.03610108303
          },
          earthProportions: {
            radius: 3.88,
            orbitalRadius: 30.1,
            orbitalDuration: 164.8
          },
          factors: {
            radius: 8.0,
            orbitalRadius: 0.095,
            orbitalDuration: 0.3
          }
        }
      }
    }
  },

  mounted () {
    this.adjustSolarSystem()
    window.addEventListener('resize', this.adjustSolarSystem)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.adjustSolarSystem)
  },

  methods: {
    adjustSolarSystem () {
      this.adjustSun()

      const planetNames = Object.keys(this.planets)
      for (let i = 0; i < planetNames.length; ++i) {
        this.adjustPlanet(planetNames[i])
      }
    },

    adjustSun () {
      this.sun.radius = this.sun.initialRadius * this.scale

      const sunElement = document.querySelector('#sun')
      const sunDivLength = this.sun.radius * 2

      sunElement.style.left = this.centerLeft
      sunElement.style.top = this.centerTop

      sunElement.style.width = `${sunDivLength}px`
      sunElement.style.height = `${sunDivLength}px`

      sunElement.style.left -= this.sun.radius
      sunElement.style.top -= this.sun.radius

      sunElement.style.border = `solid ${this.sun.radius}px ${this.sun.color}`

      sunElement.style.borderRadius = `${sunDivLength}px/${sunDivLength}px`
      sunElement.style['-moz-border-radius'] = `${sunDivLength}px/${sunDivLength}px`
      sunElement.style['-webkit-border-radius'] = `${sunDivLength}px ${sunDivLength}px`

      this.sun.x = sunElement.offsetLeft
      this.sun.y = sunElement.offsetTop
    },

    adjustPlanet (name) {
      name = name.toLowerCase()

      const planetElement = document.querySelector(`#${name}`)
      const orbitElement = document.querySelector(`#${name}-orbit`)

      if (!planetElement || !orbitElement) {
        return
      }

      const radius = this.sun.radius * this.planets[name].sunProportions.radius * this.planets[name].factors.radius
      const orbitalRadius = this.planets.earth.orbitalRadius * this.planets[name].earthProportions.orbitalRadius * this.planets[name].factors.orbitalRadius * this.scale
      const orbitalDuration = this.planets.earth.orbitalDuration * this.planets[name].earthProportions.orbitalDuration * this.planets[name].factors.orbitalDuration

      const planetDivLength = radius * 2
      const orbitDivLength = orbitalRadius * 2

      // Set planet div size
      planetElement.style.width = `${planetDivLength}px`
      planetElement.style.height = `${planetDivLength}px`

      // Adjust margin so that the planet sits on top of the orbit border
      planetElement.style.margin = `-${radius}px ${orbitalRadius - radius}px`

      // Set color
      planetElement.style.background = this.planets[name].color

      // Set orbit div size
      orbitElement.style.width = `${orbitDivLength}px`
      orbitElement.style.height = `${orbitDivLength}px`

      // Orbit's circular border
      orbitElement.style.borderRadius = `${orbitDivLength}px/${orbitDivLength}px`
      orbitElement.style['-moz-border-radius'] = `${orbitDivLength}px/${orbitDivLength}px`
      orbitElement.style['-webkit-border-radius'] = `${orbitDivLength}px ${orbitDivLength}px`

      // Adjust orbit div to have the sun in its center
      orbitElement.style.left = `${this.sun.x - orbitalRadius + this.sun.radius}px`
      orbitElement.style.top = `${this.sun.y - orbitalRadius + this.sun.radius}px`

      // Set orbit duration
      orbitElement.style.animationDuration = `${orbitalDuration}s`
      orbitElement.style['-webkit-animation-duration'] = `${orbitalDuration}s`
      orbitElement.style['-moz-animation-duration'] = `${orbitalDuration}s`
    }
  }
}
</script>

<style>
#solarsystem {
  position: relative;
}

.circle-hollow {
  position: absolute;
  margin: auto;
  top: var(--top-offset);
  left: var(--left-offset);

  width: var(--radius);
  height: var(--radius);

  border: solid 2px var(--color);

  border-radius: var(--radius)/var(--radius);
  -moz-border-radius: var(--radius)/var(--radius);
  -webkit-border-radius: var(--radius) var(--radius);
}

.circle-filled {
  position: absolute;
  margin: auto;
  top: var(--top-offset);
  left: var(--left-offset);

  width: var(--radius);
  height: var(--radius);

  border: solid calc(var(--radius) * 0.5) var(--color);

  border-radius: var(--radius)/var(--radius);
  -moz-border-radius: var(--radius)/var(--radius);
  -webkit-border-radius: var(--radius) var(--radius);
}

.planet {
  position: absolute;
  margin: calc(0px - 10px) calc(150px - 10px);

  width: 50px;
  height: 50px;

  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;

  background: tomato;
}

.orbit {
  position: absolute;
  top: 50%;
  left: 50%;

  width: 200px;
  height: 200px;

  border: solid 1px rgb(255, 255, 255, 0.5);

  border-radius: 200px/200px;
  -moz-border-radius: 200px/200px;
  -webkit-border-radius: 200px 200px;

  animation-name: planetorbit;
  -webkit-animation-name: planetorbit;
  -moz-animation-name: planetorbit;

  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;

  animation-timing-function: linear;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;

  animation-duration: 5s;
  -webkit-animation-duration: 5s;
  -moz-animation-duration: 5s;
}

.ring {
  border: none;
  border-bottom: 2px solid rgb(192, 192, 192, 1.0);

  width: 140%;
  margin: auto;
  margin-top: 45%;
  margin-left: -20%;

  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;

  transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
}

#solarsystem:hover .planet {
  animation-name: planetpulse;
  -webkit-animation-name: planetpulse;
  -moz-animation-name: planetpulse;

  animation-direction: alternate;
  -webkit-animation-direction: alternate;
  -moz-animation-direction: alternate;

  animation-duration: 1.0s;
  -webkit-animation-duration: 1.0s;
  -moz-animation-duration: 1.0s;

  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
  -moz-animation-iteration-count: 1;

  animation-play-state: running;
  -webkit-animation-play-state: running;
  -moz-animation-play-state: running;
}

#solarsystem:hover #sun {
  animation-name: sunburn;
  -webkit-animation-name: sunburn;
  -moz-animation-name: sunburn;

  animation-direction: alternate;
  -webkit-animation-direction: alternate;
  -moz-animation-direction: alternate;

  animation-duration: 0.5s;
  -webkit-animation-duration: 0.5s;
  -moz-animation-duration: 0.5s;

  animation-iteration-count: 2;
  -webkit-animation-iteration-count: 2;
  -moz-animation-iteration-count: 2;

  animation-play-state: running;
  -webkit-animation-play-state: running;
  -moz-animation-play-state: running;
}

@keyframes planetorbit {
  from { -webkit-transform: rotate(0deg) }
  to { -webkit-transform: rotate(360deg) }
}

@-webkit-keyframes planetorbit {
  from { -webkit-transform: rotate(0deg) }
  to { -webkit-transform: rotate(360deg) }
}

@-moz-keyframes planetorbit {
  from { -moz-transform: rotate(0deg) }
  to { -moz-transform: rotate(360deg) }
}

@keyframes planetpulse {
   0% { transform: scale(1.0); }
   50% { transform: scale(1.5); }
   100% { transform: scale(1.0); }
}

@-webkit-keyframes planetpulse {
   0% { transform: scale(1.0); }
   50% { transform: scale(1.5); }
   100% { transform: scale(1.0); }
}

@-moz-keyframes planetpulse {
   0% { transform: scale(1.0); }
   50% { transform: scale(1.5); }
   100% { transform: scale(1.0); }
}

@keyframes sunburn {
  0% { border-color: yellow; }
  25% { border-color: tomato; }
  50% { border-color: red; }
  75% { border-color: tomato; }
  100% { border-color: yellow; }
}

@-webkit-keyframes sunburn {
  0% { border-color: yellow; }
  25% { border-color: tomato; }
  50% { border-color: red; }
  75% { border-color: tomato; }
  100% { border-color: yellow; }
}

@-moz-keyframes sunburn {
  0% { border-color: yellow; }
  25% { border-color: tomato; }
  50% { border-color: red; }
  75% { border-color: tomato; }
  100% { border-color: yellow; }
}
</style>
