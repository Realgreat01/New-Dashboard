<template>
  <div
    class="flex h-fit w-full flex-col justify-start rounded bg-white p-3 font-semibold"
  >
    <div class="w-fit rounded-lg bg-green-100 p-4"><RidesIcon /></div>
    <h2 class="my-10 text-xl font-semibold">Total Ride Count</h2>
    <h2 class="text-xl">
      <span class="text-3xl">{{ totalRides }}</span> Rides
    </h2>
  </div>
</template>

<script setup>
import RidesIcon from "../icons/RidesIcon.vue";
defineProps({
  totalRides: {
    type: String || Number,
    default: 400,
  },
});
</script>

<style lang="scss" scoped></style>
