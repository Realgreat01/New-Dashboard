<template>
    <div class="container">
        <p></p>
        <p></p>
        <p></p>
        <p>{{user.name}}</p>
    </div>
</template>
<script>
export default {
    name: "NavComponent",
    data() {
        return {
            user: {
                name: "Tomi Arayomi",
                initials: "TA"
            }
        }
    },
   
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