<template>
  <div class="container mx-auto my-10">
    <div class="container mx-auto py-4 pl-4">
      <AgeRangeBox
        :rangeValue="range"
        v-for="(range, index) in ranges"
        :key="index"
      />
    </div>
    <div class="container mx-auto p-4">
      <SelectBox
        :rangeValue="range"
        v-for="(range, index) in ranges"
        :key="index"
      />
    </div>
    <div class="container mx-auto p-4">
      <div class="ml-12 my-6 text-3xl font-semibold">
        Audience age
      </div>
      <Chart />
    </div>
  </div>
</template>

<script>
import SelectBox from "./components/SelectBox.vue";
import AgeRangeBox from "./components/AgeRangeBox.vue";
import Chart from "./components/Chart.vue";

export default {
  name: "App",
  components: {
    SelectBox,
    AgeRangeBox,
    Chart,
  },
  data: () => {
    return {
      ranges: ["13_17", "18_24", "25_34"],
    };
  },
};
</script>

<style></style>
