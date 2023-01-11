<template>
  <div class="flex flex-col justify-between bg-white">
    <div class="m-4 flex items-center justify-between">
      <h2 class="mb-4 text-xl font-bold">Payment Methods</h2>
      <EditIcon />
    </div>
    <div class="m-4"><CreditCardComponent :cardDetails="creditCard" /></div>
    <div class="flex flex-col justify-between gap-y-4 bg-gray-50 p-6">
      <h2
        class="flex justify-between text-lg"
        v-for="({ title, value }, index) in cardInfo"
        :key="index"
      >
        <h2>{{ title }}</h2>
        <h2>{{ value }}</h2>
      </h2>
    </div>
  </div>
</template>

<script setup>
import CreditCardComponent from "../CreditCardComponent.vue";
import EditIcon from "../icons/EditIcon.vue";
import { reactive, ref } from "vue";
const month = ref("04");
const year = ref("2028");
const cardDetails = reactive({
  cardType: "VISA",
  cardHolder: "Ololade MrMoney",
  expire: month.value + "/" + year.value,
  cardNumber: "2898 3663 3882 9920",
  cvv: "890",
});
const cardInfo = reactive([
  { title: "Type", value: cardDetails.cardType },
  { title: "Card Holder", value: cardDetails.cardHolder },
  { title: "Expire", value: cardDetails.expire },
  { title: "Card Number", value: cardDetails.cardNumber },
]);
const creditCard = ref({
  cardName: cardDetails.cardHolder,
  cardNumber: cardDetails.cardNumber,
  cardMonth: month.value,
  cardYear: year.value,
  cardCvv: cardDetails.cvv,
});
</script>

<style lang="scss" scoped></style>
