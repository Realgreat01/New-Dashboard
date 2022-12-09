<template>
    <div class="container">
        <div v-if="!registerActive" class="login_card" v-bind:class="{ error: emptyFields }">
            <div class="space">
                <h1>Forgot <span>Password</span></h1>
                <small>Please enter the email address you use
                    when creating your account, we’ll send you instruction to your email</small>
            </div>
            <form class="form_group">
                <input v-model="email" type="email" class="form-control" placeholder="Email" required>
                <button type="submit" class="greach_button" @click.prevent="submitForm">Verify</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ForgotPassword',

    data: () => ({
        registerActive: false,
        email: "",
        passwordLogin: "",
        emailReg: "",
        passwordReg: "",
        confirmReg: "",
        emptyFields: false
    }),
    methods: {
        validateEmail(email) {
            const re =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
            return re.test(email);
        },
        submitForm() {
            if (this.email === "") {
                this.$toasted.error("Please fill your email");
                return false;
            }
            if (!this.validateEmail(this.email)) {
                this.$toasted.error("Invalid email address");
                return false;
            }
        },
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
    font-weight: 700;
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
small {
    margin-top: 10px;
    line-height: 30px;
}
</style>