<template>
  <div class="container dynamic-space">
    <div class="card-wrapper">
      <div class="card">
        <div class="card-title">
          <h2>Atomic Vue</h2>
        </div>
        <div class="card-text">
          If you're seeing this message, that means you haven't installed any
          modules that contain a master template
        </div>
        <div class="card-footer columns">
          <div class="card dynamic-space">
            <div class="card-title">
              Getting Started
            </div>
            <div class="card-text">
            
            </div>
          </div>
          <div class="card dynamic-space">
            <div class="card-title">
              Getting Started
            </div>
            <div class="card-text">
            
            </div>
          </div>
          <div class="card dynamic-space">
            <div class="card-title">
              Getting Started
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
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242B64
}
.card-wrapper {
  height: 250px;
  max-width: 800px;
}
.card {
  border: 1px solid #4E5180;
  border-radius: 5px;
  padding: 12px;
  background-color: #EDEDED;
  margin-left: 8px;
  margin-right: 8px;
}
.card-title {
  text-align: center;
  font-size: 1.1em;
}
.card-title h2 {
  font-size: 2em;
}
.card-footer {
  margin-top: 20px;
}
.dynamic-space {
  flex-grow: 1;
  flex-shrink: 1;
}
.columns {
  display: flex;
}
</style>