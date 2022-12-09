<template>
    <div class="container">
        <p>{{user.company}}</p>
    </div>
</template>
<script>
export default {
    name: "FooterComponent",
    data() {
        return {
            user: {
                company: "Greach 2022 | Admin Dashboard",
            }
        }
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
    padding: 10px 20px 0 0;
    box-shadow: #f9f9f9 0px 20px 25px -5px;
}

p {
    color: #404040;
}
</style>