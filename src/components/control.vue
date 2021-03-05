<template>
  <div class="control">
    <div class="checkboxes">
      <div class="row">
        <div class="checkbox">
          <input
            checked="true"
            type="radio"
            id="horizontal"
            name="orientation"
            v-model="charOrient"
            value="h"
          />
          <label for="horizontal">Horizontal</label>
        </div>
        <div class="checkbox">
          <input
            type="radio"
            id="vertical"
            name="orientation"
            v-model="charOrient"
            value="v"
          />
          <label for="vertical">Vertical</label>
        </div>
      </div>
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
        <div class="checkbox">
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
    pixels: function () {this.update_converted()},
  },
  methods: {
    update_converted() {
      let char_sets = [];
      if (this.charOrient == "h") {
        for (let i = 0; i < this.pixels.length; i++) {
          let char_set = "";
          for (let j = 0; j < this.pixels[0].length; j++) {
            char_set += this.pixels[i][j] ? "1" : "0";
          }
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
  width: 38vw;
  margin-left: 2vw;
}

.checkboxes {
  display: flex;
  margin-bottom: 0.5vw;
  height: 8vw;
  font-size: 2vw;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
  width: 40vw;
}

.checkbox {
  width: 40vw;
  flex-direction: column;
}

.textbox {
  border-width: 1px;
  width: 100%;
  height: calc(29.5vw - 2px);
}
</style>
