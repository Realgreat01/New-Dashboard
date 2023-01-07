<template>
    <div class="container">
        <div class="login_card">
            <div class="space">
                <h1><span>Greach</span></h1>
                <small>Welcome Back, Please login to your account.</small>
            </div>
            <form @submit.prevent="handleSubmit" class="form_group">
                <input v-model="email" type="email" class="form-control" placeholder="Email" required>
                <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                <input type="submit" class="greach_button" @click.prevent="LogIn">
                <router-link to="/forgot">Forgot Password?</router-link>
            </form>
        </div>
    </div>
</template>
<script>
// import axios from 'axios'
import axios from "axios"
export default {
    name: 'LoginView',

    data: () => ({

        email: "",
        password: "",
    }),
    methods: {
        async handleSubmit() {
            if (this.email === "") {
                this.$toasted.error("Please fill your email");
                return false;
            }
            if (!this.validateEmail(this.email)) {
                this.$toasted.error("Invalid email address");
                return false;
            }
            if (this.password == "") {
                this.$toasted.error("Please enter your password");
                return false;
            }
            const response = await axios.post("http://34.192.182.160:8010/admin/login", {
                email: this.email, 
                password: this.password
            })
        }
    }
}
</script>
<style scoped>
.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #ffffff;
}

.login_card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    background: #f9f9f9;
    height: 400px;
    width: 50%;
    padding: 5%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.form_group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
}

input[type="email"] {
    border: none;
    background: #ffffff;
    margin: 0;
    padding: 7px 8px;
    font-size: 14px;
    color: inherit;
    border: none;
    border-radius: 3px;
    outline: none;
    width: 100%;
    height: 50px;
    padding: 0 0 0 15px;
}

input[type="password"] {
    border: none;
    background: #ffffff;
    margin: 0;
    padding: 7px 8px;
    font-size: 14px;
    color: inherit;
    border: none;
    border-radius: 3px;
    outline: none;
    height: 50px;
    padding: 0 0 0 15px;
    width: 100%;
}

.greach_button {
    border: none;
    outline: none;
    cursor: pointer;
    width: 70%;
    height: 50px;
    text-align: center;
    color: #ffffff;
    background: #2AAA0B;
    border-radius: 3px;
}

a {
    color: #2AAA0B;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
}

span {
    color: #2AAA0B;
}

.space {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>