<template>
   <div class="wrapper">
  <header><NavComponent /></header>
  <article>
    <UserComponent />
  </article> 
  <aside><SideNav /></aside>
  <footer>
    <FooterComponent />
  </footer>
</div>
</template>

<script>
import SideNav from '@/components/SideNav.vue';
import NavComponent from '@/components/NavComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import UserComponent from '@/components/UserComponent.vue';
import { mapGetters } from 'vuex';
import axios from 'axios';

    export default {
    name: "RiderView",
    data() {
        return {};
    },
    components: { SideNav, NavComponent, FooterComponent, UserComponent },
    async created(){
      this.$store.dispatch("user", response.data)
      const response = await axios.get("user", {
        headers: { 
          Authorization: "Bearer" + localStorage.getItem ("user")
        }
        
      });
    },
//     computed :{
//       computed: {
//     ...mapGetters(["user"])
//   }
//     }
}
</script>

<style scoped>
header {
  grid-area: header;
  width: 100%;
}
article {
  grid-area: content;
  width: 100%;
}
aside {
  grid-area: sidebar;
  width: 100%;
  background: #ffffff;
    border-left: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    height: 90vh!important;

}
footer {
  grid-area: footer;
  width: 100%;
}
.wrapper {
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  background-color: #f9f9f9;
  grid-template-areas: 
    "header  header"
    "sidebar content"
    "footer  footer";
}
@media (max-width: 500px) {
  .wrapper {
    grid-template-columns: 4fr;
    grid-template-areas:
      "header"
      "content"
      "sidebar"
      "footer";
  }
}
</style>