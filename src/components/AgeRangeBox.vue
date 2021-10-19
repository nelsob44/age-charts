<template>
  <div
    class="relative inline-block w-1/4 text-gray-700 border border-black border-2 h-10"
  >
    <div class="w-full h-10 text-base flex justify-center pt-1">
      {{ rangeValue }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AgeRangeBox",
  props: {
    rangeValue: String,
  },
};
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
