<template>
  <div class="flex h-full w-full">
    <SidebarComponent class="sticky top-0 h-screen w-1/5 bg-white" />
    <div class="relative flex h-screen w-4/5 flex-col px-6 py-1">
      <NavbarComponent />
      <RouteDetailsComponent />
      <ActionComponent />
      <div class="route h-4/6 overflow-x-hidden overflow-y-scroll">
        <RouterView class="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SidebarComponent from "@/components/reusables/SidebarComponent.vue";
import NavbarComponent from "@/components/reusables/NavbarComponent.vue";
import ActionComponent from "@/components/reusables/ActionComponent.vue";
import RouteDetailsComponent from "@/components/reusables/RouteDetailsComponent.vue";
</script>
<style lang="scss" scoped>
.grid {
  grid-template-columns: 1fr 4fr;
}
.route{
  &::-webkit-scrollbar{
    display:none;
  }
}
</style>
