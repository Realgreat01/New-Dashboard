<template>
  <div class="bg-white text-white flex flex-col justify-between items-center">
    <img :src="backgroundImage" alt="" class="block" />
    <p class="text-xl font-bold text-brand-dark">{{ firstname }} {{ lastname }}</p>

    <ButtonComponent
      :text="total"
      customStyle="height: 40px; width: 35%; padding:5px; "
    />

    <!-- Users Location , Email and Phone container  -->
    <div class="flex flex-col items-center justify-center w-full text-brand-dark bg-gray-50">
      <div class="my-1 flex items-center gap-x-5">
        <LocationIcon />
        <p>{{ address }}</p>
      </div>
      <div class="my-1 flex items-center gap-x-5">
        <EmailIcon />
        <p>{{ email }}</p>
      </div>
      <div class="my-1 flex items-center gap-x-5">
        <PhoneIcon />
        <p>{{ phone }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ButtonComponent from "@/components/reusables/ButtonComponent.vue";
import LocationIcon from "../icons/LocationIcon.vue";
import EmailIcon from "../icons/EmailIcon.vue";
import PhoneIcon from "../icons/PhoneIcon.vue";

const props = defineProps({
  backgroundImage: {
    type: String,
    default: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  firstname: {
    type: String,
    default: "Tayo",
  },
  lastname: {
    type: String,
    default: "Olododo",
  },
  amount: {
    type: Number,
    default: 4003,
  },
  email: {
    type: String,
    default: "users@greach.co",
  },
  address: {
    type: String,
    default: "14, Boston , Texas, USA",
  },
  phone: {
    type: String,
    default: "+2348 849 9202",
  },
});
const total = ref("Spent: $" + props.amount);
</script>

<style lang="scss" scoped></style>
