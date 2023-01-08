<template>
    <div>
    <div class="bar_container">
        <div class="sidebar_links">
            <div class="links_links">
                <router-link to="/dashboard"> Dashboard</router-link>
            </div>
            <div class="links_links">
                <router-link to="/riders"> Users</router-link>
            </div>
            <div class="links_links ">
                <router-link to="/networks"> Networks</router-link>
            </div>
            <div class="links_links ">
                <router-link to="/organizations"> Organizations</router-link>
            </div>
            <div class="links_links active">
                <router-link to="/drivers"> Drivers</router-link>
            </div>
        </div>
        <button @click="logout" class="logout_btn">
            Logout
        </button>
    </div>
    <NavComponent />
    <p>jbdfvebdjfbejrbejrb</p>
    </div>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';

    export default {
    components: { NavComponent }
}
</script>

<style scoped>

</style>