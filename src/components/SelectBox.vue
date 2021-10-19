<template>
  <div class="relative inline-block w-1/4 text-gray-700 mr-2">
    <select
      class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border border-indigo-600 rounded-lg appearance-none focus:shadow-outline"
      @change="updateChart($event)"
    >
      <option v-for="(item, index) in ages" :key="index" :value="item"
        >{{ item }}
      </option>
    </select>
    <div
      class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
    >
      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
          fill-rule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "SelectBox",
  props: {
    rangeValue: String,
  },
  computed: {
    ages() {
      return store.getters.getAges;
    },
  },
  methods: {
    updateChart(e) {
      const updateData = {
        ageRange: this.rangeValue,
        age: e.target.value,
      };
      store.dispatch("updateBarValue", updateData);
    },
  },
};
</script>
