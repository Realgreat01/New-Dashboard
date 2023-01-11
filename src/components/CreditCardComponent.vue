<template>
  <div
    class="flex h-60 w-full flex-col justify-between rounded-lg bg-[#2AAA0B] p-4 text-white"
  >
    <div class="flex items-center justify-between">
      <CreditCardChipIcon />
      <p>VISA</p>
    </div>
    <p class="text-center text-4xl">{{ cardDetails.cardNumber }}</p>
    <div class="flex items-center justify-between">
      <div>
        <p>CARD HOLDER</p>
        <P> {{ cardDetails.cardName }}</P>
      </div>
      <div>
        <p>EXPIRE</p>
        <P> {{ cardDetails.cardMonth }} / {{ cardDetails.cardYear }}</P>
      </div>
    </div>
  </div>
  <!-- <VuePaycard background-image="https://xsgames.co/randomusers/avatar.php?g=male" :value-Fields="valueFields" /> -->
</template>

<script setup>
// import VuePaycard from "vue-paycard";
import CreditCardChipIcon from "./icons/CreditCardChipIcon.vue";
// import { ref } from "vue";
// eslint-disable-next-line no-unused-vars
defineProps({
  cardDetails: {
    type: Object,
    default() {
      return {
        cardName: "Olto Jacob",
        cardNumber: "5349 2590 6178 0396",
        cardMonth: "07",
        cardYear: "2022",
        cardCvv: "398",
      };
    },
  },
});
</script>

<style lang="scss" scoped></style>
