<template>
  <div class="display">
    <div v-for="(row, rowIndex) in pixels" :key="rowIndex" class="row">
      <pixel
        v-for="(col, colIndex) in row"
        :key="colIndex"
        :p_r="rowIndex"
        :p_c="colIndex"
        v-bind:enabled="pixels[rowIndex][colIndex]"
        @pixel-click="onPixelClick"
      >
      </pixel>
    </div>
  </div>
</template>

<script>
import pixel from "./pixel";
export default {
  name: "lcd",
  components: {
    pixel
  },
  watch: {
    },
  props: {
    pixels: Array,
  },
  methods: {
    onPixelClick(coords) {
      this.$emit("pixel-click", coords)
    },
  },
};
</script>

<style scoped>
.display {
  padding:0.5vw;
  width: calc(30vw-5px);
  height: calc(24vw+5px);
  background-color: #03045e;
}

.row {
  height: 3vw;
}

.row:not(:last-child) {
  margin-bottom: 0.5vw;
}
</style>
