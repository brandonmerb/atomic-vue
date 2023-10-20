<template>
  <div class="container dynamic-space">
    <div class="bg-layer layer-1"></div>
    <div class="bg-layer layer-2"></div>
    <div class="bg-layer layer-3"></div>
    <div class="bg-layer layer-4"></div>
    <div class="stars" :style="{'box-shadow': shadow}"></div>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500&display=swap" rel="stylesheet">
    <div class="card-wrapper">
      <div class="card primary-card">
        <div class="card-title">
          <h2>Atomic Vue</h2>
        </div>
        <div class="card-text">
          If you're seeing this message, that means you haven't installed any
          modules that contain a master template. Here are some useful links to get started!
        </div>
        <div class="card-footer columns">
          <div class="card dynamic-space">
            <div class="card-title">
              🚀 Quick Start
            </div>
            <div class="card-text">
              Some text here
            </div>
          </div>
          <div class="card dynamic-space">
            <div class="card-title">
              🌌 Singularity Docs
            </div>
            <div class="card-text">
              
            </div>
          </div>
          <div class="card dynamic-space">
            <div class="card-title">
              🔨 Tools
            </div>
            <div class="card-text">
            </div>
          </div>
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
    if (i == max-1) {
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
<style>
html, body, .container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0px;
  font-family: 'Roboto', sans-serif;
  background-color: #000;
}
.bg-layer {
  height: 100vh;
  width: 100vw;
  position: absolute;
  display: block;
  z-index: 1;
  background: -webkit-linear-gradient(315deg,#000 25%,#030e48);
  opacity: .8
  /* opacity: .5; */
}
.layer-1 {
  background: linear-gradient(315deg,#300835 25%,#030e48);
  opacity: 1;
}
.layer-2 {
  background: radial-gradient(circle, #FFF 25%, #647eff 50%);
  background-position: 300px;
  opacity: .1;
}
.layer-3 {
  /* background: linear-gradient(to right, #5c1e2c, #300835);
  background-size: 100vw 25vh;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 1; */
}
.layer-4 {
}
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
  height: 250px;
  max-width: 800px;
  z-index: 10;
}
.card {
  color: black;
  border: 2px solid #030e48;
  border-radius: 8px;
  padding: 12px;
  background-color: #e9e8ee;
  margin-left: 8px;
  margin-right: 8px;
  transition: transform .2s ease-in-out;
}
.card:hover:not(.primary-card) {
  color: white;
  background: linear-gradient(315deg,#000,#030e48 50%);
  position: relative;
  transition: .1s ease-in-out;
  transform: translate3d(0px, -2px, 0px);
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
.dynamic-space {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0px;
}
.columns {
  display: flex;
}
</style>