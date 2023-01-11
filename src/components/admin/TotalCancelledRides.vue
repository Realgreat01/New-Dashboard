<template>
  <div
    class="flex h-fit w-full flex-col justify-start rounded bg-white p-3 font-semibold"
  >
    <div class="w-fit rounded-lg bg-red-100 p-4"><CancelIcon /></div>
    <h2 class="my-10 text-xl font-semibold">Total Cancelled Rides</h2>
    <h2 class="text-xl">
      <span class="text-3xl">{{ cancelledRides }}</span> Rides
    </h2>
  </div>
</template>

<script setup>
import CancelIcon from "../icons/CancelIcon.vue";
defineProps({
  cancelledRides: {
    type: String || Number,
    default: 86,
  },
});
</script>

<style lang="scss" scoped></style>
