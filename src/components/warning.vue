<template>
  <div class="container" style="display: flex; flex-grow:1; flex-shrink:1; justify-content:center; align-items:center; background-color: #242B64">
    <div class="card" style="border: 1px solid #4E5180; border-radius: 5px; height: 250px; max-width: 800px; padding: 12px; background-color: #EDEDED;">
      <div class="card-title">
        <h2 style="text-align: center; font-size: 2em;">Atomic Vue</h2>
      </div>
      <div class="card-text">
        If you're seeing this message, that means you haven't installed any
        modules that contain a master template
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount } from 'vue';

function makeMax(element: HTMLElement) {
  element.style.height = "100vh";
  element.style.width = "100vw";
  element.style.overflow = "hidden";
  element.style.margin = "0px";
}

onBeforeMount(() => {
  // Modify the DOM to look how we want, and insert additional stylings.
  // This is done programatically since we're not bundling CSS with our
  // build.
  makeMax(document.querySelector("html") as HTMLElement)
  makeMax(document.querySelector("body") as HTMLElement);

  const app = document.getElementById("app");
  if (app) {
    app.style.display = "flex";
    app.style.width = "100vw";
    app.style.height = "100vh";
  }
})

</script>