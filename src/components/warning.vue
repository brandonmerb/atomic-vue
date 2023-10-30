<template>
  <div class="container dynamic-space">
    <div class="bg-layer layer-1"></div>
    <div class="bg-layer layer-2"></div>
    <div class="bg-layer layer-3">
      <div class="bg-layer layer-3-1"></div>
    </div>
    <div class="bg-layer layer-4"></div>
    <div class="stars" :style="{ 'box-shadow': shadow }"></div>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap" rel="stylesheet">
    <div class="card-wrapper">
      <div class="card primary-card">
        <div class="card-title">
          <h2>Atomic Vue</h2>
        </div>
        <div class="card-text heading-text">
          If you're seeing this message, that means you haven't installed any
          modules that contain a master template. Here are some useful links to get started!
        </div>
        <div class="card-footer grid">
          <a href="#nowhere" class="card dynamic-space card-1">
            <div class="card-title">
              🚀 Quick Start
            </div>
          </a>
          <a href="#nowhere" class="card dynamic-space card-2">
            <div class="card-title">
              🌌 Singularity Docs
            </div>
          </a>
          <a href="#nowhere" class="card dynamic-space card-3">
            <div class="card-title">
              🔨 Tools
            </div>
          </a>
          <a href="#nowhere" class="card dynamic-space card-4">
            <div class="card-title">
              🔍 Examples
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';

const shadow = ref("");

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function generateStars() {
  let shadowString = ""
  let i = 0;
  let max = 500;
  while (i < max) {
    const toUse = `${getRandomArbitrary(-50, 50)}vw ${getRandomArbitrary(-50, 50)}vh 2px 1px #FFF`;
    if (i == max - 1) {
      shadowString = shadowString + toUse + "";
    } else {
      shadowString = shadowString + toUse + ", ";
    }
    i++;
  }
  shadow.value = shadowString;
}

onBeforeMount(() => {
  generateStars();
});
</script>
<style scoped>
html,
body,
.container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0px;
  font-family: 'Roboto', sans-serif;
  background: -webkit-linear-gradient(315deg, #000 25%, #030e48);
}

.bg-layer {
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: block;
  z-index: 1;
  opacity: 1
}

.layer-1 {
  background: linear-gradient(315deg, #300835 25%, #030e48);
  z-index: 2;
  opacity: .1;
}

.layer-2 {
  background: radial-gradient(circle, #000 10%, #647eff, #300835);
  background-repeat: no-repeat;
  background-position: 300px;
  width: calc(100vw + 600px);
  z-index: 3;
  opacity: .2;
}

/* .layer-3 {
  background: linear-gradient(to right, #5c1e2c, #300835);
  width: 130vw;
  background-size: 100% 25%;
  background-position: center;
  background-repeat: no-repeat;
  transform: rotate(10deg);
  opacity: .8;
  z-index: 4;
  
} */
.layer-3-1 {
  /* background: linear-gradient(to bottom, rgba(92, 30, 44, 1) 20%, rgba(0, 0, 0, 1) 75%, rgba(92, 30, 44, 1) 100%), radial-gradient(circle, #000, #647eff, #300835); */
  z-index: 5;
  width: 130vw;
  height: 140vh;
  top: -20%;
  left: -10%;
  /* background: linear-gradient(to bottom, rgba(92, 30, 44, 1) 20%, rgba(0, 0, 0, 1) 75%, rgba(92, 30, 44, 1) 100%); */
  transform: rotate(10deg);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 37.5%, rgba(92, 30, 44, .7) 62.5%, rgba(0, 0, 0, 1) 100%);
  background-position: center;
  background-repeat: no-repeat;
  opacity: .8;
}

.layer-4 {}

.stars {
  z-index: 5;
  box-shadow: 1px 5px 2px 1px #FFF, -10px 50px 2px 1px #FFF;
  margin-left: 0px;
  margin-right: 0px;
  top: 50vh;
  left: 50vw;
  position: absolute;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.card-wrapper {
  max-width: 800px;
  z-index: 10;
}

.card {
  color: black;
  border: 2px solid #030e48;
  border-radius: 8px;
  padding: 12px;
  background-color: rgb(231, 231, 231);
  transition: transform .2s ease-in-out;
}

.card:hover:not(.primary-card) {
  color: white;
  /* background: linear-gradient(315deg,#000,#030e48 50%); */
  background: radial-gradient(circle, #000 10%, rgb(5, 18, 83) 50%, #300835 75%);
  position: relative;
  transition: .1s ease-in-out;
  transform: translate3d(0px, -2px, 0px);
  cursor: pointer;
}

.primary-card {
  padding: 32px;
}

.card-title {
  text-align: center;
  font-size: 1.1em;
  margin-bottom: 8px;
}

.card-title h2 {
  margin-top: 0px;
  font-size: 2em;
}

.card-footer {
  margin-top: 20px;
}

.card-footer a {
  text-decoration: none;
  color: inherit;
}

.dynamic-space {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0px;
}

.columns {
  display: flex;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.card-4 {
  grid-column: span 3;
}

.heading-text {
  font-size: 1.2em;
}

@media (min-width:600px) and (max-width: 960px) {
  .card-wrapper {
    max-width: 80vw;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .card-4 {
    grid-column: span 1;
  }
}

@media (max-width: 600px) {
  .card-wrapper {
    max-width: 80vw;
  }

  .grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .card-4 {
    grid-column: span 1;
  }
}
</style>