<template>
  <div id="app">
    <lcd v-bind:pixels="pixel_data" @pixel-click="onPixelClick" />
    <control v-bind:pixels="pixel_data" />
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
      let enabled = this.pixel_data[coords["y"]];
      enabled[coords["x"]] = !enabled[coords["x"]];
      Vue.set(this.pixel_data, coords["y"], enabled);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  color: #2c3e50;
  width: 70%;
  display: flex;
}
</style>
