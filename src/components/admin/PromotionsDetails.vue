<template>
  <div class="bg-white p-4 flex flex-col justify-between">
    <div class="flex items-center justify-between">
      <h2 class="mb-4 text-2xl font-bold">Promotions</h2>
    </div>

    <div class="flex flex-col justify-between gap-y-4">
      <h2
        class="flex justify-between text-xl"
        v-for="({ title, value }, index) in promotions"
        :key="index"
      >
        <h2>{{ title }}</h2>
        <h2>{{ value }}</h2>
      </h2>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
 maximum: {
    type: String || Number,
    default: "30",
  },
  expiryDate: {
    type: String,
    default: "16th 20, 2003",
  },
  ridesLeft: {
    type: String || Number,
    default: "400",
  },
  areas: {
    type: String,
    default: "Lagos",
  },
});
const promotions = ref([
  {
    title: "Maximum promo",
    value: "$ "+props.maximum,
  },
  {
    title: "Expiry Date",
    value: props.expiryDate,
  },
  {
    title: "PromoRidesLeft",
    value: props.ridesLeft,
  },
  {
    title: "Areas",
    value: props.areas,
  },
]);
</script>

<style lang="scss" scoped></style>
