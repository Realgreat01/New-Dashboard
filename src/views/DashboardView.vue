<template>
    <div class="containers">
      <SideBar />
      <NavComponent />
      <HelloWorld />
      <FooterComponent />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import NavComponent from '@/components/NavComponent.vue';
  import SideBar from '@/components/SideBar.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
import axios from 'axios';
  
  export default {
    name: 'HomeView',
    components: {
      HelloWorld,
      NavComponent,
      SideBar,
      FooterComponent
    },
    async created(){
      const response = await axios.get("user", {
        headers: { 
          Authorization: "Bearer" + localStorage.getItem ("user")
        }
      });
    }
  }
  </script>
  <style>
  .screen {
    display: flex;
    flex-direction: column !important;
    justify-content: space-between;
    background: #F9F9F9;
    margin-left: 350px;
    max-width: 1440px;
  }
  
  .containers {
    background: #f9f9f9;
  }
  </style>