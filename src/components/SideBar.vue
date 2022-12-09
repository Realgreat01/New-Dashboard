<template>
    <div class="bar_container">
        <div class="sidebar_links">
            <div class="links_links active">
                <router-link to="/dashboard"> Dashboard</router-link>
            </div>
            <div class="links_links">
                <router-link to="/riders"> Riders</router-link>
            </div>
            <div class="links_links">
                <router-link to="/networks"> Networks</router-link>
            </div>
            <div class="links_links">
                <router-link to="/organizations"> Organizations</router-link>
            </div>
            <div class="links_links">
                <router-link to="/drivers"> Drivers</router-link>
            </div>
        </div>
        <button @click="logout" class="logout_btn">
            Logout
        </button>
    </div>
</template>
<script>
export default {
    name: "SideBar",
    data() {
        return {
        }
    },
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isAuthenticated}
    },
    methods: {
      async logout (){
        await this.$store.dispatch('LogOut')
        this.$router.push('/login')
      }
    },
}
</script>
<style >
.bar_container {
    background: #ffffff;
    width: 20%;
    height: 100vh;
    border-left: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 20px;
}

a {
    text-decoration: none;
    font-size: 14px;
    color: #2AAA0B;
    font-weight: 600;
}

.sidebar_links {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    /* gap: 10px; */
}

.links_links {
    display: block;
    width: 100%;
    justify-content: space-between !important;
    padding: 20px 0 20px 30px;
    cursor: pointer !important;
}

.logout_btn {
    cursor: pointer !important;
    background: linear-gradient(135deg, #2AAA0B 0%, #2AAA0B 100%);
    width: 100%;
    text-align: center;
    position: absolute;
    height: 50px;
    font-weight: 600;
    color: #ffffff;
    outline: none;
    border: none;
    position: absolute;
    bottom: 0;
}
</style>