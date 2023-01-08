<template>
    <div class="container">
        <h3>Page not Found!</h3>
        <img src="../assets/404.svg" alt="">
        <div>
            <router-link class="not_found" to="/">Go home?</router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NotFound'
}

</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    gap: 40px;
}

h1 {
    color: var(--border);
    font-size: 2em;
}

a {
    text-decoration: none;
    background-color: #2AAA0B;
    padding: 15px;
    width: 100%;
    color: #FFFFFF;
}
</style>