<template>
    <div class="container">
        <p></p>
        <p></p>
        <p></p>
        <p v-if="user" >{{ user.email }}</p>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: "NavComponent",
    computed :{
        ...mapState(["user"])
   }
}
</script>
<style scoped>
.container {
    display: flex;
    background: #FFFFFF;
    height: 50px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
    max-width: 1440px;
    width: 100%;
    margin: 0;
    box-shadow: #f9f9f9 0px 20px 25px -5px;
}

p {
    color: #404040;
}
</style>