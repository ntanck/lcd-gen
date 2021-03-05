<template>
  <div v-bind:class="{pixel: true, on: enabled}" @click="onPixelClick"></div>
</template>

<script>
export default {
  props: {
    enabled: {
      type: Boolean,
      required: true,
    },
    p_c: {
      type: Number,
      required: true,
    },
    p_r: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onPixelClick() {
      this.$emit("pixel-click", { x: this.p_c, y: this.p_r });
    },
  },
};
</script>

<style scoped>
.pixel {
  display: inline-block;
  height: 5vw;
  width: 5vw;
  background-color: #77b300;
}

.pixel:not(:first-child) {
    margin-left: 0.5vw;
}

.on {
    background-color: #111a00;
}
</style>