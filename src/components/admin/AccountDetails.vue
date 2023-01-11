<template>
  <div class="bg-white p-4 flex flex-col justify-between">
    <div class="flex items-center justify-between">
      <h2 class="mb-4 text-xl font-bold">Account Information</h2>
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
  firstname: {
    type: String,
    default: "Alao",
  },
  lastname: {
    type: String,
    default: "Johnson",
  },
  dateOfBirth: {
    type: String,
    default: "16th 20, 2003",
  },
  gender: {
    type: String,
    default: "Male",
  },
});
const address = ref([
  {
    title: "First Name",
    value: props.firstname,
  },
  {
    title: "Last Name",
    value: props.lastname,
  },
  {
    title: "Date of Birth",
    value: props.dateOfBirth,
  },
  {
    title: "Gender",
    value: props.gender,
  },
]);
</script>

<style lang="scss" scoped></style>
