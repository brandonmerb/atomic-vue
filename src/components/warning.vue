<template>
  <div class="container dynamic-space">
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
<style>
html, body, .container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0px;
  font-family: 'Roboto', sans-serif;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
}
.card-wrapper {
  height: 250px;
  max-width: 800px;
}
.card {
  border: 2px solid #4E5180;
  border-radius: 8px;
  padding: 12px;
  background-color: #EDEDED;
  margin-left: 8px;
  margin-right: 8px;
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