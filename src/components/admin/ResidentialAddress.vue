<template>
  <div class="bg-white p-4 flex flex-col justify-between">
    <div class="flex items-center justify-between">
      <h2 class="mb-4 text-xl font-bold">Residential Address</h2>
      <EditIcon />
    </div>

    <div class="flex flex-col justify-between gap-y-4">
      <h2
        class="flex justify-between text-lg"
        v-for="({ title, value }, index) in address"
        :key="index"
      >
        <h2>{{ title }}</h2>
        <h2>{{ value }}</h2>
      </h2>
    </div>
  </div>
</template>

<script setup>
import EditIcon from "../icons/EditIcon.vue";
import { ref } from "vue";

const props = defineProps({
  homeAddress: {
    type: String,
    default: "789, Johnanne Lane Street",
  },
  city: {
    type: String,
    default: "Boston",
  },
  country: {
    type: String,
    default: "United States",
  },
  state: {
    type: String,
    default: "Masschachuttes",
  },
  zipCode: {
    type: String,
    default: "45683",
  },
});
const address = ref([
  {
    title: "Home Address",
    value: props.homeAddress,
  },
  {
    title: "City",
    value: props.city,
  },
  {
    title: "Country",
    value: props.country,
  },
  {
    title: "State",
    value: props.state,
  },
  {
    title: "Zip Code",
    value: props.zipCode,
  },
]);
</script>

<style lang="scss" scoped></style>
