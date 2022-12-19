<template>
    <div class="bar_container">
        <div class="bar_content">
            <ul>
                <li class="active">
                    <router-link to="/dashboard" class="active"> Dashboard</router-link>
                </li>
                <li>
                    <router-link to="/riders"> Users</router-link>
                </li>
                <li>
                    <router-link to="/networks"> Networks</router-link>
                </li>
                <li>
                    <router-link to="/organizations"> Organizations</router-link>
                </li>
                <li>
                    <router-link to="/drivers"> Drivers</router-link>
                </li>
            </ul>
            <button @click="logout" class="logout_btn">
                Logout
            </button>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: "SideBar",
    data() {
        return {
        }
    },
    methods: {
      async logout (){
        localStorage.removeItem("token");
        this.$store.dispatch("user", null)
        this.$router.push('/login')
        // await this.$store.dispatch('LogOut')
      },
    },
    computed: {
        ...mapGetters(["user"])
    }
}
</script>
<style scoped>
li .active {
    background-color: #f9f9f9;
}
a .active {
    color: #2AAA0B;
}
a {
    text-decoration: none;
    color: #404040 !important;
    font-weight: 600;
    font-size: 14px;
}
li {
    list-style-type: none;
    width: 100%;
    padding: 20px;

}
ul {
display: flex;
flex-direction: column;
/* gap: 10px; */
justify-content: flex-start;
align-items: flex-start;
width: 100%;
   
}
.logout_btn {
    cursor: pointer !important;
    background: #2AAA0B;
    width: 100% !important;
    text-align: center;
    position: relative;
    height: 50px;
    font-weight: 600;
    color: #ffffff;
    outline: none;
    border: none;
    bottom: 0;
}
.bar_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 90vh!important;
    padding-top: 30px;
}
</style>