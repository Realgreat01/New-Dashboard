<template>
  <div class="flex flex-col justify-between gap-4">
    <div class="grid grid-cols-3 gap-x-2">
      <ProfileInfomation />
      <div class="grid grid-rows-2 gap-y-4">
        <AccountDetails />
        <ResidentialAddress />
      </div>
      <PaymentMethods />
    </div>

    <div style="grid-template-columns: 3fr 2fr" class="grid gap-4">
      <RideHistory />
      <div class="flex flex-col gap-4">
        <div class="grid grid-cols-2 gap-4">
          <TotalRidesCount />
          <TotalCancelledRides />
        </div>
        <PromotionsDetails/>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileInfomation from "@/components/admin/ProfileInfomation.vue";
import AccountDetails from "@/components/admin/AccountDetails.vue";
import ResidentialAddress from "@/components/admin/ResidentialAddress.vue";
import PaymentMethods from "../../components/admin/PaymentMethods.vue";
import RideHistory from "../../components/admin/RideHistory.vue";
import TotalRidesCount from "../../components/admin/TotalRidesCount.vue";
import TotalCancelledRides from "../../components/admin/TotalCancelledRides.vue";
import PromotionsDetails from '../../components/admin/PromotionsDetails.vue';
// import { ref } from "vue";
</script>

<style lang="scss" scoped></style>
