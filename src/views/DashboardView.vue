<template>
  <div class="wrapper">
 <header><NavComponent /></header>
 <article>
   <HelloWorld />
 </article> 
 <aside><SideBar /></aside>
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
import { mapActions, mapGetters, mapState } from 'vuex';
import axios from 'axios';
import HelloWorld from '@/components/HelloWorld.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  name: "DashboardView",
  data() {
      return {};
  },
  methods: {
  ...mapActions(['fetchUser'])
  },
  components: { SideNav, NavComponent, FooterComponent, UserComponent, HelloWorld, SideBar },
  async created(){
    await this.fetchUser();
  }
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