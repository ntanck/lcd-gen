<template>
  <div id="app">
    <h1>LCD Character Generator</h1>
    <div class="main">
      <lcd v-bind:pixels="pixel_data" @pixel-click="onPixelClick" />
      <control v-bind:pixels="pixel_data" />
    </div>
  </div>
</template>

<script>
import lcd from "./components/lcd.vue";
import Vue from "vue";
import control from "./components/control.vue";

export default {
  name: "App",
  components: {
    lcd,
    control,
  },
  data: () => ({
    pixel_data: [
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ],
  }),
  methods: {
    onPixelClick(coords) {
      let enabled = this.pixel_data[coords.y];
      enabled[coords.x] = !enabled[coords.x];
      Vue.set(this.pixel_data, coords.y, enabled);
    },
  },
};
</script>

<style>
#app h1 {
  color: #f1f1f1;
  font-size: 2vw;
  text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main {
  font-family: inherit;
  margin: auto;
  color: #293241;
  border-radius: 3vh;
  background-color: #003385;
  padding: 2vw;
  width: 46vw;
  display: flex;
}

body {
  background-image: url("resources/noise.png");
  background-color: #00509d;
}
</style>
