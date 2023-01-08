<template>
  <div
    class=" flex w-full items-center justify-between border bg-white px-6 py-4"
  >
    <input
      type="text"
      class="block h-10 w-2/3 border-gray-200 p-8 text-xl font-semibold"
      placeholder="Search"
    />
    <div class="content">
      <p class="mr-2">Sort By : {{ sort }}</p>
      <SortIcon />
    </div>
    <div class="content">
      <FilterIcon />
      <p>Filter</p>
    </div>
    <p class="material-icons block" style="font-size: 30px">add_circle</p>
  </div>
</template>

<script setup>
import SortIcon from "../icons/SortIcon.vue";
import FilterIcon from "../icons/FilterIcon.vue";
import { ref } from "vue";
const sort = ref("Recent");
</script>

<style lang="scss" scoped>
.content {
  @apply flex h-10 items-center justify-between gap-x-2 border border-gray-200 bg-white p-8  text-xl font-semibold;
}
</style>
