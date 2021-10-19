<template>
  <div class="relative inline-block w-1/4 text-gray-700">
    <div class="graph_background_container">
      <div class="graph_background_container_one">
        <span class="label">100</span>
      </div>
      <div class="graph_background_container_two">
        <span class="label">75</span>
      </div>
      <div class="graph_background_container_three">
        <span class="label">50</span>
      </div>
      <div class="graph_background_container_four">
        <span class="label">25</span>
      </div>
      <span class="label">0</span>
    </div>
    <div class="w-full text-base flex justify-center pt-1">
      <div class="box">
        <div class="bar">
          <div
            class="graph"
            :style="{ height: barLengths.verticalLength1317 + '%' }"
          >
            <div class="age">
              {{ barLengths.verticalLength1317 }}
            </div>
          </div>
          <div class="name">13-17</div>
        </div>
        <div class="bar">
          <div
            class="graph"
            :style="{ height: barLengths.verticalLength1824 + '%' }"
          >
            <div class="age">
              {{ barLengths.verticalLength1824 }}
            </div>
          </div>
          <div class="name">18-24</div>
        </div>
        <div class="bar">
          <div
            class="graph"
            :style="{ height: barLengths.verticalLength2534 + '%' }"
          >
            <div class="age">
              {{ barLengths.verticalLength2534 }}
            </div>
          </div>
          <div class="name">25-34</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Chart",
  props: {
    rangeValue: String,
  },
  data: () => {
    return {};
  },
  computed: {
    barLengths() {
      return store.getters.getBarLengths;
    },
  },
};
</script>

<style scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%, -50%);
  width: 20rem;
  height: 20rem;
  background: transparent;
  display: flex;
}
.box .bar {
  position: relative;
  flex: 1;
  text-align: center;
}
.box .bar .graph {
  position: absolute;
  width: 40px;
  background: rgba(0, 0, 0, 0.2);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.box .bar .graph::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 0;
  background: linear-gradient(180deg, #003ba5, #009ffe);
}
.box .bar .graph::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
}
.box .bar .graph .age {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: rgb(139, 145, 145);
  font-weight: bold;
}
.box .bar .name {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding: 2px 6px;
  border-radius: 4px;
}
.verticalLength {
  height: 85%;
}
.graph_background_container {
  height: 20rem;
  border-top: dashed 2px #d3d3d3;
  width: 20rem;
  position: absolute;
  left: 5rem;
  top: 1px;
}
.graph_background_container_one,
.graph_background_container_two,
.graph_background_container_three,
.graph_background_container_four {
  height: 5rem;
  width: 100%;
  border-bottom: dashed 2px #d3d3d3;
}
.label {
  position: relative;
  top: -1rem;
  left: -2rem;
  font-weight: bold;
}
</style>
