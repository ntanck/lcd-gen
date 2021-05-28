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
  height: 3vw;
  width: 3vw;
  background-color: #03045e;
  border-style: solid;
  border-color: white;
  border-width: 1px;
}

.pixel:not(:first-child) {
    margin-left: 0.5vw;
}

.on {
    background-color: #f0f0f0;
}
</style>