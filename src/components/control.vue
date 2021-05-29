<template>
  <div class="control">
    <div class="checkboxes">
      <p class="row">Orientation</p>
      <div class="row">
        <div class="checkbox">
          <input
            checked="true"
            type="radio"
            id="horizontal"
            name="orientation"
            v-model="charOrient"
            value="h"
            @change="update_converted"
          />
          <label for="horizontal">Horizontal</label>
        </div>
        <div class="checkbox small">
          <input
            type="radio"
            id="vertical"
            name="orientation"
            v-model="charOrient"
            value="v"
            @change="update_converted"
          />
          <label for="vertical">Vertical</label>
        </div>
      </div>
      <p class="row">Output</p>
      <div class="row">
        <div class="checkbox">
          <input
            checked="true"
            type="radio"
            id="hexadecimal"
            name="data"
            v-model="dataType"
            value="hex"
            @change="update_converted"
          />
          <label for="hexadecimal">Hexadecimal</label>
        </div>
        <div class="checkbox small">
          <input
            type="radio"
            id="hex"
            name="data"
            v-model="dataType"
            value="bin"
            @change="update_converted"
          />
          <label for="binary">Binary</label>
        </div>
      </div>
    </div>
    <textarea class="textbox" v-model="converted" />
    <button v-on:click="$emit('clear')">Reset</button>
  </div>
</template>

<script>
export default {
  name: "control",
  data: () => ({
    dataType: "hex",
    charOrient: "h",
    converted: "",
  }),
  props: {
    pixels: Array,
  },
  watch: {
    pixels: function () {
      this.update_converted();
    },
  },
  methods: {
    update_converted() {
      let char_sets = [];
      if (this.charOrient == "h") {
        for (let row of this.pixels) {
          let char_set = "";
          for (let pixel of row) char_set += pixel ? "1" : "0";
          char_sets.push(char_set);
        }
      } else {
        for (let i = 0; i < this.pixels[0].length; i++) {
          let char_set = "";
          for (let j = this.pixels.length - 1; j >= 0; j--) {
            char_set += this.pixels[j][i] ? "1" : "0";
          }
          char_sets.push(char_set);
        }
      }

      if (this.dataType === "hex") {
        char_sets = char_sets.map(function (r) {
          let str = "" + parseInt(r, 2).toString(16);
          return "\\x" + "00".substring(0, 2 - str.length) + str;
        });
      }

      this.converted = char_sets.join(this.dataType === "hex" ? "" : ",");
    },
  },
};
</script>

<style scoped>
.control {
  margin-left: 2vw;
  color: white;
}

.checkboxes {
  display: flex;
  margin-bottom: 0.5vw;
  height: 9vw;
  font-size: 2vw;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
  width: 25vw;
}

div.row:nth-of-type(1) {
  margin-bottom: 0.4em;
}

div.row {
  margin-top: 0.2em;
}

button {
  padding: 0;
  border: 0;
  width: 5vw;
  margin-top: 0.1vw;
  height: 2vw;
  display: block;
}

p {
  font-size: 0.5em;
  margin: 0;
  border-bottom: 1px solid;
}

.checkbox {
  flex-direction: column;
  width: 17vw;
}

.small {
  width: 10vw;
}

.textbox {
  border-width: 0;
  width: 25vw;
  height: calc(13vw + 5px);
  resize: none;
  padding: 0;
}
</style>
